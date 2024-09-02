import { Main } from "../components/Main/Main";
import { Burgermenu } from "../components/Navbar/Burgermenu/Burgermenu";
import { Nav } from "../components/Navbar/Nav";
import { ThemeSwitch } from "../components/Navbar/ThemeSwitch/ThemeSwitch";

export const LandingPage = ({}) => {
  return (
    <>
      <Nav theme="dark">
        <Burgermenu theme="light" />
        <li>Home</li>
        <li>About</li>
        <ThemeSwitch />
      </Nav>
      <Main>
        <h2>Landing Page</h2>
      </Main>
    </>
  );
};
