import React from 'react';
import './Team.css';

const Team = (props) => {

    const {name, salary, strike, country} = props.player;
    return (
        <div className='draft'>
            <h1>Draft</h1>
            <h2>Name: {name}</h2>
            <h2>country: {country}</h2>
            <h2>Strike Rate: {strike}</h2>
            <h2>Salary: {salary} Tk</h2>
        </div>
    );
};

export default Team;