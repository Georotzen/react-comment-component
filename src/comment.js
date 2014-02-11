/**
 * @jsx React.DOM
 */

var Comment = React.createClass({
	getInitialState: function() {
		return {};
	},

	componentWillMount: function() {
		this.getGravatarProfile();
	},

	handleRemove: function() {
		this.props.onCommentClose(this.props.key);
	},

	getGravatarHash: function() {
		return CryptoJS.MD5(this.props.author.toLowerCase().trim()).toString(CryptoJS.enc.Hex);
	},

	getGravatarProfile: function() {
		var hash = this.getGravatarHash();
		var url = "http://www.gravatar.com/" + hash + ".json";
		var self = this;
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			contentType: "application/json",
			dataType: "jsonp",
			success: function(data) {
				self.setState({name: data.entry[0].displayName});
			},
			error: function() {}
		});
	},

	getGravatarImageUrl: function() {
		var hash = this.getGravatarHash();
		return "http://www.gravatar.com/avatar/" + hash + "?s=14";
	},

	render: function() {
		var name = this.state.name || this.props.author;
		var mailLink = "mailto:" + this.props.author;
		return (
			<div className="comment">
				<div className="comment-header">
					<a href={mailLink} className="comment-author">{name}</a>
					<button className="close" onClick={this.handleRemove}>&times;</button>
				</div>
				<div className="comment-body">
					{this.props.children}
				</div>
			</div>
		);
	}
});