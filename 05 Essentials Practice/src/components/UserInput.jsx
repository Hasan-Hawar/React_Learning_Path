export default function Header() {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return (%, per year)</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Investment Duration (years)</label>
                <input type="number" required/>
            </p>
        </div>
    </section>
}