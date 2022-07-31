import React from "react"

export default function Sidebar(props) {
    return (
        <section className="pane sidebar pt-2">
            <div className="flex justify-around items-center">
                <h4 className="font-bold">Notes</h4>
                <button className="new-note">+</button>
            </div>
        </section>
    )
}
