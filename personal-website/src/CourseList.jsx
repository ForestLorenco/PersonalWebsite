import React from 'react';

const CourseList = (props) =>{
    return(
        <div id="course-list">
		<h2>Course List:</h2>
		<span id="Mathematics">
		<h3>Mathematics Courses:</h3>
		<ul>
			<li>Multivariable Calculus</li>
			<li>Discrete Mathematics</li>
			<li>Linear Algebra</li>
			<li>Statistical Modeling</li>
			<li>Foundations of Analysis</li>
			<li>Group Theory</li>
			<li>Differential Geometry</li>
			<li>Topology</li>
			<li>Geometric Group Theory</li>
			<li>Linear Optimization</li>
			<li>Nonlinear Optimization</li>		
		</ul>
		</span>
		<span id="CS">
		<h3>Computer Science Courses:</h3>
		<ul>
			<li>Data Structures</li>
			<li>Systems Programming</li>
			<li>Programming Abstractions</li>
			<li>Computer Architecture</li>
			<li>Algorithms</li>
			<li>Advanced Algorithms</li>
			<li>Theory of Computer Science</li>
			<li>Computer Graphics</li>
			<li>Machine Learning</li>
		</ul>
		</span>
		<span id="CS">
		<h3>Languages:</h3>
		<ul>
			<li>Java</li>
			<li>Python</li>
			<li>C</li>
			<li>C++</li>
			<li>Scheme</li>
			<li>C#</li>
			<li>Javascipt</li>
			<li>HTML</li>
			<li>CSS</li>
		</ul>
		</span>
		</div>
    );
}

export default CourseList;