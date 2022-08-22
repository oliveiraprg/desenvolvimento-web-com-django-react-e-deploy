import React from "react";
import ListComponent from "./ListComponent";


export default class UsersLists extends React.Component (){
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