import { useState } from "react"
import { Comment } from "../Pages/Home.styled";
import { Iconos } from "./Iconos"
import { ImgPost, PPost, ViewWrapper } from "./PostView.styled"

export const PostView = (postv) =>{
    
    console.log(postv);
    let {post, user} = postv
    console.log(post);
    console.log(user);


    return(
        <div className="PostView">
            <ViewWrapper className="Post_View">
                    <ViewWrapper className="Post_View-img">
                        <ImgPost src={post.img} className="Img_post" alt='poop' />
                    </ViewWrapper>
                    <ViewWrapper className="Post_View-comments">
                        <ViewWrapper className="Post_View-top">
                                <ImgPost src={user.img} className="Profile_img"/>
                                <ViewWrapper className="Poster_dot"></ViewWrapper>
                                <ViewWrapper className="Poster_text">
                                    <PPost >{user.name}</PPost>
                                    <PPost className='Poster_following'>Following</PPost>
                                </ViewWrapper>
                                <ImgPost src={'/assets/dots.svg'} className="Poster-dots"/>
                        </ViewWrapper>
                        <ViewWrapper className="Post_View-middle">
                            <ViewWrapper className="Post_description">
                                <ImgPost src={user.img} className="Profile_img"/>
                                <ViewWrapper className="Post_description-text">
                                    <PPost className='Comment-name'>{user.name}
                                    <span>{post.description}</span></PPost>
                                </ViewWrapper>
                            </ViewWrapper>
                                <PPost className='Time'>SOME TIME AGO</PPost>
                            
                        </ViewWrapper>
                        {post.comments.map(comment => 
                        
                          <ViewWrapper className="Post_View-middle mid" key={comment.id}>
                              <ViewWrapper className="Post_description">
                                  <ImgPost src={comment.img} className="Profile_img"/>
                                  <ViewWrapper className="Post_description-text">
                                      <PPost className='Comment-name'>{comment.name}
                                      <span>{comment.text}</span></PPost>
                                  </ViewWrapper>
                              </ViewWrapper>
                                  <PPost className='Time'>SOME TIME AGO</PPost>
                              
                          </ViewWrapper>
                        
                        )}
                        <ViewWrapper className="Post_View-bottom">
                            <ViewWrapper className="Icons"></ViewWrapper>
                            <ViewWrapper className="Likes">
                                <PPost className="Likes">{post.likes} likes</PPost>
                                <PPost className='Post-time'>POSTED SOME TIME AGO</PPost>
                            </ViewWrapper>
                            <ViewWrapper className='Line'></ViewWrapper>
                            <ViewWrapper className="Comment">   
                                <ViewWrapper className='Message'>
                                    <ImgPost className='Emoji' src={'/assets/emoji.svg'} />
                                    <Comment type='text' placeholder='Add a comment...'></Comment>
                                </ViewWrapper>
                                <PPost className='Postbtn'>Post</PPost>
                            </ViewWrapper>
                        </ViewWrapper>
                    </ViewWrapper>
            </ViewWrapper>
            <ViewWrapper className="Post_x">
                <Iconos algo={'x'} />
            </ViewWrapper>
        </div>
    )
}