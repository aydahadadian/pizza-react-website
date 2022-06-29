import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Container,Wrapper,Items, Title ,Text} from './HeroElements'
import {FaChevronRight} from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'
const Hero = ({cart,setCart}) => {
    const [toggle, setToggle] = useState(false);
    const [slideNum, setSlideNum] = useState(0);

    useEffect(() => {
      if (cart) {
      setToggle(true)
      setSlideNum(1)
      setCart(false)
      }
    }, [cart])
    
    
  return (
    <Container>
 
    <Navbar setToggle={setToggle} slideNum={slideNum} setSlideNum={setSlideNum} />
    <Sidebar openSidebar={toggle} setToggle={setToggle} slideNum={slideNum} setSlideNum={setSlideNum} />
    <Wrapper>
    <Items>
     <Title>Greatest food in your area !</Title>
     <Text>Ready in 60 second</Text>
     <button>Order Now <FaChevronRight /></button>
    </Items>
  
   </Wrapper>
    </Container>

  )
}

export default Hero