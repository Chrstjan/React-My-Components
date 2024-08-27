import { Main } from "../components/Main/Main"
import { Burgermenu } from "../components/Navbar/Burgermenu/Burgermenu"
import { Nav } from "../components/Navbar/Nav"

export const LandingPage = ({}) => {
    return (
        <>
            <Nav theme='dark'>
                <Burgermenu theme='light'/>
                <li>Home</li>
                <li>About</li>
            </Nav>
            <Main>
                <h2>Landing Page</h2>
            </Main>
        </>
    )
}