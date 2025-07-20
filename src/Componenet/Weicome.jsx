function Welcome() {
  return (
    <>
      <div
        className="bg-dark text-secondary px-4 py-5 text-center"
        style={
          ({ height: "428rem" },
          { minheight: "300rem" },
          { maxheight: "600rem" })
        }
      >
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            ✨ Let's Fill This Space with Your Thoughts! 📝💭
          </h1>

          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Hey there! 👋 It’s a little empty here right now, but that just
              means it’s your chance to shine! 🌈✨ Whether it’s a happy memory
              😊, a random thought 🤔, or something you just have to share 💬 —
              this space is waiting for your first post. Don’t be shy! 🌟 Even
              the smallest words can brighten someone’s day 🌻. So grab that
              keyboard ⌨️, let your creativity flow 🪄, and make this corner of
              the internet truly yours 💕.
            </p>
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Get Post From Server
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
