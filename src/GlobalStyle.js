import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
       *{
      box-sizing:border-box;
      margin:0;
      padding:0;
      font-family:'kanit',sans-serif ;
      color:#fff;
      list-style:none;
      }
      ul{
        margin:none;
        padding:none;
      }

      button{
        height:50px;
        border-radius:8px;
        padding:0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme.bc.defaultBtn};
        box-shadow: 0px 5px 8px rgba(222, 151, 0, 0.24), 0px 14px 32px rgba(255, 178, 14, 0.29);
        border:none;
        font-size:1.2rem;
        cursor:pointer;
        
        svg{
            padding-left:5px;
            font-size:1rem;
        }
     
      }
`;
 
export default GlobalStyle;