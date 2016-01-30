ReactBase.components.CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <ReactBase.components.Comment author={comment.author} key={comment.id}>
          {comment.text}
        </ReactBase.components.Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
