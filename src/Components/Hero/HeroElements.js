import styled from "styled-components";
import ImgBg from '../../images/pizza-1.jpg';

export const Container = styled.div`

  background:linear-gradient(to right , rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`
export const Wrapper = styled.div`

height:calc(100vh-50px);
max-height:100%;
padding: 0rem calc((100vw - 1300px) / 2);
`
export const Items = styled.div`
display:flex;
height:100vh;
max-height:100%;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding:0 2rem;
width:55vw;
text-transform:uppercase;
line-height:1.2;
font-weight:bold;

`
export const Title = styled.h1`

    font-size: clamp(2.5rem, 10vw,5rem);
     margin-bottom: 1rem;
     box-shadow: 7px 5px #FFB423;
     letter-spacing: 3px;
`
export const Text = styled.p`

  font-size: clamp(2rem, 2.5vw, 3rem);
   margin-bottom: 2rem;
`
