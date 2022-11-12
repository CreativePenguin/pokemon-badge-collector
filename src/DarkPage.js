import React from 'react'
import GeneralBadge from './GeneralBadge'
import DarkBadge from "./images/sarpa_dark.png"

const DarkPage = () => {
  return (
    <div>
      <GeneralBadge cookieName={'darkBadge'} BadgeImage={DarkBadge} />
    </div>
  )
}

export default DarkPage
