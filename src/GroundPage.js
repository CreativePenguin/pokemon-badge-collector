import React from 'react'
import GeneralBadge from './GeneralBadge'
import GroundBadge from './images/sarpa_ground.png'

const GroundPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'groundBadge'} BadgeImage={GroundBadge} />
    </div>
  )
}

export default GroundPage
