
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
 
return( 
    <div>
        <ExpenseForm
            expense ={props.expense}
            onSubmit = { (expense) =>{
                console.log("Dumping");
                console.log(expense);
            }}
            />
        Editing component with id : {props.match.params.id};
    </div>
)};

const mapStateToProps = (state,props) => {

    return {

        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpensePage);