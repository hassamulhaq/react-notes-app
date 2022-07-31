import React, {Fragment} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Split from "react-split";
import Sidebar from "./Sidebar";
import Editor from "./Editor.jsx";

function Homepage() {
    return (
        <Fragment>
            <Navbar />
            <Header />

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <Split
                                sizes={[30, 70]}
                                direction="horizontal"
                                className="split"
                            >
                                <Sidebar />
                                <Editor />
                            </Split>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Homepage