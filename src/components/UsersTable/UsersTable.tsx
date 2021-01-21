import React, {FC} from 'react';
import {User} from "../../models";
import Table from "react-bootstrap/Table";

export type UsersTableProps = {
    users: User[]
    onClick: (id: number) => void
};

const UsersTable: FC<UsersTableProps> = ({users, onClick}) => {
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
