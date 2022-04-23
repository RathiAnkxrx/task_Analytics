import Content from "./Components/Content";
import { MainContainer } from "./Components/Content/ContentElement";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation/Index";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Navigation />
        <Content />
      </MainContainer>
    </>
  );
}

export default App;
