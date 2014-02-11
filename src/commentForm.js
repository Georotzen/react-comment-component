/**
 * @jsx React.DOM
 */

var CommentForm = React.createClass({
	handleSubmit: function() {
		var author = this.refs.author.getDOMNode().value.trim();
		var text = this.refs.text.getDOMNode().value.trim();

		this.props.onCommentSubmit({author: author, text: text});
		this.refs.author.getDOMNode().value = "";
		this.refs.text.getDOMNode().value = "";
		return false;
	},

	render: function() {
		return (
			<form className="commentForm well well-sm" role="form" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input type="email" placeholder="Your email" required="required" ref="author" className="form-control" />
				</div>
				<div className="form-group">
					<textarea rows="3" placeholder="Leave a note..." required="required" ref="text" className="form-control"></textarea>
				</div>
				<input type="submit" value="Post" className="btn btn-default" />
			</form>
		);
	}
});