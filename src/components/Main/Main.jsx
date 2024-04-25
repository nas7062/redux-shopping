import Header from "../Header/Header";
import styled from "styled-components";
import SlickSlider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import ItemList from "../Item/ItemList";


const Title = styled.div`
    
    & >h2{
        margin-top:100px;
        text-align :center;
        font-size:2.0em;
        margin-bottom:50px;
        }
    
`;


export default function Main() {
    return (
        <div>
            <Header />
            <Title>
                <h2>BEST </h2>
                <SlickSlider />
                <ItemList />
            </Title>
            <Footer />
        </div>
    );
}