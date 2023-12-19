import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent Component Did Mount");
  }
  render(){
    console.log("parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>Hey now you are in about section.....!</h2>
        {/*<User name={"Shubham (function)"}/>*/}
        <UserClass name={"Shubham (class)"} location={"Vaishali class"}/>
        <UserClass name={"Shubh"} location={"Vaishali"}/>
      </div>
    );
  }
}
{/*
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Hey now you are in about section.....!</h2>
      <User name={"Shubham (function)"}/>
      <UserClass name={"Shubham (class)"} location={"Vaishali class"}/>
    </div>
  );
};
*/}
export default About;