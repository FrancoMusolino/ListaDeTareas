import React, { useEffect, useReducer } from 'react'
import Form from './Form'
import Table from './Table'
import './ListaTareas.css'
import { tareasInitialState, tareasReducer } from '../reducers/tareasReducer'

const ListaTareas = () => {
    const [state, dispatch] = useReducer(tareasReducer, tareasInitialState);

    return (
        <div className='container'>
            {state.data.length === 0 ? <p>Esoy vacío</p>
                : state.data.map(el => <li>{el.name}</li>)}
            <Table />
            <Form form={state.form} dispatch={dispatch} />
        </div>
    )
}

export default ListaTareas;