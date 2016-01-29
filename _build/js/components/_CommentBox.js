ReactBase.components.CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <ReactBase.components.CommentList data={this.props.data} />
        <ReactBase.components.CommentForm />
      </div>
    );
  }
});
