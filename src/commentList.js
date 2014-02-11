/**
 * @jsx React.DOM
 */

var ReactTransitionGroup = React.addons.TransitionGroup;

var CommentList = React.createClass({
	render: function() {
		var self = this;
		var commentNodes = this.props.data.map(function(comment, idx) {
			return <Comment onCommentClose={self.props.onCommentClose} key={idx} author={comment.author}>{comment.text}</Comment>
		});
		return (
			<div className="commentList">
				<ReactTransitionGroup transitionName="comment" component={React.DOM.div}>
					{commentNodes}
				</ReactTransitionGroup>
			</div>			
		);
	}
});