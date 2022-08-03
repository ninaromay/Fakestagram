import styled from "styled-components";

export const LogoI = styled.img`
    width: 7em;
    margin-left: -1em;
    &.Search{
        width: 1.2em;
        margin: 0;
    }
    &.Search-searching{
     opacity: 0
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
    
`