import React from "react";
import styled from "styled-components";
import buildings from "./buildings";
import { useNavigate } from 'react-router-dom';

const StyledMap = styled.div`
    height: 100vh;
    background-color: #1E4119;
    font-family: 'MaruBuri';
    margin: 10px 0px;
    display : flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
`;

const BuildingBtn = styled.button`
    
    width: 80px;
    border-radius: 10rem;
    height: 40px;
    background-color: #7A8647;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: Ewha;
    color: white;
    margin: 10px;
    &:hover{
        background-color: #68ac7f;
        color: black;
    }
    
`;
const EwhaMap = (buildingName)=>{
    const navigate = useNavigate();
    const goToBuilding = (e)=>{
        console.log(e.target.textContent);
       if( e.target.textContent === "공학관")
        navigate("/engineering");
       if(e.target.textContent === "종합과학관")
        navigate("/science");
       if(e.target.textContent === "포스코관")
        navigate("/posco");
       if(e.target.textContent === "sk텔레콤관")
        navigate("/sktelecom");
       if(e.target.textContent === "학관")
        navigate("/hakgwan");
       if(e.target.textContent === "조형예술관")
        navigate("/joyedae");
       if(e.target.textContent === "약학관")
        navigate("/pharm");
       if(e.target.textContent === "음악관")
        navigate("/music");
       if(e.target.textContent === "학생문화관")
        navigate("/hakmun");
       if(e.target.textContent === "교육관")
        navigate("/edu");
       if(e.target.textContent === "국제교육관")
        navigate("/international");
       if(e.target.textContent === "신세계관")
        navigate("/newworld");
       if(e.target.textContent === "연구협력관")
        navigate("/yeonhyeop");
       if(e.target.textContent === "체육관")
        navigate("/gym");
       if(e.target.textContent === "헬렌관")
        navigate("/helen");
       if(e.target.textContent === "ECC")
        navigate("/ecc");
       if(e.target.textContent === "연구협력관")
        navigate("/yeonhyeop");
       if(e.target.textContent === "생활환경관")
        navigate("/human-ecology-building");
    };
    
    return <StyledMap>
        {buildings.map(({buildingName})=>
        <BuildingBtn onClick={goToBuilding}>{buildingName}</BuildingBtn>)}

    </StyledMap>;
}

export default EwhaMap;
