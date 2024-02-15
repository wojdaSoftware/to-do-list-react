import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "./styled";

const Author = () => (
    <Container>
        <Header title={"About the author"} />
        <Section
            title={"Kacper Wojda"}
            body={
                <>
                    <Paragraph>W tym roku skończyłem (<em>wreszcie</em>) technikum i
                        zdecydowałem się na ten kurs, aby poszerzyć swoje kompetencje. Profil informatyka oferuje niewiele w
                        ramach webdevu, więc trzeba znaleźć inny sposób na rozwój.</Paragraph>
                    <Paragraph>Pasjonuję się także <b>militariami, grami wideo, TTRPG-ami i muzyką</b>. Uczę się wokalu oraz gry na gitarze i ukulele.</Paragraph>
                </>
            }
        />
    </Container>
);

export default Author;