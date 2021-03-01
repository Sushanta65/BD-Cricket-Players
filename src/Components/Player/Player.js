import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    const {name, age, born, img, playingRole, battingStyle, salary} = props.player;
    const playerAdded = props.playerAdded;
    
    return (    
        <div className="playerInfoArea">
            <div>
                <div className="w-100 text-center"><img className="img-fluid" src={img} alt={name}/></div><br/>
                <strong>Name: </strong><span>{name}</span><br/>
                <strong>Born: </strong><span>{born}</span><br/>
                <strong>age: </strong><span>{age}</span><br/>
                <strong>Playing-Role: </strong><span>{playingRole}</span><br/>
                <strong>Batting Style: </strong><span>{battingStyle}</span><br/>
                <strong>Salary: </strong><span>{salary}</span><br/>
                <button onClick={() => playerAdded(props.player)} className="btn btn-info mt-3"><FontAwesomeIcon icon={faPlus} /> Add to Club</button>
            </div>
        </div>
    );
};

export default Player;