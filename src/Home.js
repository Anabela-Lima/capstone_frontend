
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {

return(
    <>
    <header>
        <NavBar />
    </header>
    <main>
        <div className="header">
            <p id='head1'>Hallo</p>
            <p id='head2'>Bonjour</p>
            <p id='head3'>Hola</p>
            <p id='head4'>Hello</p>
            <p id='head5'>你好</p>
        </div>
    </main>
    </>
);

}

export default Home;