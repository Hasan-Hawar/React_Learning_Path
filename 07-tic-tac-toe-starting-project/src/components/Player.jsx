import { useState } from "react"
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(editing => !editing);
    }
    let playerName = <span className="player-name">{name}</span>
    // let buttonCaption = "Save";
    if (isEditing) {
        playerName = <input type="text" required value={name} />
    }
    return <li>
        <span className="player">
            {playerName}
            <span className="player-sympol">{symbol}</span>
        </span>
        <button onClick={handleToggleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}