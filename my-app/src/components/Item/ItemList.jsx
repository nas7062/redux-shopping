import React from "react";
import { productData } from "../../data/data";
import Item from "./Item";
import styled from "styled-components";

const Title = styled.div`

    text-align :center;
    margin-top :150px;
    font-size:1.5em;
`
const List = styled.div`
    display:inline-block;
    margin:0px 50px;
    position:relative;
    left:50px;
    margin-top:100px;
`
export default function ItemList() {
    return (

        <div>
            <Title>
                <h2>NEW</h2>
            </Title>
            <div>
                {productData.map((product, idx) => {
                    return (
                        <List key={idx}>
                            <Item
                                id={product.id}
                                name={product.name}
                                img={product.img}
                                descript={product.descript}
                                price={product.price}
                            >
                            </Item>
                        </List>


                    );
                })}
            </div>
        </div>

    );
}