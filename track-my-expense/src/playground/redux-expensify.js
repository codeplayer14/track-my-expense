import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense = (
    {
        description ='',
        note = '',
        amount=0,
        createdAt = 0 
    } = {}
) => ({

    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const expensesReducerDefautState = {};
const filtersReducerDefaultState = {

    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefautState,action) => {


    switch(action.type){

        case 'ADD_EXPENSE':
        default: 
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState,action) => {


    switch(action.type){

        default:
            return state;
    }
}

const demoState = {

    expense:[{
        id:'dsfsd',
        description: 'July Rent',
        note:'Payment for PK',
        amount: 54000,
        createdAt: 0
    }], 

    filters:{

        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const store = createStore(combineReducers({

    expenses:expensesReducer

}));

store.subscribe (() =>{
    
    console.log(store.getState());
})

store.dispatch(addExpense({description:'Rent',amount:100,}));

