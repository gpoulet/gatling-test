import React, { FC, useEffect, useState } from "react";
import { User } from "../../models";
import Loader from "../Loader";
import UserCard from "../UserCard";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { ROUTE_HOME } from "../../constants";
import UserPosts from "../UserPosts";
import NavButton from "../NavButton";

type UserDetailsProps = {
  users: User[];
  loadUsers: () => Promise<{ payload: User[]; type: string }>;
};

interface ParamTypes {
  id: string;
}

const UserDetails: FC<UserDetailsProps> = ({ users, loadUsers }) => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (users.length === 0) {
      setLoading(true);
      loadUsers().finally(() => setLoading(false));
    }
  }, [users, loadUsers]);

  return (
    <Container className="userdetails-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserCard id={id} />
          <NavButton to={ROUTE_HOME} label="Back" />
          {users.length > 0 && (
            <>
              <UserPosts id={id} />
              <NavButton to={ROUTE_HOME} label="Back" />
            </>
          )}
        </>
      )}
    </Container>
  );
};
export default UserDetails;
