import {characters, navItems} from "../utils/constants.ts";
import {NavLink} from "react-router";

interface FriendProps {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: FriendProps) => {
    let styles = "w-full";
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    return (
        <NavLink to={`/${navItems[0]}/${friend}`}>
            <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
        </NavLink>
    );
};

export default Friend;