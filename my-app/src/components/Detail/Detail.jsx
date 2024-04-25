import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterColor, filterSize } from "../../reducer/productSlice";
import Product from "../Product/product";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { addCart } from "../../reducer/CartSlice";
import { useNavigate, useParams } from "react-router-dom";

const Color = styled.div`
    display:inline;
    position:relative;
    left:53%;
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
    left:42.3%;
    top:100px;
    font-size:1.2em;
`
const Btn = styled.div`
position:relative;
left:50%;
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

export default function Detail() {
    const products = useSelector((state) => state.products.Products);
    const DSize = products[0].size[0];
    const DColor = products[0].color[0];
    const [size, setsize] = useState(DSize);
    const [color, setcolor] = useState(DColor);
    const navigate = useNavigate();
    const ColorOption = (e) => {
        const value = e.target.value;
        setcolor(value);
    }
    const { id } = useParams();
    const SizeOption = (e) => {
        const value = e.target.value;
        setsize(value);
    }
    const colorbtn = [  "red", "black", "grey"];
    const sizebtn = [   "M", "L", "XL"];
    const dispatch = useDispatch();
    
    return (
        <div>
            <Navbar />
            <Color>
                <span>COLOR</span>
                <Selected value={color} id="color" onChange={ColorOption}
                    onClick={() => dispatch(filterColor(color))} >
                    {colorbtn.map((item, idx) => {
                        return (
                            <option key={idx} value={item}>{item}</option>
                        );
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
                        );
                    })}
                </Selected>
            </Size>
            <div>
                {products.filter((product) => product.id !== id).map((product, idx) => {
                    return (
                        <>
                            <div key={idx} >
                                <Product
                                    id={product.id}
                                    name={product.name}
                                    descript={product.descript}
                                    img={product.img}
                                    price={product.price}
                                    color={product.color}
                                >
                                </Product>
                            </div>
                            <Btn>
                                <button onClick={() => {dispatch(addCart({
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
                        </>
                    );
                })}
            </div>

        </div>

    );
};