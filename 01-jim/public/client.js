import React from "react";
import ReactDOM from "react-dom";
var videos = require("./jim.js")


class MovieSection extends React.Component {
	render(){
		return (
			<div className="movieSection">
				<MovieList />
			</div>
		);
	}
}

class MovieList extends React.Component {
	render(){
		var a = videos.allVideos();
		var rows = [];
		for (var i = 0; i < a.length; i++) {	
					rows.push(<Video title={a[i].title} />)
		}
		return(
			<div className="movieList">
				{rows}
			</div>
		);
	}
}

class Video extends React.Component {
	render(){
		return(
			<div className="video">
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}
const app = document.getElementById('app'); 
ReactDOM.render(<MovieSection />, app);