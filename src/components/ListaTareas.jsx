import React, { useReducer, useEffect, useContext } from 'react'
import Form from './Form'
import Table from './Table'
import './ListaTareas.css'
import { tareasInitialState, tareasReducer } from '../reducers/tareasReducer'
import { TYPES } from '../actions/tareasActions'
import DateContext from '../context/Date'

const ListaTareas = () => {
    const [state, dispatch] = useReducer(tareasReducer, tareasInitialState);
    const { dateToPrint } = useContext(DateContext);
    const { form, db } = state;

    useEffect(() => {
        dispatch({ type: TYPES.UPDATEDATE, payload: dateToPrint })
        if (localStorage.getItem('data')) {
            let data = JSON.parse(localStorage.getItem('data'));
            dispatch({ type: TYPES.DATAOFLOCALSTORAGE, payload: data })
        } else {
            return;
        }
    }, [])

    useEffect(() => localStorage.setItem('data', JSON.stringify(db)), [db])

    return (
        <div className='container'>
            <Table data={db} dispatch={dispatch} />
            <Form form={form} dispatch={dispatch} />
        </div>
    )
}

export default ListaTareas;