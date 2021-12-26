// Now that we have succesfully logged in
// lets desing the notes app

// We will get the list of notes initially
// And display them as buttons
// clicking them will open them in an edit view
// this will have a save and delete buttons

// thats it!

import { useState, useEffect } from "react";

import Axios from "./axios";

import Edit from "./Edit";

// lets get the notes initially

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isUpdated, setUpdated] = useState(true);
    const [selected, setSelected] = useState(-1);

    useEffect(async () => {
        // we need to get the values only when isupdated is true
        // and then set it as false
        if (!isUpdated) return;

        const axios = await Axios();
        const response = await axios.get('/api/notes');
        setNotes(response.data);
        setUpdated(false);
        // lets set to the selected note to the first one
        if(notes.length>0)
            setSelected(0);


    }, [isUpdated]);


    // since we need to get the notes every time we update
    // lets bind isUpdated to the effect hook

    // we will pass the setter to edit
    return (<div>
        <h1>Notes</h1>
        {
            notes.map((note, index) =>
                <button key={note.nid[0].value}
                    onClick={() => setSelected(index)}
                >
                    {note.title[0].value}
                </button>)
        }
        <button onClick={() => setSelected(-1)}>++New Note++</button>
        <Edit key={selected} note={notes[selected]} setUpdate={setUpdated} />
    </div>);
}
// we discussed keys before, react uses unique keys
// to identify what changes, and only updating that small part
// since we are only changing the props of Edit, react doesnt see
// the change

// lets add a key for that

// Now our UI works fine
// 

export default Notes;