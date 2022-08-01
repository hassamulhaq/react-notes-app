import React, {useState} from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

function loadSuggestions(text) {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            const suggestions = [
                {
                    preview: "Hassam",
                    value: "@hassam"
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

function Editor(props) {

    //const [value, setValue] = useState("**Hello world!!!**");
    //const [selectedTab, setSelectedTab] = useState < "write" | "preview" > ("write");

    const [value, setValue] = React.useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = React.useState("write");



    const save = async function* (data) {
        // Promise that waits for "time" milliseconds

        console.log(value)

        const wait = function (time) {
            return new Promise((a, r) => {
                setTimeout(() => a(), time);
            });
        };

        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield "https://picsum.photos/300";
        await wait(2000);

        // returns true meaning that the save was successful
        return true;
    };

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
                loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                        tabIndex: -1
                    }
                }}
                paste={{
                    saveImage: save
                }}
            />
        </section>
    )

}

export default Editor

