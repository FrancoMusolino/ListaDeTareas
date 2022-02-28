import React from 'react'
import ActionsButtons from './ActionsButtons';
import { TYPES } from '../actions/tareasActions'

const Form = ({ form, dispatch }) => {

    const handleChange = e => dispatch({ type: TYPES.DETECTCHANGES, payload: [e.target.name, e.target.value] })

    return (
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
            <input type="text" name="date" placeholder="Fecha" onChange={handleChange} value={form.date} />
            <ActionsButtons form={form} dispatch={dispatch} />
        </form>
    )
}

export default Form;