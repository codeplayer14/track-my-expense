import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {sortByDate} from '../actions/filters';
import {sortByAmount} from '../actions/filters';
const ExpenseListFilter = (props) => (

    <div>
        <input type="text" value = {props.filters.text} 
        onChange = {(e) => {

            props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
         }}
        />
        
        <select value = {props.filters.sortBy} onChange = { 

            (e) => {
                
                const target = e.target.value;
                if(target=='date')
                    props.dispatch(sortByDate(target))
                if(target=='amount')
                    props.dispatch(sortByAmount(target));
            }
        }>
         <option value = "amount"> Amount </option>

         <option value = "date"> Date </option>
        </select>
    </div>

)

const mapStateToProps = (state) => {

    return {

        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilter);