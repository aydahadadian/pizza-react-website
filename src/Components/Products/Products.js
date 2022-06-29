import {FaChevronRight} from 'react-icons/fa';
import { Container,Title,Wrapper,Card,ImageContainer,Image,InfoContainer,InfoTitle,More } from './ProductsElements'
const Products = ({data,title,setCart}) => {



  const handleClick=(item)=>{
    const cartItems=localStorage.getItem('pizza-cart-items') ? JSON.parse(localStorage.getItem("pizza-cart-items")) : [];
    
     const idPro=item.id;  
     const img=item.img;  
     const title=item.name;  
     const price=item.price;  
     

        const allIds=cartItems.map((arr)=>arr.Id);


        if(allIds.indexOf(idPro) !== -1) {
        
        const updatedArray=cartItems.map((arr)=>
        arr.Id===idPro ? 
        {Qty:arr.Qty+1,Id:idPro,Image:img,Title:title,Price:price} 
        : arr
        )
        localStorage.setItem('pizza-cart-items', JSON.stringify(updatedArray));
        console.log("hiaaaa")

    }else{

       cartItems.push({Qty:1,Id:idPro,Image:img,Title:title,Price:price}); 
       localStorage.setItem('pizza-cart-items', JSON.stringify(cartItems));
   
    } 

  setCart(true)
   
}


  return (
   <Container>
    <Title>
       {title}
    </Title>
    <Wrapper>
        {data.map((item,i)=>
     <Card key={i}>
         <ImageContainer>
           <Image  src={item.img}/>
         </ImageContainer>
         <InfoContainer>
             <InfoTitle>{item.name}</InfoTitle>
             <h3>${item.price}</h3>
             <button onClick={()=>handleClick(item)}>add to cart</button>
         </InfoContainer>
     </Card>
     )}
    </Wrapper>
    <More>
      view all 
       <FaChevronRight />
    </More>
   </Container>
  )
}

export default Products