var CommentList = React.creatClass({
	render: function() {
		return (
				<div className="commentList">
				Hello, world! I am a CommentList.
				</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
			</div>
		);
	}
});

var CommentBox = React.createClass({
	render: function(){
		return(
			//The <div> tags are not actual DOM nodes; they are instantiations of React div components.
			// You can think of these as markers or pieces of data that React knows how to handle.
			//React is safe. We are not generating HTML strings so XSS protection is the default.
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList>
				<CommentForm>
				</div>
		);
	}
});
ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);
