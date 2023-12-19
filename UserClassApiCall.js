import React from "react";
class UserClassApiCall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }
    async componentDidMount(){
        //API call
        const data = await fetch("https://api.github.com/users/shubh193");
        const json = await data.json();
        
        //now we have data so we will update data with api data
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        //debugger;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <img src={avatar_url}/>
                <h3>Location: {location}</h3>
                <h4>Contact: dyzh-shubh</h4>
            </div>
        ); 
   } 
}
export default UserClassApiCall;





