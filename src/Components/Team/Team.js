
import './Team.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// fakeData imported here with mockData name.
import mockData from '../../fakeData/mockData.json'
import Player from './../Player/Player';
import React, { useState} from 'react';
import Club from './../Club/Club';

const Team = () => {
    const [players, setPlayers] = useState([])
    const playerAdded = (player) => {
        const newPlayer = [...players, player]
        setPlayers(newPlayer)
    }
    
    const totalSalary = players.reduce((sum, player) => sum + player.salary, 0)
    return (
        <div className="playersContainer container d-flex">
            <div className="playersArea w-75 p-3">
                <h3>Players</h3>
                {
                    mockData.map(player => <Player playerAdded={playerAdded} key={player.key} player={player}></Player>)
                }
            </div>
            <div className="playersInfo w-25 p-3">
                <h3 className="pb-2">Players at Club</h3>
                <h3 className="totalSalary py-2 pl-1">Total Salary: {totalSalary}</h3>
                <h4 className="selectedPlayers">Selected Players : {players.length}</h4>
                <h4 className="selectedPlayers">Selected Players Are:-</h4>
                {
                    players.map(player => <Club key={player.key} player={player}></Club>)
                }
              
            </div>
        </div>
    );
};

export default Team;