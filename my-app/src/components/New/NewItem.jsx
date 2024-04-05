import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Products } from "../../reducer/productSlice";

const Box = styled.div`
    width:350px;
    height:500px;
    display:inline-block;
    
    
`
const Image = styled.img`
    width:300px;
    height:400px;
`
const Name = styled.div`
    text-align :left;
    margin-top:10px;
`
const Price = styled.div`
    display:inline-block;
    margin-top:5px;
`
export default function NewItem({ id, img, name, price }) {
    const dispatch = useDispatch();

    return (
        <Link to={`/detail/` + id}>
            <Box onClick={() => dispatch(Products(id))}>
                <div>
                    <Image src={img} alt="" />
                </div>
                <Name>
                    {name}
                </Name>
                <div>

                    <Price>
                        KRW {price}
                    </Price>

                </div>

            </Box>
        </Link>
    );
} 