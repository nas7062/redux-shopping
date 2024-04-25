import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../../reducer/LoginSlice";
import { Link, useNavigate } from "react-router-dom";
const Title = styled.h3`
    text-align :center;
    font-size:2.0em;
`
const Form = styled.div`
    width:400px;
    height:300px;
    
    position:relative;
    left:40%;
    top:200px;
`
const Input = styled.input`
width:390px;
height:50px;
font-size:1.1em;
border:1px solid gray;
margin-bottom:10px;
`
const Btn = styled.button`
width:400px;
height:50px;
font-size:1.5em;
margin-top:20px;
cursor :pointer;
`
const Logo = styled.h1`
text-align :center;
font-size:3.0em;
position:relative;
    
    top:-150px;
`
export default function Login() {
    const navigate = useNavigate();
    const initialState = {
        name: "",
        password: "",
    };
    const [values, setvalues] = useState(initialState);

    const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setvalues({ [name]: value });
    };
    const dispatch = useDispatch();

    return (
        <Form>
            <Logo>
                <Link to="/">
                    10012
                </Link>
            </Logo>
            <div>
                <Title>LOGIN</Title>
            </div>
            <div>
                <Input type="text" value={values.name} onChange={ChangeHandler} placeholder="아이디" />
                <Input type="password" value={values.password} onChange={ChangeHandler} placeholder="비밀번호" />
            </div>
            <div>
                <Btn onClick={() => {
                    dispatch(login(values));
                    alert("로그인 되었습니다.");
                    navigate("/");
                }}>
                    Login
                </Btn>
            </div>
        </Form>

    );

}