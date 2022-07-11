import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

background:transparent;
height:50px;
display:flex;
justify-content:space-between;
align-items:center;
padding: 0 20px;
font-weight:700;
font-size:1.4rem;
`;

export const Logo = styled(Link)`
font-size: 1.4rem;
text-decoration:none;
b{
    color:#FFB423;
    font-size:1.7rem;
}
`;

export const MenuIcon = styled.div`
display:flex;
align-items:center;
cursor:pointer;
h4{
    padding-right:10px;
}

`;

