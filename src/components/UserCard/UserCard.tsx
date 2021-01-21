import React, {FC} from "react";
import {User} from "../../models";
import Card from "react-bootstrap/Card"

type UserCardProps = {
    user: User | undefined
}

const UserCard: FC<UserCardProps> = ({user}) => {
    if (user) {
        const {id, name, username, email, phone, website, company, address} = user
        const {street, suite, zipcode, city} = address;
        return (
            <Card>
                <Card.Header>User #{id} : {username}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Email : {email}<br/>
                        Phone : {phone}<br/>
                        Website : {website}<br/>
                        Company : {company.name}
                    </Card.Text>
                    <Card.Text>
                        Address :<br/>
                        {street}<br/>
                        {suite}<br/>
                        {zipcode}<br/>
                        {city}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <></>
        );
    }
}

export default UserCard