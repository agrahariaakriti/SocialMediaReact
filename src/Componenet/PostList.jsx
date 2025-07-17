import Welcome from "./Weicome";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../Store/post-list-store";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  // console.log(postList.length);
  const onGetPostClick = () => {
    let obj2;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj.posts);

        addInitialPost(obj.posts);
      });
    console.log(`in the aakriti :-> ${obj2}`);

    console.log("helo im in onGet Click Method");
  };

  return (
    <>
      {postList.length === 0 ? (
        <Welcome onGetPostClick={onGetPostClick} />
      ) : (
        <div className="list-display">
          {postList.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      )}
    </>
  );
};
export default PostList;
