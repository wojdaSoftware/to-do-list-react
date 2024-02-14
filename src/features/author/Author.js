import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
    <Container>
        <Header title={"About the author"} />
        <Section
            title={"Kacper Wojda"}
            body={<p>
                lorem ipsum dolor sit amet
            </p>}
        />
    </Container>
);

export default Author;