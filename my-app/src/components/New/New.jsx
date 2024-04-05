import React from "react";
import Navbar from "../Navbar/Navbar";
import { productData } from "../../data/data";
import styled from "styled-components";
import NewItem from "./NewItem";
const List = styled.div`
    display:inline-block;
    margin:0px 20px;
    position:relative;
    left:250px;
    margin-top:0px;
`
export default function New() {
    return (
        <div>
            <Navbar />
            <div>
                {productData.map((product, idx) => {
                    return (
                        <List key={idx}>
                            <NewItem
                                id={product.id}
                                name={product.name}
                                img={product.img}
                                descript={product.descript}
                                price={product.price}
                            >
                            </NewItem>
                        </List>

                    );
                })}
            </div>
        </div>

    );
}