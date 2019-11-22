import React from 'react';
const Intro = (props) => {
    return(
        <div id = "first">
			<img id="img1" class="image thin-white-border" src="forest.jpg" ></img>
			<p id = "intro">Hi! My name is Forest Elliott and I am a 4th year at Oberlin College majoring in Mathematics and Computer Science. This is my personal website, I hope you find it enjoyable:)</p>
			<hr id="linkborder"></hr>
			<div id="links">
			<p><a href="https://www.linkedin.com/in/forestelliott894b68159">Linkedin</a>|<a href="https://github.com/ForestLorenco">Github</a></p>
			</div>
			<hr></hr>
	    </div>
    );
}

export default Intro;