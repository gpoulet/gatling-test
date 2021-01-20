import React, {FC} from 'react';
import {User} from "../../models";
import Table from "react-bootstrap/Table";
import {useHistory} from "react-router-dom";
import {ROUTE_USERS} from "../../constants";

type UsersTableProps = { users: User[] };

const UsersTable: FC<UsersTableProps> = ({users}) => {
    const history = useHistory();

    const onClick = (id: number) => history.push(ROUTE_USERS + "/" + id);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            {users.map(({id, name, username}) => (
                <tr key={id} onClick={() => onClick(id)}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                </tr>))}
            </tbody>
        </Table>
    )
}

export default UsersTable;
