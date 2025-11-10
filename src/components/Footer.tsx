import Button from "./ui/Button.tsx";

const Footer = () => {
    return (
        <footer className=" clear-both rounded-b-3xl h-20 bg-grey grid grid-cols-9 items-center">
            <Button className={'col-start-3'}>Send me email</Button>
        </footer>
    );
};

export default Footer;