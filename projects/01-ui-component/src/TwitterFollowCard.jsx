import { useState } from "react"

function TwitterFollowCard( {userName, name, isFollowing, formatUserName} ) {

    const imgSrc = `https://unavatar.io/github/${userName}?fallback=https://source.boringavatars.com/marble/120/1337_user?colors=264653r,2a9d8f,e9c46a,f4a261,e76f51`
    // const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar' 
            alt="Avatar" 
            src={imgSrc} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside className='tw-followCard-aside'>
            <button className='tw-followCard-button'>{}</button>
        </aside>
    </article>
    )
}
export default TwitterFollowCard