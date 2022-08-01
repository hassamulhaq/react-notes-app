import React, {useState} from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

function loadSuggestions(text) {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            const suggestions = [
                {
                    preview: "Hassam",
                    value: "@devhassam"
                },
                {
                    preview: "React App",
                    value: "@reactapp"
                },
                {
                    preview: "Laravel Developer",
                    value: "@laradev"
                },
            ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
            accept(suggestions);
        }, 250);
    });
}

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
})

export default function Editor(props) {

    //const [selectedTab, setSelectedTab] = useState ("write" | "preview");
    const [selectedTab, setSelectedTab] = React.useState("write");

    return (
        <section className="container pane editor">
            <ReactMde
                value={props.currentNote.body}
                onChange={props.updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={20}
                heightUnits="rem"
                loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                        tabIndex: -1
                    }
                }}
            />
        </section>
    )

}

