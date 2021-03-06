import React from "react";
import ReactDOM from "react-dom";
import videos from "./jim.js";

class MovieSection extends React.Component {
	render(){
	var data = videos.allVideos();
		return (
			<div className="movieSection">
				<MovieList data={data} />
			</div>
		);
	}
}

class MovieList extends React.Component {
	render(){
		var rows = this.props.data.map(function(comment,index){
			return(
				<Video  key={index} link={comment.link} thumb={comment.thumb} title={comment.title} />
			)
		});
		
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
				<a href={this.props.link}>
					<img src={this.props.thumb} alt={this.props.title}/>
				</a>
				<br/>
				{this.props.title}
			</div>
		);
	}
}
const app = document.getElementById('app'); 
ReactDOM.render(<MovieSection />, app);