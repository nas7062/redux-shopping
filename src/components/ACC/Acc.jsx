import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../reducer/productSlice";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.div`
    display:inline-block;
    margin:0px 20px;
    position:relative;
    left:330px;
    margin-top:0px;
    top:-150px;

    & > img{
        width:300px;
        height:400px;
    }
`
const Box = styled.div`
    width:1500px;
    
    & > h2 {
        text-align:center;
        position:absolute;
        top:50px;
        left:50%;
        font-size:2.5rem;
    }
    

`
const H2 = styled.h2`
    text-align:center;
    position:absolute;
    left:45%;
`
export default function Acc()
{
    const dispatch = useDispatch();
    const accProducts = useSelector((state) => state.products.Filter); // top 타입의 상품 목록을 가져옴.
    
    useEffect(() => {
      dispatch(Filter("Acc"));
    }, [dispatch]);
  
    return (
      <Box>
        <Navbar/>
        <h2>ACC</h2>
        <div>
          {!accProducts ?accProducts.map((product) => (
            <Link to={`/acc/${product.id}`}>
            <List key={product.id}>
              <img src={product.img} alt={product.name} />
              <div>{product.name}</div>
              <div>{product.price}</div>
            </List>
            </Link>
          )): <H2>"상품이 준비중입니다."</H2>}
        </div>
      </Box>
    );
}

