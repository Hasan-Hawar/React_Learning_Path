import { useState } from "react"
export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(editing => !editing);
    }

    function handleNameChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let buttonCaption = "Save";
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />
    }
    return <li className={isActive ? 'active' : ''}>
        <span className="player">
            {editablePlayerName}
            <span className="player-sympol">{symbol}</span>
        </span>
        <button onClick={handleToggleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}