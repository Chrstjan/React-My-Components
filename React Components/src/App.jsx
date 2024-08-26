import "./App.scss";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";
import { Burgermenu } from "./components/Navbar/Burgermenu/Burgermenu";
import { Nav } from "./components/Navbar/Nav";

function App() {
  return (
    <>
      <Nav theme="dark">
        <Burgermenu theme="light" />
      </Nav>
      <Main theme="light">
        <Modal theme="darkMode"></Modal>
      </Main>
    </>
  );
}

export default App;
