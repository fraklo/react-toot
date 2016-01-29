ReactBase.components.CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <ReactBase.components.Comment author="Pete Hunt">
          This is 1 comment
        </ReactBase.components.Comment>
        <ReactBase.components.Comment author="Jordan">
          This is *another* comment
        </ReactBase.components.Comment>
      </div>
    );
  }
});
