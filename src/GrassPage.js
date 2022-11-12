import React from 'react'
import GeneralBadge from './GeneralBadge'
import GrassBadge from './images/sarpa_grass.png'

const GrassPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'grassBadge'} BadgeImage={GrassBadge} />
    </div>
  )
}

export default GrassPage
