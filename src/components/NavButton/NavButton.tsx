import React, {FC} from "react";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

interface NavButtonProps {
    to: string,
    label: string
}

const NavButton: FC<NavButtonProps> = ({to, label}) => {
    const history = useHistory();
    return (
        <Button variant="primary" onClick={() => history.push(to)}>{label}</Button>
    )
};

export default NavButton;