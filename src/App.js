import { Header } from "./components";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <>
      {/* Global style */}
      <GlobalStyle />
      <main className="container">
        {/* header components */}
        <Header />
      </main>
    </>
  );
};

export default App;
