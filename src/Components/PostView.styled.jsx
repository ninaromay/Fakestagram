import styled from "styled-components";

export const ViewWrapper = styled.div`
    
    &.Post_View_wrapper{
        position: absolute;
        z-index: 4;
        width: 100%;
        height: 100vh;
        background-color: #000000a5;
        
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;

        overflow: hidden;
    }

    &.Post_View{
        width: 72%;
        height: 96vh;
        background-color: white;
        border-radius: 0.4em;

        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
    }

    &.Post_x{
        top: 1.5em;
        right: 2%;
    }

    &.Post_View-img{
        width: 64%;
    }

    &.Post_View-comments{
        width:36%;
        height: 100%;
        background-color: lightblue;
    }

    &.Post_View-top{
        width: 100%;
        
        display: flex;
        flex-flow: row;
        align-items: flex-start;
        justify-content: flex-start;

        position: relative;

        padding: 1em;

        border-bottom: 1px solid lightgray;
    }

    &.Poster_dot{
        width: 0.2em;
        height: 0.2em;
        border-radius: 50%;
        background-color:black;
        position: absolute;
        top: 45%;
        left: 30%;
    }

    &.Poster_text{
       width: 100%;
       display: flex;
       flex-flow: row;
       align-items: center;
       justify-content:  flex-start;
    }

    &.Post_View-middle{
        padding: 1em;
        background-color: yellow;
    }

    &.Post_description{
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }

    &.Post_description-text{
        p{
            margin-right: 1em;
        }
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }

    &.mid{
        background-color: coral;
    }
`

export const ImgPost = styled.img`
    min-height: 1em;
    
    &.Img_post{
        width: 100%;
        background-color: red;
    }

    &.Profile_img{
        width: 2em;
        height: 2em;
        margin-right: 1em;
    }

    &.Poster-dots{
        width: 2em;
        height: 2em;
        position: absolute;
        top: 1em;
        right: 1em;
    }
`

export const PPost = styled.p`
    font-size: 0.9em;
    line-height: 1.8;
    color: black;

    &.Poster_following{
        margin-left: 3em;
        font-weight: bold;
    }

    &.Time{
        font-size: 0.7em;
        margin-left: 4.1em;
        line-height: 1;
    }
`