import Navigation from "./Navigation.tsx";
import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Header = () => {
    const {hero} = useContext(SWContext)

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation/>
            <h1 className="text-center py-6 text-4xl">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;
