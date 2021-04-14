import React, { useState } from 'react';
import './PlayerData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import TeamDraft from '../TeamDraft/Team';


const PlayerData = (props) => {
    const [playerData, setPlayerData] = useState({})
    const { name, salary, img } = props.pd;

    return (
            <div className='playerDraft'>
                <img src={img} alt="" />
                <div className='text'>
                    <div>
                        <h1>Name: {name}</h1>
                        <h3>Salary: {salary} TK</h3>
                    </div>
                    <div className='button' onClick={() => props.handlePlayer(props.pd)}>
                        <button><FontAwesomeIcon icon={faUserShield} /> <br />   Add Player</button>
                    </div>
                </div>
            </div>
    );
};

export default PlayerData;