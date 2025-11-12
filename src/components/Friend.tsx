import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {useNavigate} from "react-router";
import {SWContext} from "../utils/context.ts";

interface FriendProps {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: FriendProps) => {
    const {changeHero} = useContext(SWContext);
    const navigate = useNavigate();

    let styles = "w-full";
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }

    const handleClick = () => {
        changeHero(friend)
        navigate(`/home/${friend}`);
    }

    return (
        <img className={styles} src={characters[friend].img} alt={characters[friend].name} onClick={handleClick} />
    );
};

export default Friend;