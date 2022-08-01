import React, {Fragment, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Split from "react-split";
import Sidebar from "./Sidebar";
import Editor from "./Editor.jsx";
import {nanoid} from "nanoid";

function Main() {

    const [notes, setNotes] = useState([])

    const [currentNoteId, setCurrentNoteId] = useState(
        notes[0] && notes[0].id || ''
    )

    const [indexer, setIndexer] = useState(1)

    function createNewNote() {
        setIndexer(prevState => prevState + 1)
        const newNote = {
            id: nanoid(),
            indexer: indexer,
            body: "### Type your markdown. Use @ to autofill."
        }
        setNotes(prevState => [newNote, ...prevState])

        // set for Editor
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(prevState => prevState.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <Fragment>
            {
                notes.length > 0
                    ?
                    <div className="wrapper">
                        <Navbar/>
                        <Header/>
                        <main>
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 box-content">
                                        <Split
                                            sizes={[30, 70]}
                                            direction="horizontal"
                                            gutterSize={12}
                                            minSize={200}
                                            className="split"
                                        >
                                            <Sidebar
                                                notes={notes}
                                                currentNote={findCurrentNote()}
                                                setCurrentNoteId={setCurrentNoteId}
                                                newNote={createNewNote}
                                            />
                                            {
                                                currentNoteId &&
                                                notes.length > 0 &&
                                                <Editor
                                                    currentNote={findCurrentNote()}
                                                    updateNote={updateNote}
                                                />
                                            }
                                        </Split>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center h-screen overflow-scroll bg-indigo-100">
                        <h1 className="text-2xl mb-3">You have no notes</h1>
                        <button
                            className="bg-indigo-500 rounded text-amber-50 hover:bg-indigo-700 px-6 py-2 cursor-pointer"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                        <small className="text-transparent mt-3 select-none">@hassamulhaq</small>
                    </div>
            }
        </Fragment>
    )
}

export default Main