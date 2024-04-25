import React from "react";
import styled from "styled-components";

const Image = styled.img`
    width:460px;
    height:560px;
    position:absolute;
    left:25%;
    top:200px;
    
`
const Text = styled.div`
    position:absolute;
    left:53%;
    top:250px;
`
const Descript = styled.div`
    margin:20px 0;

`
export default function Product({ id, name, descript, img, price, color }) {

    return (
        <>
            <div >
                <div>
                    <Image src={img} alt="" />
                </div>
                <Text>
                    <div>
                        {name}
                    </div>
                    <Descript>
                        {descript}
                    </Descript>
                    <span>KRW {price}</span>
                </Text>
            </div>
        </>
    );
};