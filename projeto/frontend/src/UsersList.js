import React from "react";
import ListComponent from "./ListComponent";


export default function UsersLists(){
    return (
        <div>
            <ListComponent listName={'Lista 1'}/>
            <ListComponent listName={'Lista 2'}/>
            <ListComponent listName={'Lista 3'}/>
        </div>
    )
}