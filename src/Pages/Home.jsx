import { useContext, useState } from "react";
import styled from "styled-components"
import { CardLi, CardUl } from "../Components/Header.Styled";
import { GlobalContext } from "../Global.context";
import { Logo, Wrapper } from "../Styled/Global.styled"
import { Post, PostImg, Stories, Text, Comment } from "./Home.styled"

export const Home = () => {

    let {data, setData } = useContext(GlobalContext);
    let { menu, home, footer } = data 
    // let { onSearch } = menu

    let { users, setUsers } = useContext(GlobalContext);
    // console.log(users);
    // let {data, users, suggested} = datos
    // let {} = home
    let {suggested, setSuggested } = useContext(GlobalContext);

    const setUnsearch = () => setData({...data, menu : { ...menu, onSearch : false}})
    
    const shortName = (value) => {return value.slice(0, 9) + '...'}

    const randomNum = (value) => {return Math.floor(Math.random() * value)}

    return (
        <div className="Home" >
            <Wrapper className="Home">
                <Wrapper className="Posts">
                    <CardUl className="Stories">
                      <Wrapper className="Stories">
                          {
                          users.map( (use) => 
                              use.user.id > 0 && <CardLi className='Story-wrapper' key={use.user.id}>
                                <a href={use.user.url}>
                                  <Stories  src='/assets/ring.png'  className="Ring"  />
                                  <Stories  src={use.user.img} className="Story" />
                                </a>
                                <Text className="Story-name">{ use.user.name.length < 10 ? use.user.name : shortName(use.user.name)}</Text>
                              </CardLi>
                          )
                          }
                      </Wrapper>
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
                                <PostImg  src={use.posts[j].img} />
                                <Post className='Post-icons'>
                                <Post className='Icons'>
                                    {home.icons.map((icon) => 
                                    <Logo src={icon.src} key={icon.id} className='Post-icons'/>
                                    )}
                                </Post>
                                <Logo src={home.bookmark} className='Post-icons'/>
                                </Post>
                                <Post className='Post-comments'>
                                    <Text className="Likes">{use.posts[j].likes} likes</Text>
                                    <Text className='Username'>{use.user.name}</Text>
                                    <Text className='Post-content'>{use.posts[j].description}</Text>
                                    <Text className='Post-view'>View all {use.posts[j].comments.length} {use.posts[j].comments.length > 1 ? 'comments' : 'comment'}</Text>
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
                            <Stories src={users[0].user.img} />
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
        </div>
    )
}
