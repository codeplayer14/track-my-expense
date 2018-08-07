import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//Add expense
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



//Remove Expense
const removeExpense = ({id} = {}) =>({

    type:'REMOVE_EXPENSE',
    id    
})
const expensesReducerDefautState = {};
const filtersReducerDefaultState = {

    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate: undefined
};
//Edit expense

const editExpense = ( id,updates) =>({

    type:'EDIT_EXPENSE',
    id,
    updates

});


const expensesReducer = (state = expensesReducerDefautState,action) => {


    switch(action.type){

        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense

        ]
      
        
        case 'REMOVE_EXPENSE':

            return state.filter(({id}) => id !== action.id);

        case 'EDIT_EXPENSE':

            return state.map( (expense) => {

                if(expense.id === action.id){

                    return {
                        ...expense, 
                        ...action.updates
                    }

                }
                else
                return expense;
            });


        default: 
            return state;
    }
}


const setTextFilter = (text = '') => ({

    type: 'SET_TEXT_FILTER',
    text
})
// sort by amount 

const sortByAmount = () => ({

    type: 'SORT_BY_AMOUNT',
    sortBy:'amount'

});

const sortByDate = () => ({

    type: 'SORT_BY_DATE',
    sortBy:'date'

});

const filtersReducer = (state = filtersReducerDefaultState,action) => {


    switch(action.type){

        case 'SET_TEXT_FILTER': 
          
            return {
                ...state,
                text:action.text
            }

        case 'SORT_BY_DATE':

            return{

                ...state,
                text:action.sortBy
            }

        
        case 'SORT_BY_AMOUNT':

            return{

                ...state,
                text:action.sortBy
            }
            

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

    expenses:expensesReducer,
    filters:filtersReducer

}));

store.subscribe (() =>{
    
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100}));

const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300}));


store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense( expenseTwo.expense.id,{amount:   500})); 
const user = {

    name: 'Paddy',
    age: 24
}

console.log({

        ...user,
        name:'Paddio'
    }
)

store.dispatch(setTextFilter(''))
