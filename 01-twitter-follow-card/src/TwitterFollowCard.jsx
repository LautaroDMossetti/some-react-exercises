const TwitterFollowCard = ({avatar, nickname, username}) => {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${avatar}`} alt={`${avatar}'s avatar`} />
        <div className='tw-followCard-info'>
          <strong>{nickname}</strong>
          <span className='tw-followCard-username'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-followButton'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard