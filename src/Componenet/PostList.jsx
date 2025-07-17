import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../Store/post-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);
  // console.log(postList.length);

  return (
    <div className="list-display">
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};
export default PostList;
