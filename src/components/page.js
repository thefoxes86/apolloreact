import React from 'react'

export default function page(props) {
    return (
        <h1>Questa è la pagina {props.match.params.id}</h1>
    )
}