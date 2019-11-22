import React from 'react';
import TaskBar from './TaskBar';
import Title from './Title';
import Intro from './Intro';
import CourseList from './CourseList'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <body>
        <TaskBar/>
        <Title/>
        <Intro/>
        <CourseList/>
      </body>
    );
  }
}
export default App;
