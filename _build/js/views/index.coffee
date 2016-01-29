ApplicationBase.views.index =
  init: ->
    ReactDOM.render(
      React.createElement(
        ReactBase.components.CommentBox,
        { data: ReactBase.components.Data }
      ),
      document.getElementById('content')
    )
