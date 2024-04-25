import styled from "styled-components";


const Foot = styled.div`
    text-align:center;
    margin:100px 0px;
`
const TopBtn = styled.img`
    
    position:fixed;
    width:50px;
    bottom:50px;
    right:30px;
    cursor:pointer;
`
export default function Footer() {
    const MoveTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <Foot>
                <p>10012</p>
                <p>KIM-MIN-SEOK</p>
                <p>nas7062@naver.com</p>
                <p>36, Bongojae 1-ro, Incheon, Republic of Korea</p>
                <p>010-9314-7062</p>
            </Foot>
            <TopBtn src={`${process.env.PUBLIC_URL}/image/top.png`}
                alt="" onClick={MoveTop} />
        </>
    );
};