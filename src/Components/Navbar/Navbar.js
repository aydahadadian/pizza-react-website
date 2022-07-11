import { FaHamburger } from "react-icons/fa";
import {Container,Logo,MenuIcon} from "./NavbarElements";
const Navbar = ({setToggle,slideNum,setSlideNum}) => {

  const menuAction=()=>{
    if(slideNum !== 0){
    setSlideNum(0);
    }
    setToggle(true);
  }
  return (
    <Container>
        <Logo>
            <b>P</b>izzaland
        </Logo>
        <MenuIcon onClick={menuAction}>
            <h4>Menu</h4>
        <FaHamburger />
        </MenuIcon>
    </Container>
  )
}

export default Navbar