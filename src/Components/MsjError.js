import React from 'react'
import {Message} from 'semantic-ui-react';

function MsjError(props){
    const msj = props.visible ? (
        // Si no hay error, quiere decir que solo el campo esta vacio. Caso contrario, el poke no existe.
        props.error === '' ? (<Message negative><Message.Header>The field cant be empty.</Message.Header></Message>) 
        : (<Message negative><Message.Header>{props.error}</Message.Header></Message>)
    ) : null

    return msj;
}

export default MsjError;