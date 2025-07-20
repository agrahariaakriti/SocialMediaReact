import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

// Reducer function declaration

const postListReducerFunction = (currentPostList, action) => {
  let new_Post_List = currentPostList;
  if (action.type === "ADD_POST") {
    new_Post_List = [action.payload, ...currentPostList];
    console.log(currentPostList);
  } else if (action.type === "DELETE_POST") {
    new_Post_List = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "INITIAL_POST") {
    new_Post_List = action.payload.posts;
  }
  return new_Post_List;
};

// exported context
const PostListProvider = ({ children }) => {
  const [postList, dispatchActionToReducer] = useReducer(
    postListReducerFunction,
    []
  );

  // Reducer Declaration

  const createPost = (postObj) => {
    console.log("hello in store===>" + postObj);

    const createPostAction = {
      type: "ADD_POST",
      payload: postObj,
    };
    dispatchActionToReducer(createPostAction);
  };

  const deletePost = (id) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: { id },
    };
    dispatchActionToReducer(deletePostAction);
  };

  const addInitialPost = (posts) => {
    let initialPostAction = {
      type: "INITIAL_POST",
      payload: {
        posts,
      },
    };
    dispatchActionToReducer(initialPostAction);
  };

  const [laodingInitialState, SetLoadingState] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    SetLoadingState(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPost(obj.posts);
        SetLoadingState(false);
      });
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        createPost,
        deletePost,
        laodingInitialState,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
