import React from 'react'
import PsychicBadge from './images/sarpa_psychic.png'
import GeneralBadge from './GeneralBadge'

const PsychicPage = () => {

  return (
    <div>
      <GeneralBadge cookieName={'psychicBadge'} BadgeImage={PsychicBadge} />
    </div>
  )
}

export default PsychicPage
