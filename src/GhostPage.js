import React from 'react'
import GeneralBadge from './GeneralBadge'
import GhostBadge from './images/sarpa_ghost.png'

const GhostPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'ghostBadge'} BadgeImage={GhostBadge} />
    </div>
  )
}

export default GhostPage
