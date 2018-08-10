import React from 'react';
import {Link} from 'react-router-dom'; 
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
const ExpenseListItem =  (props) => (

    <div>
    <Link to = {`/edit/${props.id}`}>
        <h3>{props.description}</h3>
    </Link>
        <p>{props.amount} - {props.createdAt} </p>
        <button value = {props.description} onClick =  {() => {

                props.dispatch(removeExpense({id:props.id}));
            }

        }> Remove </button>
    </div>
)

export default connect()(ExpenseListItem);
