import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Avatar, Button, Paper } from '@mui/material'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
// import BadgeImage from './images/sarpa_psychic.png'

const GeneralBadge = ({cookieName, BadgeImage}) => {
  const [cookies, setCookie] = useCookies();
  const current = new Date();
  const nextYear = new Date();
  const navigate = useNavigate();
  nextYear.setFullYear(current.getFullYear() + 1);

  return (
    <Box sx={{width: "100%", display: "flex", justifyContent: "center"}} alignContent="center">
      {/* <Paper sx={{width: 250, display: "flex", justifyContent: "center"}} alignContent="center"> */}
      <Paper sx={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
       justifyContent: "center", display: "flex"}}>
        {/* <img src={BadgeImage} /> */}
        <img src={BadgeImage} style={{width: 200, height: 200, pb: 5}} />
      </Paper>
      <Button onClick={() => {
          setCookie(cookieName, true, {expires: nextYear});
          navigate("/");
        }}
        variant="contained"
        sx={{mt: 5}}
      >
        Accept Badge
      </Button>
    </Box>
  )
}

export default GeneralBadge
