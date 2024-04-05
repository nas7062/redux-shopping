import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { addCart, removeCart } from "../../reducer/CartSlice";
import styled from "styled-components";


const CART = styled.div`
    position:absolute;
    top:150px;
    left:25%;
    padding:0px 30px;
    width:1000px;
    
    & >h2 {
        top:100px;
    }
`
const Cartlist = styled.div`
    display:block;
    border:1px solid black;
    margin-bottom:20px;
`
const IMG = styled.div`
    display:inline;

    & >img{
        width:200px;
        height:200px;
    }
`
const Name = styled.div`
    font-weight: 800;
    display:inline;

    & >p{
        display:inline;
        position:relative;
        top:-160px;
        left:50px;
    }
`
const Text = styled.div`
    display:inline-block;
    position:relative;
    left:-30px;
    top:-30px;
`
const Count = styled.div`
display:inline-block;
    position:relative;
    top:-50px;
    left:500px;

    & >span{
        font-size:1.5em;
        margin:0 5px;
    }
`
const Total = styled.div`

    position:relative;
    left:85%;

`
const Btn = styled.button`
    background-color:black;
    color:white;
    width:150px;
    height:30px;
    position:relative;
    left:85%;
    cursor:pointer;
`
export default function Cart() {
    const cart = useSelector((state) => state.Cart.Cart);
    const totalPrice = useSelector((state) => state.Cart.totalPrice);

    const dispatch = useDispatch();
    let Shipping = 3000;
    return (
        <div>
            <Navbar />

            <CART>
                <h2>CART</h2>
                <div>
                    {cart.map((item, idx) => {
                        return (
                            <Cartlist key={idx}>
                                <IMG>
                                    <img src={item.img} alt="" />
                                </IMG>
                                <Name>
                                    <p>{item.name}</p>
                                </Name>
                                <Text>
                                    <p>color : {item.color}</p>
                                    <p>size : {item.size}</p>
                                    <p>price : {item.price}</p>
                                </Text>
                                <Count>
                                    <span onClick={() => dispatch(removeCart(item))}>-</span>
                                    <span>{item.Count}</span>
                                    <span onClick={() => dispatch(addCart(item))}>+</span>
                                </Count>
                            </Cartlist>
                        );
                    })}
                    <Total>
                        {totalPrice <= 80000 ? <div>
                            <p>PRICE : {totalPrice}</p>
                            <p>SHIPPING : {Shipping}</p>
                            <p>totalprice : {totalPrice + Shipping}</p>
                        </div> : <div>
                            <p>PRICE :  {totalPrice}</p>
                            <p>SHIPPING : 0</p>
                            <p>totalprice : {totalPrice + Shipping}</p>
                        </div>
                        }
                    </Total>
                    <div>
                        <Btn> Order</Btn>
                    </div>
                </div>
            </CART>
        </div>
    );
}