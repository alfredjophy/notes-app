import { useState } from "react"
import Axios from "./axios";


const Edit = (props) => {

    const [title, setTitle] = useState(props.note && props.note.title[0].value || "");
    const [body, setBody] = useState(props.note && props.note.field_body[0].value || "");

    const Delete = async () => {

        const axios = await Axios();
        const data = { "type": [{ "target_id": "note" }] }
        await axios.delete('/node/' + props.note.nid[0].value, data);
        props.setUpdate(true);
    }


    const Save = async () => {
        const axios = await Axios();
        if (props.note) {
            const data = {
                "nid": [{ "value": props.note.nid[0].value }],
                "type": [{ "target_id": "note" }],
                "title": [{ "value": title }],
                "field_body": [{ "value": body }]
            }
            await axios.patch('/node/' + props.note.nid[0].value, data);

        }
        else {
            const data = {
                "type": [{ "target_id": "note" }],
                "title": [{ "value": title }],
                "field_body": [{ "value": body }]
            }
            console.log(data);
            await axios.post("/node", data);
        }
        props.setUpdate(true);

    }

    return <div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <br />
        <textarea onChange={(e) => setBody(e.target.value)} value={body} />
        <br />
        <button onClick={Save}>Save</button>
        <button onClick={Delete}>Delete</button>
    </div>
}

export default Edit;