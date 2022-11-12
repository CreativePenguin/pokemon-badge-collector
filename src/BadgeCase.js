import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useCookies } from 'react-cookie';
import DarkBadge from './images/sarpa_dark.png';
import DragonBadge from './images/sarpa_dragon.png';
import FairyBadge from './images/sarpa_fairy.png';
import GhostBadge from './images/sarpa_ghost.png';
import GrassBadge from './images/sarpa_grass.png';
import GroundBadge from './images/sarpa_ground.png';
import PsychicBadge from './images/sarpa_psychic.png';
import WaterBadge from './images/sarpa_water.png';
import NoBadge from "./images/sarpa_none.png";

const BadgeCase = () => {
  const [cookies, setCookie, getCookie] = useCookies();
  // console.log("cookies: ", cookies);
  const badges = {psychicBadge: PsychicBadge, darkBadge: DarkBadge, dragonBadge: DragonBadge,
    fairyBadge: FairyBadge, ghostBadge: GhostBadge, grassBadge: GrassBadge, 
    groundBadge: GroundBadge, waterBadge: WaterBadge};
  const badgeStyle = {width: 175, height: 175, pb: 5};
  return (
    <>
      <Typography variant="h4" align='center' sx={{mt: 1}}>Badge Case</Typography>
      <Grid container spacing={1} sx={{mt: 3}}>
        {Object.keys(badges).map((badgename) => {
          return (
            <Grid xs={6} md={3} sx={{display: "flex", justifyContent: "center"}}>
              {cookies[badgename] ?
                <img src={badges[badgename]} style={badgeStyle} />
              :
                <img src={NoBadge} style={badgeStyle} />}
              {/* <img src={NoBadge} style={{width: 175, height: 175, pb: 5}} /> */}
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}


export default BadgeCase
