import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../reducer/LoginSlice";

const List = styled.div`
    
    display:inline;
    
    & > div {
        font-size:1.5em;
        margin-left:50px;
        margin-top:30px;
        cursor:pointer;
        
    }
    position:relative;
    
`
const UL = styled.ul`
    list-style:none;
    width:100px;
    display:inline;

   
    
`
const Li = styled.div`
   
    width:150px;
   
`
const ListLink = styled(Link)`
margin-left:30px;
margin-top:5px;
width:100px;
font-size:0.9em;
display:inline;

`
const Logo = styled.div`
    font-size:3.0em;
    margin:30px;
    padding:0px;
    font-weight:700;
    display:inline-block;
    letter-spacing :10px;
    list-style:none;
    
`

export default function Navbar() {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
    const user = JSON.parse(sessionStorage.getItem("LoginUser"));
    const dispatch = useDispatch();
    const totalCount = useSelector((state) => state.Cart.totalCount);
    const firstHandler = () => {
        setfirst(!first);
    }
    const secondHandler = () => {
        setsecond(!second);
    }
    const Lists = [
        "NEW",
        "BEST",
        "TOP",
        "BOTTOM",
        "OUTER",
        "ACC"
    ]
    const Comus = [
        "MY PAGE",
        "COMUNITTY"
    ]

    return (
        <div>
            <Logo>
                <Link to="/">
                    10012
                </Link>
            </Logo>
            <List>
                <Li onClick={firstHandler}>
                    Shop
                    {first && < UL>
                        {Lists.map((list, idx) => {
                            return (
                                <Li key={idx} >
                                    <Li>
                                        <ListLink to={"/" + list}>
                                            {list}
                                        </ListLink>
                                    </Li>
                                </Li>
                            );
                        })}

                    </UL>}
                </Li>
                <Li onClick={secondHandler}>
                    Community

                    {second && <UL>
                        {Comus.map((comu, idx) => {
                            return (

                                <Li key={idx} >
                                    <Li >
                                        <ListLink to={"/" + comu}>
                                            {comu}
                                        </ListLink>
                                    </Li>
                                </Li>
                            );
                        })
                        }

                    </UL>}
                </Li>
                {!user ? (<div>
                    <Link to={"/LOGIN"}>
                        LOGIN
                    </Link>
                </div>) : (
                    <div onClick={() => dispatch(logout())}>
                        LOGOUT
                    </div>
                )}
                <div>
                    <Link to="/CART">
                        CART{totalCount}
                    </Link>
                </div>
            </List>
        </div>
    );
}