import React from 'react'
import GeneralBadge from './GeneralBadge'
import DragonBadge from './images/sarpa_dragon.png'

const DragonPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'dragonBadge'} BadgeImage={DragonBadge} />
    </div>
  )
}

export default DragonPage
