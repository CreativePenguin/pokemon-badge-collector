import React from 'react'
import GeneralBadge from './GeneralBadge'
import WaterBadge from './images/sarpa_water.png'

const WaterPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'waterBadge'} BadgeImage={WaterBadge} />
    </div>
  )
}

export default WaterPage
