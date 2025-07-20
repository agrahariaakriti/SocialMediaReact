const Loading = () => {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </center>
  );
};

export default Loading;
