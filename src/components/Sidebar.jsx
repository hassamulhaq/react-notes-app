import React from "react"

export default function Sidebar(props) {
    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note">+</button>
            </div>
            <button>+</button>
        </section>
    )
}
