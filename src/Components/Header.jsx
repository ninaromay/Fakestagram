import { useContext, useState } from "react"
import { GlobalContext } from "../Global.context"
import { CardLi, CardUl, LogoI, SearchBar, SearchI } from "./Header.Styled";
import { Wrapper, Logo } from "../Styled/Global.styled";
import { NavLink } from 'react-router-dom'


const Header = () => {
    let { data , setData }         = useContext(GlobalContext);
    let [ onSearch , setOnSearch ] = useState(false)
    let { menu } = data 
    

    const [active, setActive] = useState(0);
    const activar = (value) =>{
        setActive(value);
    }


    const searching = () => {
        console.log(onSearch)
        setOnSearch( !onSearch )
    }

    return (
        <div className="Header">
            <Wrapper>
                    <Wrapper className="Menu-bg"></Wrapper>
                <Wrapper className="Menu">
                    <Wrapper className="Line"></Wrapper>
                    <Wrapper className="Menu-wrapper Logo">
                        <LogoI src={menu.logo} />
                    </Wrapper>
                    <Wrapper className="Menu-wrapper Search">
                        <SearchBar
                            className={`${onSearch  && 'Searching'}`} 
                            onFocus={searching}
                            onBlur={searching}>
                            <LogoI 
                                src={menu.search_bar} 
                                className={ `Search ${ onSearch && `Search-searching` }` } 
                                />
                            <SearchI
                                type='text' 
                                placeholder='Search'></SearchI>
                        </SearchBar>
                    </Wrapper>
                    <Wrapper className="Menu-wrapper">
                        <Wrapper className="Menu-wrapper-ul">
                        <CardUl className="Menu-ul">
                        {
                            menu.iconos.map(card => 
                                <CardLi key={card.id} 
                                onClick={() => activar(card.id)}
                                className={`${active === card.id ? 'Active' : 'NonActive'} `}>
                                    { card.id !== 4 && <NavLink to={card.alt}>
                                            <Logo src={card.src} className={`${(card.id) == 5 && 'Profile'}`} />
                                        </NavLink>
                                    }
                                    { card.id === 4 && <button>
                                            <Logo src={card.src} />
                                        </button>
                                    }
                                </CardLi>   
                            )
                        }
                        </CardUl>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </div>
    )
}

export default Header