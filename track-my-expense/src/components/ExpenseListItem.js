import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
const ExpenseListItem =  (props) => (

    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} - {props.createdAt} </p>
        <button value = {props.description} onClick =  {

            (e) => {

                // console.log("here");
                props.dispatch(removeExpense({id:props.id}));
            }

        }> Remove </button>
    </div>
)

export default connect()(ExpenseListItem);
