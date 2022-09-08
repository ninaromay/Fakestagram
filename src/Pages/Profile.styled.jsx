import styled from "styled-components";

export const ProfilePost = styled.img`

    &.Profile-pic{
        width: 9.3em;
        height: 9.3em;
        /* background-color: blue; */
        
        border-radius: 50%;
        margin-top: 5rem;

        @media screen and (max-width: 600px) {
            width: 5em;
            height: 5em;
            margin-top: 3rem;
        }
    }

    &.Post-img{
        height: 18.3em;
        width: 18.3em;

        background-color: red;

        @media screen and (max-width: 600px) {
            width: 100%;
            height: 8em;
        }
    }

    &.Post-layer{
        width: 1em;
        height: 1em;
    }

    &.Tab-icon {
        width: 0.7em;
        height: 0.7em;

        margin-right: 0.5em;
    }

    &.Save-logo{
        width: 3em;
        height: 3em;
        padding: 0.5em;

        position: absolute;
        top: 0.35em;
        left: 0.35em;

    }
`

export const ProfileTab = styled.button`

    &.Edit{
        padding: 0.4em 0.5em;
        margin: 0 1.2rem 0 1rem;

        color: #4d4d4d;
        font-weight: bold;
        font-size: 0.9em;

        border-radius: 0.4em;
        border: 1px solid lightgrey;

        @media screen and (max-width: 600px){
            padding: 0.2em 0.25em;
            font-size: 0.6em;
            margin: 0 1rem 0 1em;
        }
    }

    &.Tabs{
        width: 4em;
        height: 3em;
        color: #4d4d4d;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row;

        p{
            font-size: 0.8em;
        }

    }

    `

export const ProfileWrapper = styled.div`
    /* min-height: 40vh; */
    max-width: 60em;
    
    &.ProfileWrap{   
        max-width: 60em;
        min-height: 50vh;
        
        /* background-color: red; */
        margin: 0 auto;
        padding-top: 2em;
        overflow: hidden;
    }

    &.Top{
        width: 100%;
        /* background-color: green; */
        margin-bottom: 2em;
        margin: 4em auto;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-flow: row;
        
        @media screen and (max-width: 600px){
            margin: 2em auto 0.2em;
        }
    }

    &.Bottom{
        width: 100%;
        /* background-color: blue; */
        
        border-top: 1px solid lightgrey;
    }

    &.Img-wrapper{
        width: 50%;

        margin-right: 2em;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row;

        @media screen and (max-width: 600px) {
            margin: 0;
        }
    }

    &.Text-wrapper{
        width: 100%;
        min-height: 5vh;
        /* background-color: purple; */

        margin: 0 0;
        padding: 0;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: column;
    }

    &.Text-top{
        min-height: 5vh;
        /* background-color: lime; */

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: row;
        
        @media screen and (max-width: 600px){
            p{
                font-size: 1.5em;
                line-height: 0em;
            }   
        }
    }

    &.Text-middle{
        min-height: 5vh;

        margin : 1em 0;
        /* background-color: violet; */

        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;

        p{
            margin-right:  2rem;
        }

        @media screen and (max-width: 600px){
            min-height: 1vh;
            margin: 0.2em 0;
            p{
                font-size: 0.8em;
                margin-right: 1.7em;
            }
        }
    }

    &.Text-bottom{
        min-height: 5vh;
        margin: 0;
        /* background-color: yellow; */
    }

    &.Tabs-wrapper{
        position: relative;
    }

    &.Posts-tab{
        width: 100%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 0.5rem;

        position: static;
        z-index: 2;
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &.Videos-tab{
        width: 100%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 0.5rem;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &.Saved-tab{
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    &.Tagged-tab{
        width: 100%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 0.5rem;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &.Tabs-buttons{
        width: 50%;

        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row;

        @media screen and (max-width: 600px) {
            width: 90%;
        }
    }

    &.Act{
        border-top: 2px solid black;
    }

    &.Active{
        opacity: 1;
        transform: scale(1);
        background-color: white;
        z-index: 1;
    }
    
    &.Nonactive{
        opacity: 0;
        transform: scale(0);
    }

    &.Saved-text-top{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row;

        margin-top: 2em;
    }

    &.Save-wrapper{
        width: 4em;
        height: 4em;

        border: 2px solid black;
        border-radius: 50%;

        position: relative;
    }

    &.Save{
        width: 100%;

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center
    }

    &.Footer{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row;

        @media screen and (max-width: 600px) {
            width: 100%;
            overflow: hidden;
            flex-flow: row wrap;
        }
    }
`

export const ProfileInfo = styled.p`
    color: #4d4d4d;

    &.Top{
        font-size: 1.75em;
        /* background-color: yellow; */
    }

    
    &.Title{
        font-size: 1em;
        font-weight: bold;
        margin-bottom: -1.2em;
        @media screen and (max-width: 600px){
            font-size: 0.9em;
        }
    }
    
    &.User-content{
        font-size: 1em;
        @media screen and (max-width: 600px){
            font-size: 0.85em;
        }
    }

    span {
        font-weight: bold;
    }

    &.Saved-text-only{
        font-size: 0.8em;
    }

    &.Saved-text-coll{
        font-size: 0.9em;
        color: #0095F6;
    }   

    &.Save-save{
        font-size: 2em;
        font-weight: 300;

        margin: 0.3em 0;
    }

    &.Save-see{
        width: 34%;

        font-size: 0.8em;
        line-height: 1.2;

        text-align: center;
    }

    &.Footer-text{
        font-size: 0.7em;
        text-align: center;
        margin: 0 0.8em;

        position: relative;

        &:hover{
            text-decoration: underline;
        }

        @media screen and (max-width: 600px) {
            text-align: right;
        }
    }
`