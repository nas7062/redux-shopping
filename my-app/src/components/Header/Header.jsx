import React from "react";
import styled from "styled-components";
import img from "../../bg1.jpg";
import { keyframes } from "styled-components";
import Navbar from "../Navbar/Navbar";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;



const Text = styled.div`
    position:absolute;
    left:20%;
    top:400px;
    display:inline-block;
    animation: ${fadeIn} 1s ease-in-out;
    & > h3 {
        letter-spacing :10px;
    }
    & >p{
        margin-top:0px;
    }
`
const Back = styled.div`
    
    position:absolute;
    display:fixed;
    top:0px;
    left:50%;
    z-index:-1;
    background-image:url(${img});
    width:50%;
    height:1000px;
    background-size: cover;
    background-repeat: no-repeat;
    animation: ${fadeIn} 1s ease-in-out;
`

const Head = styled.div`
    height:1000px;
    
`
export default function Header() {

    return (
        <Head>

            <Navbar />
            <Text>
                <h3>10012</h3>
                <p>Determine never to be idle...</p>
                <p>It is wonderful how much may be done if we are always doing.</p>
                <br />
                <p>No matter how hard you work for success if your thought is saturated </p>
                <p>with the fear of failure, it will kill your efforts,</p>
                <p>neutralize your endeavors and make success impossible.</p>
            </Text>
            <Back>

            </Back>
        </Head>

    );
}