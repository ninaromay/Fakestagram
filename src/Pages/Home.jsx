import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { CardLi, CardUl } from "../Components/Header.Styled";
import { Iconos } from "../Components/Iconos";
import { PostView } from "../Components/PostView";
import { GlobalContext } from "../Global.context";
import { Logo, Wrapper } from "../Styled/Global.styled"
import { Post, PostImg, Stories, Text, Comment } from "./Home.styled"

export const Home = () => {

    let {data, setData } = useContext(GlobalContext);
    let { menu, home, footer } = data 
    let { users, setUsers } = useContext(GlobalContext);
    let {suggested, setSuggested } = useContext(GlobalContext);

    const setUnsearch = () => setData({...data, menu : { ...menu, onSearch : false}})
    
    const shortName = (value) => {return value.slice(0, 9) + '...'}
    const randomNum = (value) => {return Math.floor(Math.random() * value)}

    const [foto, setFoto] = useState(0)

    const next = () =>{
        foto < 6 ? setFoto(foto + 1) : foto
        console.log(foto);
    }
    const prev = () => {
        foto > 0 ? setFoto(foto - 1) : 0
    }

    const slide = () => {
        return `translateX(-${100/12.5 * foto}%)`
    }

    const [ view, setView ] = useState(false)
    const [ pid, setPid] = useState(-1)
    const [ uid, setUid] = useState(-1)
    const viewable = (id, uid) => {
        setView(true)
        setPid(id)
        setUid(uid)
        console.log(view);
        console.log(id);
        console.log(uid);
    }

    const close = () => {
        console.log('close');
        setView(false)
    }


    return (
        <div className="Home" >
            <Wrapper className="Home">
                <Wrapper className="Posts">
                    <CardUl className="Stories">
                      <Wrapper className="Stories" slide={slide()}>
                          {
                            users.map( (use) => 
                                use.user.id != 1 && <CardLi className='Story-wrapper' key={use.user.id}>
                                    <NavLink to={'/profile/'+ use.user.id}>
                                        <Stories  src='/assets/ring.png'  className="Ring"  />
                                        <Stories  src={use.user.img} className="Story" />
                                    </NavLink>
                                    <Text className="Story-name">{ use.user.name.length < 10 ? use.user.name : shortName(use.user.name)}</Text>
                                </CardLi>
                            )
                          }
                      </Wrapper>
                      {foto < 6 && <Wrapper className='Arrow Arrow-right' onClick={()=> next()}>
                        <Iconos algo='arrow_right' />
                      </Wrapper>}
                      {foto > 0 && <Wrapper className='Arrow Arrow-left' onClick={()=> prev()}>
                        <Iconos algo='arrow_left' />
                      </Wrapper>}
                    </CardUl>
                    <Post className="Post">
                    {users.map( (use , i) =>
                         use.posts.map( (post , j)=>
                            use.posts.length > 0 && <Post key={post.id} className='Post-wrapper'>
                                <Post className='Post-header'>
                                <Post className='Post-user'>
                                    <Stories  src='/assets/ring.png'  className="Post-ring"  />
                                    <Stories src={use.user.img}  className="Post"/>
                                    <Post className='Post-text'>
                                        <Text className="Post-user-name">{use.user.name}</Text>
                                        <Text className="Post-user-content">{use.user.text}</Text>
                                    </Post >
                                </Post>
                                <Post className='Post-dots'>
                                    <Logo src={home.dots} />
                                </Post>
                                </Post>
                                <PostImg  src={use.posts[j].img} onClick={() => viewable(post.id, i)}/>
                                <Post className='Post-icons'>
                                <Post className='Icons'>
                                    {home.icons.map((icon) => 
                                    <Logo src={icon.src} key={icon.id} className='Post-icons'/>
                                    )}
                                </Post>
                                <Logo src={home.bookmark} className='Post-icons'/>
                                </Post>
                                <Post className='Post-comments' >
                                    <Text className="Likes">{use.posts[j].likes} likes</Text>
                                    <Text className='Username'>{use.user.name}</Text>
                                    <Text className='Post-content'>{use.posts[j].description}</Text>
                                    <Text className='Post-view' >View all {use.posts[j].comments.length} {use.posts[j].comments.length > 1 ? 'comments' : 'comment'}</Text>
                                    <Text className='Post-time'>SOME TIME AGO</Text>
                                </Post>
                                <Post className='Line'></Post>
                                <Post className='Post-message'>
                                    <Post className='Message'>
                                        <Logo className='Emoji' src={home.emoji} />
                                        <Comment type='text' placeholder='Add a comment...'></Comment>
                                    </Post>
                                    <Text className='Postbtn'>Post</Text>
                                </Post>
                            </Post>
                        )
                    )}
                        
                    </Post>
                </Wrapper>
                <Wrapper className="Suggested">
                    <Post className='Post-header'>
                        <Post className='Post-head'>
                            <NavLink to={'/profile/0'}>
                            <Stories src={users[0].user.img} />
                            </NavLink>
                            <Post className='Post-text-sug'>
                                <Text className="Post-user-name">{users[0].user.name}</Text>
                                <Text className="Post-user-content">{users[0].user.text}</Text>
                            </Post>
                        </Post>
                        <Text className='Switch'>Switch</Text>
                    </Post>
                    <Post className='Spans'> 
                        <Text className='Main-span'>Suggestions for you</Text>
                        <Text className='See'>See All</Text> 
                    </Post>
                    {
                        suggested.map(use => 
                          <Post key={use.id} className='Post-subheader'>
                              <Post className='Post-head'>
                                  <Stories className='Suggested' src={use.img} />
                                  <Post className='Post-text-sug'>
                                      <Text className="Post-subuser-name">{use.name}</Text>
                                      <Text className="Post-subuser-content">{use.status}</Text>
                                  </Post>
                              </Post>
                              <Text className='Switchsub'>Follow</Text>
                          </Post>
                        )
                    }
                    <Post className='Footer'>
                        {footer.map((use, i) => 
                            <Text key={i}>{use} {i != 8 && <span>.</span>}</Text>  
                        )}
                    </Post>
                </Wrapper>
            </Wrapper>
            {
                view && <Wrapper className='View' onClick={()=> close}>
                    <PostView post={users[uid].posts[pid]} view={view} />
                </Wrapper>
            }
        </div>
    )
}
