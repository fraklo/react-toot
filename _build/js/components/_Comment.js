ReactBase.components.Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(),
                           {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h6 className="commentAuthor">
          {this.props.author}
        </h6>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
});
