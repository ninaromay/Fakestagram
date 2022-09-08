import styled from "styled-components";

export const LogoI = styled.img`
    width: 7em;
    margin-left: -1em;

    @media screen and (max-width: 830px){
      width: 90%;
      margin: 0;
    }
    &.Search{
        width: 1.2em;
        margin: 0;

        @media screen and (max-width: 830px){
            width: 1em;
        }
    }
    &.Search-searching{
     opacity: 0
    }

    &.New-Post-logo{
        width: 3em;
        height: 3em;
    }

    &.Profile-tab{
        width: 1em;
        height: 1em;
    }

    &.Profile-logo{
        border: 1px solid black;
        border-radius: 50%;
    }
`
export const CardUl = styled.ul`
    width: 100%;
    /* background-color: white; */

    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    
    &.Menu-ul{
        width: 100%;
        margin-left: 2em;  
        margin-right: -0.5em;   
        @media screen and (max-width: 830px){
            margin:0 0.1em;
            min-width: 11em;
        }   
    }

    &.Stories{
        border-radius: 0.5em;
        border: 0.1em solid lightgray;
        overflow-x: hidden;
        margin-bottom: 1.5em;
    }
`

export const CardLi = styled.li`

    &.NonActive{
        background-color: white;
        border-radius: 0.5em;
    }

    &.Active>img{
        transform: scale(1.5);
    }

    &.Story-wrapper{
        position: relative;

        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`

export const SearchBar = styled.div`
    width: 100%;
    height: 2.4em;
    background-color: #e7e7e7;
    border-radius: 0.6em;
    color: #888888;
    position: relative;

    display: flex;
    flex-flow: row ;
    justify-content: flex-start;
    align-items: center;

    padding: 0.5em;

    &.Searching>img{
        opacity: 0;
    }

    @media screen and (max-width: 600px){
        height: auto; 
    }    
`
export const SearchI = styled.input`
    width: 85%;
    height: 2.4em;

    position: absolute;
    right: 0;
    top: 0;
    
    &:focus{
        width: 95%;
        outline: none;
    }
    @media screen and (max-width: 600px){
        height: auto;
        top: 0.3em;
        right: -0.5em;
    }
`

export const TextPopUps = styled.p`
        font-size: 1em;
        color: black;
    &.Tab{
        margin-left: 1em;
        font-size: 0.8em;
    }
`