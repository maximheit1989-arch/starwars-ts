import Navigation from "./Navigation.tsx";
import { useLocation } from "react-router-dom";
import { characters } from "../utils/constants.ts";

const Header = () => {
    const location = useLocation();

    const path = decodeURIComponent(location.pathname); // Декодируем %20 в пробел

    const match = path.match(/^\/about me\/([^/]+)/i); // учли пробел
    const heroId = match ? match[1] : null;

    const heroName = heroId && characters[heroId] ? characters[heroId].name : "Luke Skywalker";

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation />
            <h1 className="text-center py-6 text-4xl">{heroName}</h1>
        </header>
    );
};

export default Header;
