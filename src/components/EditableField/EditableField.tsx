import React, {FC, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {User} from "../../models";

type EditableFieldProps = {
    value: string,
    id: number,
    updateUsername: (id: number, name: string) => Promise<{ payload: User; type: string }>
}

const EditableField: FC<EditableFieldProps> = ({value, id, updateUsername}) => {
    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState(value);

    const onSave = () => {
        updateUsername(id, username)
            .finally(() => setEditing(false));
    }

    if (editing) {
        return (
            <div>
                <Form.Control className="edit-field" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <Button onClick={onSave} className="edit-button">Save</Button>
                <Button variant="outline-primary" onClick={() => setEditing(false)} className="edit-button">Cancel</Button>
            </div>
        );
    } else {
        return (
            <div className="edit-button">{value}
                <Button onClick={() => setEditing(true)} className="edit-button">Edit</Button>
            </div>);
    }
};

export default EditableField;