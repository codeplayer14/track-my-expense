import React from 'react';

export default class ExpenseForm extends React.Component {

    state = {
        description:'',
        amount:'',
        note:''
    };
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
        this.setState(()=> ({ amount}));
    }
    render(){

        return (
            <div>
                <form>
                    <input type='text' placeholder='Description'  onChange = {this.onDescriptionChanged} autoFocus={true}/>
                    <input type = 'number' placeholder ='Amount'  onChange = {this.onAmountChanged}/>
                    <textarea placeholder = 'Add a note for your expense' onChange = {this.onNoteChanged}></textarea>
                    <button> Add Expense</button>
                </form>
            </div>
        )
    }
}
