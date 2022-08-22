import React from "react";
import ListComponent from "./ListComponent";


export default class UsersLists extends React.Component{
	state = {lists: null, loading:true}
	
	async componentDidMount(){
		const config = {
			headers:{
				'Content-Type': 'application/json'
			}
		}
		config.headers['Authorization'] = 'Token 4fb66f537557b52bc3b77b1dcbce15671c0d0fe4'

		var url = 'http://localhost:8000/list/';
		const response = await fetch(url, config)
		const data = await response.json();
		console.log(data)
		this.setState({lists:data, loading:false})
	}
	
	render(){
    	return (
	        <div>
	            <ListComponent listName={'Lista 1'}/>
	            <ListComponent listName={'Lista 2'}/>
	            <ListComponent listName={'Lista 3'}/>
	        </div>
	    )
    }
    
}