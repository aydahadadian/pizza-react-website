import React from 'react'
import { features } from '../../data'
import { Container,Wrapper,Section,SectionWrapper,Title,List,Item,Image,Left,Right,Header,SocialIcon,Icon,Column,Row,Input } from './FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Section>
                <SectionWrapper>
                <Title>
                    How does it work
                </Title>
                <List>
                    {features.map((item,i)=>
                    <Item key={i}>
                        <Image src={item.img} />
                        <Header>{item.title}</Header>
                        <p>{item.desc}</p>

                    </Item>
                    )}
                </List>
                </SectionWrapper>
            </Section>

            <Section>
               <Left>
                    
                        <Column>
                            <Header>Compony</Header>
                            <h4>About us</h4>
                            <h4>Team</h4>
                            <h4>Careers</h4>
                            <h4>Blog</h4>
                        </Column>
                        <Column>
                            <Header>Contact</Header>
                            <h4>Help & Support</h4>
                            <h4>Partner with us </h4>
                            <h4>Ride with us </h4>
                        </Column>
                        <Column>
                            <Header>Legal</Header>
                            <h4>Terms & Conditions</h4>
                            <h4>Refund & Cancellation</h4>
                            <h4>Privacy Policy</h4>
                            <h4>Cookie Policy</h4>
                        </Column>
                      
               
                    </Left>
                    <Right>
                       <Header>Follow us</Header>
                       <SocialIcon>
                           <Icon><FaFacebook /></Icon>
                           <Icon><FaInstagram /></Icon>
                           <Icon><FaYoutube /></Icon>
                           <Icon><FaTwitter /></Icon>
                           <Icon><FaLinkedin /></Icon>
                           </SocialIcon>
                        
                       <Header>Recive news from us</Header>
                       <Row>
                        <Input placeholder='Enter your email'/>
                       <button>Subscribe</button>
                       </Row>
                    </Right>
                   
           
            </Section>

            <Section style={{borderBottom:"none"}}>
                <p>All Right recived-2022</p>
                <p>Made by ayda hadadian</p>
            </Section>
        </Wrapper>
    </Container>

  )
}

export default Footer