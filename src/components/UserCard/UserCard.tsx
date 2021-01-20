import React, {FC} from "react";
import {User} from "../../models";
import Card from "react-bootstrap/Card"

const UserCard: FC<User> = ({id, name, username, email, phone, website, company, address}) => {
    const {street,suite, zipcode,city} = address;
    return (
        <Card>
            <Card.Header>User #{id} : {username}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>
                        Email : {email}<br/>
                        Phone : {phone}<br/>
                        Website : {website}<br/>
                        Company : {company.name}
                    </p>
                </Card.Text>
                <Card.Text>
                    <p>
                        Address :<br/>
                        {street}<br/>
                        {suite}<br/>
                        {zipcode}<br/>
                        {city}
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard