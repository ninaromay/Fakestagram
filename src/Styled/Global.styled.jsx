import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyled = createGlobalStyle`



 
  :root {
    --negro: #ececec;
  }

@media (prefers-reduced-motion: reduce) {
  * {
    -webkit-animation: none !important;
            animation: none !important;
    -webkit-transition: none !important;
    transition: none !important;
  }
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  vertical-align: baseline;
}

img, picture, video, iframe, figure {
  max-width: 100%;
  width: 100%;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center center;
     object-position: center center;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}

p a {
  display: inline;
}

li {
  list-style-type: none;
}

html {
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
  font-size: 1em;
  font-weight: inherit;
  font-style: inherit;
  text-decoration: none;
  color: inherit;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: "";
  content: none;
}

::-moz-selection {
  background-color: var(--negro);
  color: var(--blanco);
}
::selection {
  background-color: var(--negro);
  color: var(--blanco);
}

form, input, textarea, select, button, label {
  font-family: inherit;
  font-size: inherit;
  -webkit-hyphens: auto;
      -ms-hyphens: auto;
          hyphens: auto;
  background-color: transparent;
  color: inherit;
  display: block;
  
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

table, tr, td {
  border-collapse: collapse;
  border-spacing: 0;
}

svg {
  width: 100%;
  display: block;
  fill: currentColor;
}

body {
  min-height: 100vh;
  font-size: 100%;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto;
  color: var(--negro);
  
  line-height: 2.8em;
  
  -webkit-hyphens: auto;
      -ms-hyphens: auto;
          hyphens: auto;
  
  font-smooth: always;
  
  -webkit-font-smoothing: antialiased;
  
  -moz-osx-font-smoothing: grayscale;

  overflow-x: hidden;
}

`

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

 &.Menu-wrapper{
    width: 100%;
    
  }

  &.Logo{
    justify-content: flex-start;
  }

  &.Search{
    width: 90%;
    padding-right: 3em;
    padding-left: 2em;


  }
  
  &.Line{
    border-bottom: 1px solid rgba(63, 63, 63, 0.8);
    position: fixed;
    top: 3.6em;
    left: 0;
  }

  &.Menu-bg{
    width: 70rem;
    height: 3.6em;

    background-color: white;
    position: fixed;
    top: 0;
    z-index: 3;
  }

  &.Menu{
    max-width: 60rem;
    height: 3.6em;
    background-color: white;
  
    border-bottom: none;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 4;

    margin-left: 1em;
    padding: 0.5em;

    @media screen and (max-width: 830px){
      width: 100%;
      
    }
  }

  &.Home{
    max-width: 52rem;
    min-height: 100vh;
    /* background-color: blue; */

    justify-content: space-between;
    align-items: flex-start;

    margin: 5.2em auto ;
    
    @media screen and (max-width:1000px){
      justify-content: center;
    }

    @media screen and (max-width: 830px){
      width: 90%;
    }
  }
  
  &.Posts{
    width: 60%;
    min-height: 90vh;
    /* background-color: lightgreen; */
    padding-right: 2em;
    
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 830px){
      width: 90%;

    }
  }

  &.Suggested{
    width: 40%;
    min-height: 90vh;
    /* background-color: red; */

    @media screen and (max-width: 1000px){
      display: none;
    }

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
  }

  &.Stories{
    min-width: 65em;
    overflow-x: hidden;

    transform: ${({slide}) => slide || 'translateX(0)'};

    justify-content: flex-start;
    align-items: flex-start;

    padding: 0.8em 0.8em 0.5em;
  }

  &.Icons{
    padding-left: 0.5em;
    
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
  }

  &.Arrow{
    width: 1.3em;
    height: 1.3em;
    /* background-color: white; */
    border-radius: 50%;
    position: absolute;
    top: calc(50% -1em);
    svg{
      fill: white;
    }
  }
  
  &.Arrow-right{
    right: 2.5em;
    
  }
  
  &.Arrow-left{
    left: 0.5em;

  }

  &.New-Post-wrapper{
    width: 100%;
    height: 100vh;
    background-color: #000000a5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    /* pointer-events: none; */

  }
  &.New-Post{
    width: 40%;
    max-height: 90vh;
    background-color: white;
    border-radius: 1em;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  &.New-Post-top{
    width: 100%;
    border-bottom: 1px solid lightgrey;
    font-weight: 600;
  }
  &.New-Post-bottom{
    display: flex;
    flex-flow: column;

    font-weight: 300;
    font-size: 1.5em;
    padding: 10em;

    @media screen and (max-height: 800px){
      padding: 5em;
    }

    @media screen and (max-height: 450px){
      padding: 2em;
    }
  }
  &.New-Post-x{
    width: 100%;
    position: absolute;
    top: 1.5em;
    left: 25em;
  }

  &.Profile-tab-wrapper{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.Profile-tab{
    width: 15em;
    background-color: white;
    position: fixed;
    z-index: 4;
    top: 3.2em;
    right: 24%;
    border-radius: 0.2em;
    /* border: 1px solid lightgrey; */

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    box-shadow: 0 0 10px 5px;
  }

  &.Profile-tab-top{
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    a{
      &.Tab{
        margin-left: 3.5em;

        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  &.Tab{
    margin-left: 3.5em;

    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
  }

  &.Profile-logOut{
    border-top: 1px solid lightgrey;
  }

  &.Profile>img{
    width: 1.6em;
    height: 1.6em;
    border-radius: 50%;
  }

  &.View{
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #000000a5 ;
    top: -50%;
    left: -50%;
    z-index: 4;
    /* overflow: hidden; */
  }
`
export const Logo = styled.img`
  width: 1.3em;
  height: 1.3em;

  margin: 0.5em;

  &.Dots{
    margin-left: 1.5em;
  }



  &.Post-icons{

    &:hover{
      opacity: 0.5;
    }
  }

  

`
