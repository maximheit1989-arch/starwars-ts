import { useParams } from "react-router-dom";
import Navigation from "./Navigation.tsx";
import { characters } from "../utils/constants.ts";

const Header = () => {
    const { hero } = useParams<{ hero: string }>();


    const displayName = hero && characters[hero] ? characters[hero].name : "Error";

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation />
            <h1 className="text-center py-6 text-4xl">{displayName}</h1>
        </header>
    );
};

export default Header;
