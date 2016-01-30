ApplicationBase.views.index =
  init: ->
    ReactDOM.render(
      React.createElement(
        ReactBase.components.CommentBox, {
          url: "/comments.json",
          pollInterval: {2000}
        }
      ),
      document.getElementById('content')
    )
