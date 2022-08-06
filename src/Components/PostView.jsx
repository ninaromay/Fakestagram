import { useState } from "react"
import { Iconos } from "./Iconos"
import { ImgPost, PPost, ViewWrapper } from "./PostView.styled"

export const PostView = (postv) =>{

    let { user, post } = postv
    
    // let {id, name, img} = user

    return(
        <div className="PostView">
            <ViewWrapper className="Post_View_wrapper" >
                <ViewWrapper className="Post_View">
                    <ViewWrapper className="Post_View-img">
                        <ImgPost src={''} className="Img_post" alt='poop' />
                    </ViewWrapper>
                    <ViewWrapper className="Post_View-comments">
                        <ViewWrapper className="Post_View-top">
                                <ImgPost src={''} className="Profile_img"/>
                                <ViewWrapper className="Poster_dot"></ViewWrapper>
                                <ViewWrapper className="Poster_text">
                                    <PPost>userName</PPost>
                                    <PPost className='Poster_following'>Following</PPost>
                                </ViewWrapper>
                                <ImgPost src={''} className="Poster-dots"/>
                        </ViewWrapper>
                        <ViewWrapper className="Post_View-middle">
                            <ViewWrapper className="Post_description">
                                <ImgPost src={''} className="Profile_img"/>
                                <ViewWrapper className="Post_description-text">
                                    <PPost>userName</PPost>
                                    <PPost>Post description</PPost>
                                </ViewWrapper>
                            </ViewWrapper>
                                <PPost className='Time'>SOME TIME AGO</PPost>
                            
                        </ViewWrapper>
                        {<ViewWrapper className="Post_View-middle mid">
                            <ViewWrapper className="Post_description">
                                <ImgPost src={''} className="Profile_img"/>
                                <ViewWrapper className="Post_description-text">
                                    <PPost>otherUser</PPost>
                                    <PPost>Comment</PPost>
                                </ViewWrapper>
                            </ViewWrapper>
                                <PPost className='Time'>SOME TIME AGO</PPost>
                            
                        </ViewWrapper>}
                        <ViewWrapper className="Post_View-bottom">
                            
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