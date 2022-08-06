import { useState } from "react"

export const Iconos = ({algo, active}) =>{
    const  fill = active ? '#262626' : 'none'
    const refill = active ? '#ffffff' : '#262626'

    return (
        <>
            { algo === 'home' && 
                <svg aria-label="Home" className="_ab6-" color="#262626" fill={refill} height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill={fill} stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
               </svg>
            }
            { algo === 'messages' && 
                <svg aria-label="Direct" className="_ab6-" color="#262626" fill={refill} height="24" role="img" viewBox="0 0 24 24" width="24">
                    <line fill={fill} stroke={refill} strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                    <polygon fill={fill} points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                </svg>
            }
            {
                algo === 'explore' && 
                <svg aria-label="Find people" className="_ab6-" color="#262626" fill={refill} height="24" role="img" viewBox="0 0 24 24" width="24">
                    <polygon fill={fill} points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke={refill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                    <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                    <circle cx="12.001" cy="12.005" fill={fill} r="10.5" stroke={refill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                </svg>
            }
            {
                algo === 'notifications' && 
                <svg aria-label="Activity Feed" className="_ab6-" color="#262626" fill={fill} height="24" role="img" viewBox="0 0 24 24" width="24">
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                </svg>
            }
            {
                algo === 'post' && 
                <svg aria-label="New post" className="_ab6-" color="#262626" fill={refill} height="24" role="img" viewBox="0 0 24 24" width="24">
                    <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill={fill} stroke={refill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <line fill={fill} stroke={refill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                    <line fill={fill} stroke={refill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                </svg>
            }
            {
                algo === 'arrow_right' && 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"/></svg>
            }
            {
                algo === 'arrow_left' && 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"/></svg>
            }
            {
                algo === 'x' && 
                <svg aria-label="Close" className="fg7vo5n6 lrzqjn8y" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 48 48" width="18">            
                    <path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd"></path>
                </svg>
            }
        </>
    )
}