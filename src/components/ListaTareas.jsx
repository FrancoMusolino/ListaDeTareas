import React, { useReducer } from 'react'
import Form from './Form'
import Table from './Table'
import './ListaTareas.css'
import { tareasInitialState, tareasReducer } from '../reducers/tareasReducer'

const ListaTareas = () => {
    const [state, dispatch] = useReducer(tareasReducer, tareasInitialState);
    const { form, db } = state;

    return (
        <div className='container'>
            <Table data={db} dispatch={dispatch} />
            <Form form={form} dispatch={dispatch} />
        </div>
    )
}

export default ListaTareas;