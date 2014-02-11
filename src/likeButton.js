/**
 * @jsx React.DOM
 */

var LikeButton = React.createClass({
	getInitialState: function() {
		return {liked: false};
	},

	handleClick: function() {
		this.setState({liked: !this.state.liked});
	},

	render: function() {
		var classNames = [
			'btn', 'btn-sm',
			this.state.liked ? 'btn-default' : 'btn-primary'
			].join(' ');
		return (
			<button type="button" className={classNames} onClick={this.handleClick}>
				{this.state.liked ? 'Unlike' : 'Like'}
			</button>
		);
	}
});