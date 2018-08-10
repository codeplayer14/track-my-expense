import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
console.log(moment().format('MMM Do YYYY hh/mm/ss'));
export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        
       
        
        this.state =  {
            description:props.expense?props.expense.description:'',
            amount:props.expense? ((props.expense.amount)/100).toString():'',
            note:props.expense?props.expense.note:'',
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            error:'',
            calendarFocused:false
        };
        console.log("Here");
        console.log(this.state);
    }

    onDescriptionChanged = (e) => {

        const description =   e.target.value;
        this.setState(()=> ({ description}));
    }
    onNoteChanged = (e) => {

        const note =   e.target.value;
        this.setState(()=> ({ note}));
    }
    onAmountChanged = (e) => {

        const amount =   e.target.value;

        if(amount.match(/^\d*(\.\d{0,2})?$/))
            this.setState(()=> ({ amount}));
    }
    onDateChange = (createdAt)=> {

        this.setState(()=>({createdAt}));
    }

    onFocusChange = ({focused}) => {

        this.setState(() => ({calendarFocused:focused}));
    }
    onSubmit = (e) => {

        e.preventDefault();

        if(!this.state.amount||!this.state.description){

            this.setState(()=> ({ error: 'Please provide description and amount'}));
        }else{

            this.setState(()=> ({ error:''}));

            this.props.onSubmit({

                description: this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            });

        }   

    }
    render(){

        return (
            <div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit = {this.onSubmit}>
                    <input type='text' placeholder='Description'  onChange = {this.onDescriptionChanged} autoFocus={true} value = {this.state.description}/>
                    <input type = 'number' placeholder ='Amount'  onChange = {this.onAmountChanged} value = {this.state.amount}/>
                    <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange} 
                    />
                    <textarea placeholder = 'Add a note for your expense' onChange = {this.onNoteChanged} value = {this.state.note}></textarea>
                    <button> Add Expense</button>
                </form>
            </div>
        )
    }
}
