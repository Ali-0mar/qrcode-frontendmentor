import "./App.css";
import { Container, Img, StyledHeading, StyledParagraph } from "./components/styled.components";
import hero from "./Assets/image-qr-code.png";
function App() {
        return (
                <div className="App">
                        <Container>
                                <Img src={hero} />
                                <StyledHeading> Improve your front-end skills by building projects</StyledHeading>
                                <StyledParagraph>
                                        Scan the QR code to visite Frontend Mentor and take your coding skills to the next level
                                </StyledParagraph>
                        </Container>
                </div>
        );
}

export default App;
