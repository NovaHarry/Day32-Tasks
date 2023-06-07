import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dashboard({title , children}){

    const navigate = useNavigate();
    return(
        <div>
            <div>
                <div className="nav-styles">
                <span>
                    <Button className="nav-buttons"
                    onClick={()=>{navigate('/')}}
                    >Home</Button>
                </span>
                <span>
                    <Button className="nav-buttons"
                    onClick={()=>{navigate('/addbooks')}}
                    >Add Book</Button>
                </span>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="children">{children}</div>
        </div>
    )
}