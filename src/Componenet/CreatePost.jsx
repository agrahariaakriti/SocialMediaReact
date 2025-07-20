import { PostList } from "../Store/post-list-store";
import { useContext, useRef } from "react";
const CreatePost = () => {
  const user_id_Element = useRef();
  const post_title_Element = useRef();
  const postBody_Element = useRef();
  const reaction_Element = useRef();
  const tags_Element = useRef();

  const { createPost } = useContext(PostList);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = user_id_Element.current.value;
    const postTitle = post_title_Element.current.value;
    const postBody = postBody_Element.current.value;
    const reaction = reaction_Element.current.value;
    const tag = tags_Element.current.value.trim().split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reaction,
        userId: userId,
        tags: tag,
        url: "https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg",
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((obj) => {
        // console.log("helo in create post");
        createPost(obj);
      });

    user_id_Element.current.value = "";
    post_title_Element.current.value = "";
    postBody_Element.current.value = "";
    reaction_Element.current.value = "";
    tags_Element.current.value = [];
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={post_title_Element}
          className="form-control"
          placeholder="How are You Feeling"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          ref={postBody_Element}
          rows="6"
          type="text"
          id="body"
          className="form-control"
          placeholder="Post Content"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          Enter Your User-Id
        </label>
        <input
          ref={user_id_Element}
          type="text"
          id="user-id"
          className="form-control"
          placeholder="Your User-id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reaction
        </label>
        <input
          ref={reaction_Element}
          type="text"
          id="reaction"
          className="form-control"
          placeholder="how many people reacted"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Yor hashtags here
        </label>
        <input
          ref={tags_Element}
          type="text"
          id="tags"
          className="form-control"
          placeholder=" Enter Yor hashtags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
