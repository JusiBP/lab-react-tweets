function Tweet({tweet}) {
  let {user, timestamp, message} = tweet;
  return (
    <div>
    <div className="tweet">
      <img
        src={user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
    <br></br>
    </div>
  );
}

export default Tweet;
