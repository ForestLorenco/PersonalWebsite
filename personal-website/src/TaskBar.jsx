import React from 'react';

const TaskBar= (props) =>{
    return (
        <div class="icon-bar">
        <a class="active" href="mainpage.html">Home<i class="fa fa-home"></i></a> 
        <a href="resume_page.html">Resume<i class="fa fa-search"></i></a> 
        <a href="ref_page.html">References<i class="fa fa-envelope"></i></a> 
        <a href="hr_page.html">Honors Research<i class="fa fa-globe"></i></a> 
        </div>
    );
}

export default TaskBar;