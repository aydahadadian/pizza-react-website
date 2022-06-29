import styled from "styled-components";


export const Container=styled.div`
width:100%;
background:${(props) => props.theme.bc.section} ;
`
export const Wrapper=styled.div`
padding:1rem 5rem;
display:flex;
align-items:center;
flex-direction:column;
`

export const Section=styled.section`
padding:1rem;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid #eeeeee0a;
width:100%;
p{color: #707070; font-size: 0.9rem; max-width: 90%;}


@media screen and (max-width:650px){
       flex-direction:column;
      }
`
export const SectionWrapper=styled.div`
padding-bottom:2rem;
display:flex;
flex-direction:column;
align-items:center;
`
export const Title = styled.h2`

color:${(props) => props.theme.colors.secondary} ;
margin:1rem 0 2rem;
font-size:1.8rem;
`
export const List = styled.ul`

display:flex;
flex-wrap: wrap;
justify-content: center;
padding:0;
`
export const Item = styled.li`

padding:0 10px;
display:flex;
flex-direction:column;
align-items:center;
text-align: center;
width: 20%;

@media screen and (max-width:650px){
       width:auto;
      }


`
export const SocialIcon = styled.ul`
display:flex;
margin:1rem 0 2rem;
`
export const Icon = styled.li`
padding:0 10px;
svg{font-size:1.2rem}
`
export const Image = styled.img`

height:90px;
`
export const Left = styled.div`
display:flex;
width:40%;

@media screen and (max-width:650px){
       width:100%;
      }
`
export const Column = styled.div`
display:flex;
flex-direction:column;
padding-right:2rem;
line-height:2;
h4{
    font-weight:500;
    color: #707070;
    width:100% ;
}



`
export const Right = styled.div`
display:flex;
flex-direction:column;
width:40%;

@media screen and (max-width:650px){
       width:100%;
      }
`
export const Header = styled.h3`
font-weight:500;
`
export const Row = styled.div`
display:flex;

`
export const Input = styled.input`
width:250px;
border:none;
background: #282828;
border-radius:5px;
padding:15px;
margin-right:10px;
`

