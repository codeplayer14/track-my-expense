import React from 'react';
import ReactDOM from 'react-dom';

const Info =  (props) => {

    <div>
    <h1> Info </h1>
    <p> This info is : {props.info} </p>
    </div>
    
    
}


const requireAuthentication = (WrappedComponent) => {

    return (props) => {
     
        <div>
        {!props.isAuthenticated && <p> Please login to view </p>}
            Please login to see info.
        <WrappedComponent {...props}/>    
        </div>

    }
 
}

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo info = "This is the detail" isAuthenticated = {true}/>,document.getElementById('app'));