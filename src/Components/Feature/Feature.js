
import { Parallax } from 'react-parallax';
import {FaChevronRight} from 'react-icons/fa';
import { InfoContainer,Title,Text } from './FeatureElements';
const Feature = ({pic}) => {
  return (
    <Parallax bgImage={pic} bgImageAlt="the cat" strength={200} >
      <InfoContainer>
          <Title>Pizza of the day</Title>
          <Text>Truffle alfredo sauce topped with 24 carat gold dust.</Text>
          <button>Order Now 
             <FaChevronRight />
          </button>
      </InfoContainer>

    </Parallax>
  )
}

export default Feature