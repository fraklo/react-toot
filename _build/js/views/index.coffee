ApplicationBase.views.index =
  init: ->
    ReactDOM.render React.createElement(ReactBase.components.CommentBox, null),
      document.getElementById('content')
