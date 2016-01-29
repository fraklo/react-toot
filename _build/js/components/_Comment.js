ReactBase.components.Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h6 className="commentAuthor">
          {this.props.author}
        </h6>
        {this.props.children}
      </div>
    )
  }
});
