import styled from "styled-components";

export const Container = styled.div`

position: fixed;
overflow:hidden;
  z-index: 999;
  width: 300px;
  height: 100%;
  background: ${(props) => props.theme.bc.defaultBtn};
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right : ${({openSidebar})=>(openSidebar ? '0' : '-1000px')};   
    
`
export const Wrapper = styled.div`
display: flex;
transform: translateX(${(props) => props.slideNum * -300}px);
transition: all .3s ease-in;

`
export const Slide = styled.div`
width:300px;
height:80vh;

`
export const MunuWrapper = styled.div`
width:100%;
  display:grid ;
  grid-template-columns: 1fr;
   grid-template-rows: repeat(4, 70px);
  text-align: center;
  line-height:3.8;
  

`
export const Item = styled.div`
position :relative;
font-size:1.2rem;
cursor:pointer ;
:hover{
    background:${(props) => props.theme.colors.secondary};
    
}

svg{position:absolute;right:20px;top:0;
bottom:0;
margin:auto}

`
export const Icon = styled.div`
position:absolute;
top:1rem;
left:1rem;
cursor:pointer;
svg{
    font-size:1.2rem;
}

`
export const CartWrapper = styled.div`

display:flex;
flex-direction:column;
padding:10px;

`
export const Cart = styled.ul`

display:flex;
flex-direction:column;
padding:10px;
height:65vh;
overflow-y:auto ;
`
export const CartItem = styled.li`
display:flex;
width: 100%;
justify-content: flex-start;
padding-bottom:10px;
margin-bottom: 10px;
border-bottom: 1px solid #f7f7f74d;
position:relative;
h3{font-weight: 500;
    font-size: 1rem;}
`
export const ImageContainer = styled.div`
width:70px;
height:70px;
margin-right:15px;

`
export const Image = styled.img`
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
    width: 100%;
`

export const Col = styled.div`

`
export const Qty = styled.div`
display:flex;
align-items:center;
svg{
  font-size:.9rem;
  cursor:pointer;
}
span{
  padding:0 10px;
}
`
export const InfoContainer = styled.div`
h2{
  font-weight:300;
  font-size:1.5rem;
  padding:10px;

}

`

export const DltBtn  = styled.div`
position:absolute;
right:0;
top:0;
cursor:pointer ;

`
export const Back  = styled.div`
width:100%;
display:flex;
justify-content:end;
align-items:center;
padding-right:10px;
cursor:pointer;
svg{margin-right:10px;font-size:0.9rem;}
`
export const Button  = styled.button`
width:100%;
background: #d7d7d759;
    color: #000;
    box-shadow: 2px 2px 7px -1px #464646;
:hover{
background:#d7d7d7c4 ;
}
  
`