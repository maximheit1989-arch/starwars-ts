import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "../hooks/customHooks.ts";

const StarWars = () => {
    const {isValid} = useValidHero();

    return isValid ? (
        <Text>{starWarsInfo}</Text>
    ) : <ErrorPage/>;
};

export default StarWars;