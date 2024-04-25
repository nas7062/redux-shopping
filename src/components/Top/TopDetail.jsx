// ProductDetail.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { filterColor, filterSize } from "../../reducer/productSlice";
import { addCart } from "../../reducer/CartSlice";
import styled from "styled-components";

const Image = styled.img`
    position:absolute;
    top:30%;
    left:30%;
    display:inline;
    width:500px;
    height:600px;
`
const Text =styled.div`
    position:absolute;
    top:30%;
    left:60%;
    display:inline;
`
const Color = styled.div`
    display:inline;
    position:relative;
    left:60%;
    top:50px;
    font-size:1.2em;
`
const Selected = styled.select`
width:150px;
height:30px;
margin: 10px 10px;
`
const Size = styled.div`
    display:inline;
    position:relative;
    left:48%;
    top:100px;
    font-size:1.2em;
`
const Btn = styled.div`
position:relative;
left:60%;
top:130px;
    & >button{
        width:150px;
        height:40px;
        margin-left:20px;
        background-color:black;
        border: 1px solid grey;
        color:white;
        cursor:pointer;
    }
    & >button:first-child{
        background-color:white;
        color:black;
    }
`

function TopDetail() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products.Filter
        .find((product) => product.id === parseInt(productId)));
    const DSize = product.size[0];
    const DColor = product.color[0];
    const [size, setsize] = useState(DSize);
    const [color, setcolor] = useState(DColor);
    const navigate = useNavigate();
    const ColorOption = (e) => {
        const value = e.target.value;
        setcolor(value);
    }
    const SizeOption = (e) => {
        const value = e.target.value;
        setsize(value);
    }
    const colorbtn = ["red", "black", "grey"];
    const sizebtn = ["M", "L", "XL"];
    const dispatch = useDispatch();
    

    return (
        <div>
            <Navbar />
            <Image src={product.img} alt="" />
            <Text>
                <h2>{product.name}</h2>
                <p>{product.descript}</p>
                <p>KRW {product.price}</p>
            </Text>
            <div>
                <Color>
                    <span>COLOR</span>
                    <Selected value={color} id="color" onChange={ColorOption}
                        onClick={() => dispatch(filterColor(color))}>
                        {colorbtn.map((item, idx) => {
                            return (
                                <option key={idx} value={item}>{item}</option>
                            )
                        })}
                    </Selected>
                </Color>
                <Size>
                    <span>SIZE</span>
                    <Selected value={size} id="size" onChange={SizeOption}
                        onClick={() => dispatch(filterSize(size))}>
                        {sizebtn.map((item, idx) => {
                            return (
                                <option key={idx} value={item}>{item}</option>
                            )
                        })}
                    </Selected>
                </Size>
                <Btn>
                    <button onClick={() => {
                        dispatch(addCart({
                            id: product.id,
                            price: product.price,
                            size: size,
                            Count: 1,
                            img: product.img,
                            totalPrice: product.price,
                            name: product.name,
                            descript: product.descript,
                            color: color,
                        }))
                        navigate("/CART")
                    }}>BUY NOW</button>
                    <button onClick={() => dispatch(addCart({
                        id: product.id,
                        price: product.price,
                        size: size,
                        Count: 1,
                        img: product.img,
                        totalPrice: product.price,
                        name: product.name,
                        descript: product.descript,
                        color: color,
                    }))}>ADD TO CART</button>
                </Btn>
            </div>
        </div>
    );
}

export default TopDetail;
