import { useState } from "react"
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(true);
    }
    let playerName = <span className="player-name">{name}</span>
    if (isEditing) {
        playerName = <input type="text" required />
    }
    return <li>
        <span className="player">
            {playerName}
            <span className="player-sympol">{symbol}</span>
        </span>
        <button onClick={handleToggleEdit}>Edit</button>
    </li>
}