import { Link } from "react-router-dom";

const Landing = () => {

    return(
        <>
        <p id='head1' class='header'>Welcome to NoCap Travel</p>
        <p id='head2' class='header'>Awesome Places</p>
        <p id='head3' class='header'>Awesome Prices</p>
        <p id='head4' class='header'>Awesome Friends</p>
        <p id='head5' class='header'>All at your fingertips</p>
        <Link to="/Home">
          <button className="button">Get Started</button>
        </Link>
        </>
    )
}

export default Landing;