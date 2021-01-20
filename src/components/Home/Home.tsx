import React, {FC, useEffect} from "react";
import Container from "react-bootstrap/Container";
import UsersTable from "../UsersTable";

type HomeProps = { loadUsers: () => void };

const Home: FC<HomeProps> = ({ loadUsers }) => {

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

    return (
        <Container>
            <h1>Users list</h1>
            <UsersTable/>
        </Container>
    )
}


export default Home;