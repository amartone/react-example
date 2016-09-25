var CommentBox = React.createClass({
	render: function(){
		return(
			//The <div> tags are not actual DOM nodes; they are instantiations of React div components.
			// You can think of these as markers or pieces of data that React knows how to handle.
			//React is safe. We are not generating HTML strings so XSS protection is the default.
			<div className="commentBox">
				Hello, world! I am a CommentBox.
				</div>
		);
	}
});
ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);
