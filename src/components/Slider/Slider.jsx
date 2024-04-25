import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,


};
const Slide = styled(Slider)`
  
.slick-slide {
    margin: 0 10px; 
  }
  .slick-list {
    margin: 0 10px; 
  }
  
  height:500px;
`
const SliderImg = styled.img`
  width:320px;
  height:400px;
  border:1px solid grey;
  
`
const Product = styled.div`
  
 & > p {
    text-align :left;
    position:relative;
    left:10px;

`
export default function SlickSlider() {
    const [products, setproducts] = useState([]);
    
    useEffect(() => {
        axios.get("/data/product.json").then((data) => {
            setproducts(data.data.sliderData);
        })
    }, [setproducts])
    return (
        <Slide {...settings}>
            {products.map((product, idx) => (
                <Product key={idx}>
                    <SliderImg src={product.img} alt="asdas" />
                    <p>{product.name}</p>
                    <p>KRW {product.price}</p>
                </Product>
            ))}

        </Slide>
    );
};