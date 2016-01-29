ReactBase.components.CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <ReactBase.components.CommentList />
        <ReactBase.components.CommentForm />
      </div>
    );
  }
});
