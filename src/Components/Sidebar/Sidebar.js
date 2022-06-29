import {FaTimes} from 'react-icons/fa'
import { Container,Wrapper,Item,Icon,Slide,MunuWrapper,Cart,CartItem,ImageContainer,Image,Col,InfoContainer, CartWrapper,Qty ,DltBtn,Back,Button} from './SidebarElements'
import {FaChevronRight,FaPlus,FaMinus,FaArrowLeft} from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = ({openSidebar,setToggle,slideNum,setSlideNum}) => {
const [change, setChange] = useState(false)
  
  const cartItems=JSON.parse(localStorage.getItem("pizza-cart-items"))
  const total = cartItems?.map(item=> item.Qty*item.Price).reduce((prev, curr) => prev + curr, 0);

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    });
  const deleteCart = (item) =>{
    const selectedItem = cartItems.indexOf(item)

    if(selectedItem !== -1){

      cartItems.splice(selectedItem,1)
      localStorage.setItem("pizza-cart-items",JSON.stringify(cartItems))
      setChange(!change)
    }

  }
  return (
    <Container openSidebar={openSidebar}>
        <Icon onClick={()=>setToggle(false)}>
        <FaTimes/>
        </Icon>
        <Wrapper slideNum={slideNum}>
          <Slide>
            <MunuWrapper>
            <Item onClick={()=>setToggle(false)}>Full menu</Item>
            <Item onClick={()=>setToggle(false)}>Login</Item>
            <Item onClick={()=>setSlideNum(1)}>Cart <FaChevronRight /> </Item>
            <Item onClick={()=>setToggle(false)}>About us</Item>
            </MunuWrapper>
            </Slide>
          <Slide>

          <Back onClick={()=>setSlideNum(0)}><FaArrowLeft /> Menu</Back>
          {cartItems?.length === 0 || cartItems === null ?
            
            <h2 style={{padding:"15px",color:"rgb(255 255 255 / 52%)",fontWeight: "400"}}>Your Cart is empty !</h2>
            
            :
             <CartWrapper>
             <Cart>
             {cartItems.map((item,index)=>
               <CartItem key={index}>
                 <Col>
                   <ImageContainer>
                     <Image src={item.Image}/>
                   </ImageContainer>

                 </Col>
                 <Col>
                 <h3>{item.Title}</h3>
                 <h3>${item.Price}</h3>
                 <Qty>
                  
                   <FaMinus />
                   <span>{item.Qty}</span>
                   <FaPlus />
                 </Qty>
                 </Col>
                 <DltBtn onClick={()=>deleteCart(item)}><FaTimes /> </DltBtn>
               </CartItem>
             )
              }
              </Cart> 

              <InfoContainer>
                 <h2>total: {formatter.format(total) }</h2>
                 <Button>Checkout</Button>
                </InfoContainer> 
                </CartWrapper>
}
          </Slide>
        </Wrapper>
   
    </Container>
  )
}

export default Sidebar