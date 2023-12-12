import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Container from "./common/Container";
import Tasks from "./features/tasks/Tasks";

const App = () => {
    const theme = {
        breakpoint: 767,
        colors: {
            background: "rgb(226, 226, 226)",
            primaryColor: "teal",
            activeColor: "hsl(180, 100%, 35%)",
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Tasks />
            </Container>
        </ThemeProvider>
    );
};

export default App;