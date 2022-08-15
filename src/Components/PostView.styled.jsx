import styled from "styled-components";

export const ViewWrapper = styled.div`
    
    /* &.Post_View_wrapper{

        width: 90%;
        height: 100vh;
        background-color: #000000a5;
        
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;

        overflow: hidden;
    } */

    &.Post_View{
        width: 72%;
        height: 96vh;
        background-color: black;
        border-radius: 0.4em;
        
        margin: 1% 0 0 14%;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;

        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
    }

    &.Post_x{
        position: fixed;
        top: 1.5em;
        right: 12%;
        z-index: 4;
    }

    &.Post_View-img{
        width: 64%;
        background-color: black;
    }

    &.Post_View-comments{
        width:36%;
        height: 100%;
        background-color: white;
        border-radius: 0 0.4em 0.4em 0;

        position: relative;
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
        left: 31%;
    }

    &.Poster_text{
       width: 100%;
       display: flex;
       flex-flow: row;
       align-items: center;
       justify-content:  flex-start;
       font-weight: bold;
    }

    &.Post_View-middle{
        padding: 1em;
        /* background-color: yellow; */
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
        /* background-color: coral; */
    }

    &.Post_View-bottom{
        width: 100%;
        position: absolute;
        bottom: 0; 
        left: 0;


    }

    &.Comment{
        width: 100%;
        padding: 1em;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        border-top: 1px solid lightgray;
    }
    &.Message{
        padding: 0.4em;

        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        
    }

    &.Likes{
        
    }

`

export const ImgPost = styled.img`
    min-height: 1em;
    
    &.Img_post{
        width: 100%;
        height: 90vh;
        /* background-color: red; */
    }

    &.Profile_img{
        width: 2em;
        height: 2em;
        margin-right: 1em;
        border-radius: 50%;
    }

    &.Poster-dots{
        width: 1.2em;
        height: 1.2em;
        position: absolute;
        top: 1.3em;
        right: 1em;
    }

    &.Emoji{
        margin-right: 1em;
    }
`

export const PPost = styled.p`
    font-size: 0.9em;
    line-height: 1.8;
    color: black;

    &.Poster_following{
        margin-left: 1.2em;
        font-weight: bold;
    }

    &.Time{
        font-size: 0.7em;
        margin-left: 4.1em;
        line-height: 1;
    }

    &.Post-time{
        font-size: 0.7em;
        margin-left: 1.5em;
        line-height: 3;
    }

    &.Comment-name{
        line-height: 1.3;
        margin-bottom: 0.5em;
        font-weight: bold;

        span{
            padding-left: 1em;
            font-weight: 400;
        }
    }

    &.Postbtn{
        font-size: 0.9rem;
        color: #0095F6;
        opacity: 0.4;
        padding-right: 0.5rem;
    }

    &.Likes{
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1;

        padding: 0 1rem;
    }
`