import { HomeWrap, Image } from './HomePage.styled';
import phonebook from '../../components/Images/phonebook.jpg'

const HomePage = () => {

    return (
        <HomeWrap>
            <Image src={phonebook} alt="Phonebook"  />
        </HomeWrap>
    )
};

export default HomePage;