import styled from "styled-components";

export const User = styled.h4`
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #4d4d4d;
    line-height: 1;
`

export const Text = styled.p`
    font-size: 0.78rem;
    color: #4d4d4d;
    line-height: 2;
    
    &.Story-name{
        margin-left: -0.8rem;
    }

    &.Post-user-name{
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1;
    }

    &.Post-subuser-name{
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1;
    }

    &.Post-subuser-content{
        font-size: 0.7rem;
        /* line-height: 1; */
    }

    &.Likes{
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 2;

        padding: 0 1rem;
    }

    &.Username{
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 2;
        
        padding: 0 1rem;

        &:hover{
            text-decoration: underline;
        }
    }

    &.Post-content{
        padding: 0 1rem;
        font-size: 0.85rem;

    }

    &.Post-view{
        font-size: 0.8rem;
        padding: 0 1rem;
        opacity: 0.8;
    }

    &.Post-time{
        font-size: 0.7rem;
        padding: 0 1rem;
        opacity: 0.8;
        line-height: 3;
        margin-bottom: 0.5em;
    }

    &.Postbtn{
        font-size: 0.9rem;
        color: #0095F6;
        opacity: 0.4;
        padding-right: 0.5rem;
    }

    &.Switch{
        padding-right: 0.5rem;
        font-weight: 600;
        color: #0095F6;
    }

    &.Switchsub{
        font-size: 0.7rem;
        padding-right: 0.5rem;
        font-weight: 600;
        color: #00b3ee;
    }

    &.Main-span{
        font-size: 0.9rem;
        font-weight: 600;
        opacity: 0.8;
    }

    &.See{
        color: black;
    }

`

export const Stories = styled.img`
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    /* background-color: white; */
    margin-right: 1em;

    &.Story{
        position: absolute;
        top: 0.32em;
        left: 0.32em;
        /* background-color: red; */
    }

    &.Ring{
        width: 4.2em;
        height: 4.2em;
        border-radius: 50%;
        background-color: none;

        position: static;
        overflow-x: hidden;
    }

    &.Post{        
        width: 2.4em;
        height: 2.4em;
        position: absolute;
        /* top: 0.3em; */
        left: 0.3em;
        border-radius: 50%;
    }

    &.Post-ring{
        width: 3em;
        height: 3em;
        position: static;
    }

    &.Suggested{
        width: 2.5em;
        height: 2.5em;
    }
`

export const Post = styled.div`

    &.Post-wrapper{
        border-radius: 0.5em;
        border: 0.1em solid lightgray;
        margin-bottom: 1.5em;
    }

    &.Post-header{
        width: 100%;
        padding: 0.5em;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }

    &.Post-subheader{
        width: 95%;
        padding: 0.5em;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }


    &.Post-head{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-flow: row;
    }

    &.Post-user{
        position: relative;

        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
    }

    &.Post-icons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row;
        padding: 0.5em 0.5em 0.2em;
    }

    &.Icons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row;
    }

    &.Line{
        border-top: 1px solid lightgray;
    }

    &.Post-message{
        padding: 0.4em;

        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }

    &.Message{
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
    }

    &.Spans{
        width: 100%;
        padding: 0.5em;

        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
    }

    &.Footer{
        width: 100%;

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;

        p{
            margin-right: 0.5rem;
            position: relative;

            opacity: 0.5;

            span{
                position: absolute;
                bottom: 10%;
                right: -17%;
                color: black;
            }
        }
    }

`
export const PostImg = styled.img`
    min-width: 100%;
    height: 20em;
`

export const Comment = styled.input`
    outline: none;
    font-size: 0.9em;
`