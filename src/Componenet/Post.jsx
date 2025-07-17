import { useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card post-card"
      style={{
        minWidth: "20rem",
        maxWidth: "38rem",
        width: "100%", // Let it stretch inside parent
      }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <AiTwotoneLike />
            {post.reactions.likes}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="badge rounded-pill bg-light text-dark border border-primary post-tag"
          >
            #{tag.trim()}
          </span>
        ))}
        <span
          className="badge rounded-pill text-bg-danger delete_btn"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdDelete style={{ fontSize: "1rem", color: " rgb(68, 65, 65)" }} />
        </span>
      </div>
    </div>
  );
};
export default Post;
