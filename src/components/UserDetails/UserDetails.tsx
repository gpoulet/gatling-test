import React, {FC, useEffect} from "react";
import {User} from "../../models";
import UserCard from "../UserCard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useHistory, useParams} from "react-router-dom";
import {ROUTE_HOME} from "../../constants";

type UserDetailsProps = {
    users: User[],
    loadUsers: () => Promise<{ payload: User[]; type: string }>
}

interface ParamTypes {
    id: string
}

const UserDetails: FC<UserDetailsProps> = ({users, loadUsers}) => {

    const { id } = useParams<ParamTypes>()
    const history = useHistory();

    useEffect(() => {
        if (users.length === 0) {
            loadUsers()
        }
    }, [users, loadUsers])

    return (
        <Container>
            <UserCard id={id}/>
            <Button variant="primary" onClick={() => history.push(ROUTE_HOME)}>Back</Button>
        </Container>
    )
};

export default UserDetails;