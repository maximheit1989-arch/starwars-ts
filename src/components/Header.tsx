import Navigation from "./Navigation.tsx";
import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Header = () => {
    const {hero} = useContext(SWContext)
    const title = hero ? characters[hero].name : 'Error';

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation/>
            <h1 className="text-center py-6 text-4xl">{title}</h1>
        </header>
    );
};

export default Header;