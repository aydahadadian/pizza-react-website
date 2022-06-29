import styled from "styled-components";


export const InfoContainer=styled.div`
width:100%;
height: 100vh;
  max-height: 500px;
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-position:center;
background-size:cover;
`
export const Title=styled.h1`
font-size: clamp(3rem, 5vw, 5rem);
/* font-weight:500; */
`
export const Text=styled.p`
  margin-bottom: 2rem;
    font-size: clamp(1rem, 3vw, 2rem);
`