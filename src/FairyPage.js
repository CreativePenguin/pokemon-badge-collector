import React from 'react'
import GeneralBadge from './GeneralBadge'
import FairyBadge from './images/sarpa_fairy.png'

const FairyPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'fairyBadge'} BadgeImage={FairyBadge} />
    </div>
  )
}

export default FairyPage
