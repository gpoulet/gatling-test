import React, {FC, useEffect, useState} from "react";
import {User} from "../../models";
import UsersTable from "../UsersTable";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Loader from "../Loader";
import Stats from "../Stats";

type HomeProps = { loadUsers: () => Promise<{ payload: User[]; type: string }> };

const Home: FC<HomeProps> = ({loadUsers}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadUsers()
            .finally(() => setLoading(false))
    }, [loadUsers])

    return (
        <Container className="home-container">
            {loading ? <Loader/> :
                <Row>
                    <Col lg={8}>
                        <h1 className="title">Users list</h1>
                        <UsersTable/>
                    </Col>
                    <Col lg={4}>
                        <h1 className="title">Statistics</h1>
                        <Stats/>
                    </Col>
                </Row>}
        </Container>
    )
};


export default Home;