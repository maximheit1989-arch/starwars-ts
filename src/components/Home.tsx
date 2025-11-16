import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "../hooks/customHooks.ts";

const Home = () => {
    const {isValid} = useValidHero()

    return isValid ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ): <ErrorPage/>
};

export default Home;
