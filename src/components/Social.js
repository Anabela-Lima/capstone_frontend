import NavBar from "./NavBar"
import {ReactComponent as TwitterIcon} from "../Vector.svg";
import {ReactComponent as InstagramIcon} from "../Group1.svg";
import {ReactComponent as LinkedInIcon} from "../Group2.svg";
import {ReactComponent as TickIcon} from "../tick.svg";

const Social = () =>{

return(
    <>
    <div>
    <button classname="profile">Profile</button>
    <button classname="social">Social</button>
    <button classname="privacy">Privacy</button>
    </div>
    <p></p>
    <p></p>
    <TwitterIcon id="twitter"/>
    <p id="social1">@Ayana85</p>
    <InstagramIcon id="insta"/>
    <p id="social2">@Ayaa__</p>
    <LinkedInIcon id="linkedin"/>
    <p id="social3">Ayana Zhen</p>
    
    <p id="social4">Link account</p>
    <p id="social5">Link account</p>
    <p id="social6">Link account</p>

    <button classname="check1"><TickIcon/></button>
    <button classname="check2"><TickIcon/></button>
    <button classname="check3"><TickIcon/></button>
    <button classname="check4"><TickIcon/></button>
    <button classname="check5"><TickIcon/></button>
    <button classname="check6"><TickIcon/></button>
    <p></p>
    <p></p>
    <button classname="save">Save</button>
    <NavBar/>
    </>
)

}

export default Social;