/**
 * @jsx React.DOM
 */

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.getJSON(this.props.url, function(data) {
        this.setState({data: data});
      }.bind(this)
    );
  },

  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },

  handleCommentRemove: function(key) {
    var comments = this.state.data.slice();
    comments.splice(key, 1);
    this.setState({data: comments});
  },

  getInitialState: function() {
    return {data: []};
  },

  componentWillMount: function() {
    this.loadCommentsFromServer();
    // setup polling here
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} onCommentClose={this.handleCommentRemove} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox url="comments.json" />,
  document.getElementById('content')
);