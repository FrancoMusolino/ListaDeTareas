import React, { useContext } from 'react'
import './Form.css'
import ActionsButtons from './ActionsButtons';
import { TYPES } from '../actions/tareasActions'
import DateContext from '../context/Date';

const Form = ({ form, dispatch }) => {
    const { dateToPrint } = useContext(DateContext)
    const handleChange = e => dispatch({ type: TYPES.DETECTCHANGES, payload: [e.target.name, e.target.value] })

    return (
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
            <input type="date" name="date" min={dateToPrint} max="2025-12-31" onChange={handleChange} value={form.date} />
            <ActionsButtons form={form} dispatch={dispatch} />
        </form>
    )
}

export default Form;