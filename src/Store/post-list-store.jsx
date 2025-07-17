import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

// Reducer function declaration

const postListReducerFunction = (currentPostList, action) => {
  console.log("in the reducer");

  let new_Post_List = currentPostList;
  if (action.type === "ADD_POST") {
    new_Post_List = [action.payload, ...currentPostList];
  } else if (action.type === "DELETE_POST") {
    console.log("inthe delete post");

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
  // Reducer Declaration

  const [postList, dispatchActionToReducer] = useReducer(
    postListReducerFunction,
    []
  );

  const createPost = (userId, postTitle, postBody, reaction, tag) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reaction}  ${tag}
    `);
    console.log(tag);

    const createPostAction = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reaction,
        userId: userId,
        tags: tag,
        url: "https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg",
      },
    };
    dispatchActionToReducer(createPostAction);
  };

  const deletePost = (id) => {
    console.log("hello delete post");

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

  return (
    <PostList.Provider
      value={{ postList, createPost, deletePost, addInitialPost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
