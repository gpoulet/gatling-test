import React, {FC, useEffect, useState} from "react";
import {User} from "../../models";
import UsersTable from "../UsersTable";
import Container from "react-bootstrap/Container";
import Loader from "../Loader";

type HomeProps = { loadUsers: () => Promise<{ payload: User[]; type: string }> };

const Home: FC<HomeProps> = ({loadUsers}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadUsers()
            .finally(() => setLoading(false))
    }, [loadUsers])

    return (
        <Container>
            <h1>Users list</h1>
            {loading ? <Loader/> : <UsersTable/>}
        </Container>
    )
};


export default Home;