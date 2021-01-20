import React, {FC} from 'react';
import {User} from "../../models";
import Table from "react-bootstrap/Table";

type UsersTableProps = { users: User[] };

const UsersTable: FC<UsersTableProps> = ({users}) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    name
                </th>
                <th>
                    username
                </th>
            </tr>
            </thead>
            <tbody>
            {users.map(({id, name, username}) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                </tr>))}
            </tbody>
        </Table>
    )
}

export default UsersTable;
