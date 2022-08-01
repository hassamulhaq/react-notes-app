import React, {useState} from "react"

export default function Sidebar(props) {

    const notesElements = props.notes.map((note, index) => (
            <li key={note.id} id={note.id} className={`
                px-4 py-2 bg-neutral-100 hover:bg-indigo-400 hover:text-amber-50 cursor-pointer
                ${ note.id === props.currentNote.id ? 'bg-indigo-500 text-amber-50' : ''}
            `}
                onClick={() => props.setCurrentNoteId(note.id)} // show markdown of selected note-id
            >
                Note {index + 1}
            </li>
    ))

    return (
        <section className="pane sidebar pt-2">
            <div className="flex mx-3 justify-between items-center">
                <h4 className="font-bold">Notes</h4>
                <button className="
                new-notes
                py-1
                px-3
                text-2xl
                rounded
                font-bold
                bg-indigo-500
                text-amber-50
                hover:bg-indigo-700"
                        onClick={props.newNote}>
                    +
                </button>
            </div>
            <hr className="my-1"/>
            <div className="">
                <ul className="">
                    {notesElements}
                </ul>
            </div>
        </section>
    )
}
