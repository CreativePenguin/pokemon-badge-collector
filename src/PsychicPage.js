import { Avatar, Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useCookies } from 'react-cookie'
import BadgeImage from './images/sarpa_psychic.png'

const PsychicPage = () => {
  const [cookies, setCookie] = useCookies();
  const current = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(current.getFullYear() + 1);

  return (
    <Box sx={{width: "100%", display: "flex", justifyContent: "center"}} alignContent="center">
      {/* <Paper sx={{width: 250, display: "flex", justifyContent: "center"}} alignContent="center"> */}
      <Paper sx={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
       justifyContent: "center", display: "flex"}}>
        {/* <img src={BadgeImage} /> */}
        <img src={BadgeImage} style={{width: 200, height: 200, pb: 5}} />
      </Paper>
      <Button onClick={() => setCookie('psychicBadge', true, {expires: nextYear})}
        variant="contained"
        sx={{mt: 5}}
      >
        Accept Badge
      </Button>
    </Box>
  )
}

export default PsychicPage