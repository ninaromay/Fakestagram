import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Global.context'
import { Logo } from '../Styled/Global.styled'
import {ProfileInfo, ProfilePost, ProfileTab, ProfileWrapper} from './Profile.styled'
import { useLocation, useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/usefetch'

export const Profile = ({saved}) => {
    const location = useLocation()

    useEffect(()=>{
        setActive(saved)
    }, [location])

    const {id} = useParams()
    let ide = id? id : 0;

    let { data, setData } = useContext(GlobalContext)
    let { submenu } = data


    let { users, setUsers } = useContext(GlobalContext)

    const [active, setActive] = useState(saved)

    let tagged = useFetch( users[ide].user , 'profile/')
    let {tagged_posts, loading} = tagged
    console.log(tagged_posts);
    console.log(loading);

    const activate = (value) => {
        return setActive(value) 
    }

    const footer = ['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Top accounts', 'Hashtags', 'Locations', 'Instagram Lite', 'Contact uploading and non-users']

    return (
        <div className="Profile">
            <ProfileWrapper className="ProfileWrap">
                <ProfileWrapper className="Top">
                    <ProfileWrapper className="Img-wrapper">
                        <ProfilePost src={users[ide].user.img} className="Profile-pic"/>
                    </ProfileWrapper>
                    <ProfileWrapper className="Text-wrapper">
                        <ProfileWrapper className="Text-top">
                            <ProfileInfo className="Top">{users[ide].user.name}</ProfileInfo>
                            <ProfileTab className="Edit" >Edit Profile</ProfileTab>
                            <Logo src={submenu[2].src}/>
                        </ProfileWrapper>
                        <ProfileWrapper className='Text-middle'>
                            <ProfileInfo><span>{users[ide].posts.length}</span> posts</ProfileInfo>
                            <ProfileInfo><span>{users[ide].followers.length}</span> followers</ProfileInfo>
                            <ProfileInfo><span>{users[ide].following.length}</span> following</ProfileInfo>
                        </ProfileWrapper>
                        <ProfileWrapper className="Text-bottom">
                            <ProfileInfo className='Title'>{users[ide].user.text}</ProfileInfo>
                            <ProfileInfo className='User-content'>{users[ide].user.content}</ProfileInfo>
                        </ProfileWrapper>
                    </ProfileWrapper>
                </ProfileWrapper>
                <ProfileWrapper className="Bottom">
                    <ProfileWrapper className="Tabs-buttons">
                        <ProfileWrapper className={`Tabs ${active === 0 && 'Act'}`} onClick={()=> activate(0) }>
                            <ProfileTab className="Tabs Posts-btn"  > 
                                <ProfilePost className='Tab-icon' src='/assets/posts.svg'/>
                                <ProfileInfo>POSTS</ProfileInfo> 
                            </ProfileTab>
                        </ProfileWrapper>
                        <ProfileWrapper className={`Tabs ${active === 1 && 'Act'}`} onClick={()=> activate(1) }>
                            <ProfileTab className="Tabs Videos-btn" > 
                                <ProfilePost className='Tab-icon' src='/assets/videos.svg'/>
                                <ProfileInfo>VIDEOS</ProfileInfo> 
                            </ProfileTab>
                        </ProfileWrapper>
                        <ProfileWrapper className={`Tabs ${active === 2 && 'Act'}`} onClick={()=> activate(2) }>
                            <ProfileTab className="Tabs Saved-btn"  > 
                                <ProfilePost className='Tab-icon' src='/assets/bookmark.svg'/>
                                <ProfileInfo>SAVED</ProfileInfo>  
                            </ProfileTab>
                        </ProfileWrapper>
                        <ProfileWrapper className={`Tabs ${active === 3 && 'Act'}`} onClick={()=> activate(3) }>
                            <ProfileTab className="Tabs Tagged-btn" > 
                                <ProfilePost className='Tab-icon' src='/assets/tagged.svg'/>
                                <ProfileInfo>TAGGED</ProfileInfo> 
                            </ProfileTab>
                        </ProfileWrapper>
                    </ProfileWrapper>
                    <ProfileWrapper className='Tabs-wrapper'>
                        <ProfileWrapper className={`Posts-tab  ${active === 0 ? 'Active' : 'Nonactive' }`} >
                            {
                                users[ide].posts.map( (post) =>
                                    <ProfileWrapper className='Post-container' key={post.id}>
                                        <ProfilePost className='Post-img' src={post.img} />
                                        <ProfilePost className='Post-layer' src='/assets/layer.svg' />
                                    </ProfileWrapper>
                                )
                            }
                        </ProfileWrapper>
                        <ProfileWrapper className={`Videos-tab ${active === 1 ? 'Active' : 'Nonactive' }`} >
                            {
                                users[ide].videos.map( (video) =>
                                    <ProfileWrapper className='Post-container' key={video.id}>
                                        <ProfilePost className='Post-img' src={video.video} />
                                        <ProfilePost className='Post-layer' src='/assets/layer.svg' />
                                    </ProfileWrapper>
                                )
                            }
                        </ProfileWrapper>
                        <ProfileWrapper className={`Saved-tab  ${active === 2 ? 'Active' : 'Nonactive' }`} >
                            <ProfileWrapper className='Saved-text-top'>
                                <ProfileInfo className='Saved-text-only'>Only you can see what you've saved</ProfileInfo>
                                <ProfileInfo className='Saved-text-coll'>+ New Collection</ProfileInfo>
                            </ProfileWrapper>
                            <ProfileWrapper className='Save'>
                                <ProfileWrapper className='Save-wrapper'>
                                    <ProfilePost className='Save-logo' src='/assets/bookmark.svg' />
                                </ProfileWrapper>
                                <ProfileInfo className='Save-save'>Save</ProfileInfo>
                                <ProfileInfo className='Save-see'>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</ProfileInfo>
                            </ProfileWrapper>
                        </ProfileWrapper>
                        <ProfileWrapper className={`Tagged-tab ${active === 3 ? 'Active' : 'Nonactive' }`} >
                            { 
                                loading &&  tagged_posts.map(tag => 
                                    <ProfileWrapper className='Post-container' key={tag.id}>
                                        <ProfilePost className='Post-img' src={tag.img} />
                                    </ProfileWrapper>    
                                )
                            }
                        </ProfileWrapper>           
                    </ProfileWrapper>
                </ProfileWrapper>
                <ProfileWrapper className='Footer'>
                    {
                        footer.map((foot, i) =>
                            <ProfileInfo className='Footer-text' key={i}>
                                {foot}
                            </ProfileInfo>
                        )
                    }
                </ProfileWrapper>
            </ProfileWrapper>
        </div>
    )
}
