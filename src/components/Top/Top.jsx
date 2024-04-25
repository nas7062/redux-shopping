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
export default function Top()
{
    const dispatch = useDispatch();
    const topProducts = useSelector((state) => state.products.Filter); // top 타입의 상품 목록을 가져옴.
    
    useEffect(() => {
      dispatch(Filter("Top"));
    }, [dispatch]);
  
    return (
      <Box>
        <Navbar/>
        <h2>Top</h2>
        <div>
          {topProducts.map((product) => (
            <Link to={`/product/${product.id}`}>
            <List key={product.id}>
              <img src={product.img} alt={product.name} />
              <div>{product.name}</div>
              <div>{product.price}</div>
            </List>
            </Link>
          ))}
        </div>
      </Box>
    );
}
