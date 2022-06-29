import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

display:flex;
flex-direction:column;
align-items:center;
background:${(props) => props.theme.bc.section} ;
padding: 2rem 1rem;
`
export const Title = styled.h2`

color:${(props) => props.theme.colors.secondary} ;
margin:1rem 0 2rem;
font-size:1.8rem;
`
export const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;

`
export const Card = styled.div`

padding:10px 15px;
margin-bottom:10px;

`
export const ImageContainer = styled.div` 
width:280px;
height:280px;

`
export const Image = styled.img`
width:100%;
height:100%;
border-radius:5px;
`
export const InfoContainer = styled.div`
line-height: 1.4;
padding-top: 10px;
button{
    background:${(props) => props.theme.bc.secondaryBtn};
    width:100%; 
    margin-top:15px;
}
h3{
    font-weight:500;
}
`
export const InfoTitle = styled.h3`

color:${(props) => props.theme.colors.secondary} ;
`
export const More = styled.div`
margin-top:2rem;
display:flex;
align-items:center;
font-weight:500;
font-size:1.1rem;
cursor:pointer;
svg{
    padding-left:10px;
    font-size:1rem;
}
`


