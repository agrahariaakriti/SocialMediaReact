import Loading from "./Loading";
import Welcome from "./Weicome";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../Store/post-list-store";
const PostList = () => {
  const { postList, laodingInitialState } = useContext(PostListData);
  return (
    <>
      {laodingInitialState === true ? (
        <Loading />
      ) : postList.length === 0 ? (
        <Welcome />
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
