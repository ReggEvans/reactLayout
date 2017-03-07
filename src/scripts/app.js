import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var BlogPageWrapper = React.createClass({
	render: function() {
		return (
			<div className = "blog-page-wrapper">
				<Header />
				<BodyWrapper />
			</div>
			)
	}
})

var Header = React.createClass({
	render: function() {
		return (		
			<div className = "header">
				<img className ="logo-img" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" height="120" />
		</div>
		)
	}
})

var BodyWrapper = React.createClass({
	render: function() {
		return (
			<div className = "body-wrapper">
				<LeftCol />
				<MidCol />
				<RightCol />
			</div>
			)
	}
})

var LeftCol = React.createClass({
	render: function() {
		return (
			<div className="left-col">
				<h4>The Iron Yard | Houston</h4>
				<p>Happenings and updates from The Iron Yard in Houston, TX</p>
				<hr/>
				<p>Search</p>
				<input type="text" placeholder="Search"/>
			</div>
			)
	}
})

var MidCol = React.createClass({
	render: function() {
		return (
			<div className="mid-col">
				<h2>September 22 Starts a New Class of The Iron Yard Houston Students</h2>
				<small>By Brian Dorton, Campus Director at The Iron Yard Houston</small>
				<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis 
					lectus non libero auctor, quis sagittis odio feugiat. Fusce quis imperdiet 
					leo. Vestibulum accumsan placerat lacus, vitae malesuada orci tempor sit amet. 
					Aliquam volutpat laoreet nisi, vitae consectetur justo placerat et. Fusce mattis 
					nibh ut auctor cursus. Quisque at tincidunt metus. Proin pulvinar porttitor bibendum.
				</p>
			</div>
			)
	}
})

var RightCol = React.createClass({
	render: function() {
		return (
			<div className="right-col">
				<div className="follow-box">
          			<div className="follow-box-top">
            			<p>Never miss a post!</p>
          			</div>
          			<div className="follow-box-bottom">
            			<div className="tiy-img">
              				<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" width="40"/>
            			</div>
            			<div className="tiy-title">
	              			<p><b>tiyhouston</b></p>
	              			<p>The Iron Yard | Houston</p>
            			</div>
            			<div className="tiy-follow">
              				<button>+ Follow</button>
            			</div>
          			</div>
        		</div>
      		</div>
			)
	}
})

var app = function() {
  var libraryName = 'react'
  // ReactDOM.render() takes two inputs: 
  	// 1. A React component
  	// 2. A node on the actual DOM — the place we want to mount our React node tree.
  ReactDOM.render(<BlogPageWrapper />, document.querySelector('.container'))
  // this is where i MOUNT my components. to mount is to sync up your virtual DOM 
  // tree with the actual DOM. a React component is mounted if it's curently part 
  // of the web document. it is unmounted if it's just floating around in javscriptland.
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..