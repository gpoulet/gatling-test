import React, {FC} from "react";
import {Post} from "../../models";
import Card from "react-bootstrap/Card";

export type UserPostProps = {
    post: Post
}

const UserPost: FC<UserPostProps> = ({post}) => {
    const {id, title, body} = post;
    return (
        <Card className="userpost-card">
            <Card.Header>Post #{id}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserPost