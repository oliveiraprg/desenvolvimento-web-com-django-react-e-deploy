import React from "react";


export default function ItemComponent(props){
    const status = props.status;
    return <li> Item: {props.name}, Status: {status ? 'Finalizado' : 'Não finalizado'} </li>
}