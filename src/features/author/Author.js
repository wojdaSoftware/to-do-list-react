import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragragh } from "./styled";

const Author = () => (
    <Container>
        <Header title={"About the author"} />
        <Section
            title={"Kacper Wojda"}
            body={
                <Paragragh>
                    lorem ipsum dolor sit amet
                </Paragragh>
            }
        />
    </Container>
);

export default Author;