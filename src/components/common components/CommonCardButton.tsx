import { Button } from '@mui/material'
import React from 'react'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom';

interface Button_title {
    button_text : string;
    slug:string;
    width : number
}


const Common_card_button = ({button_text,slug, width}:Button_title) => {

const navigate = useNavigate();

const buttonWidth = width == 6 ? "100%" : "262px"

  return (
    <Button
    onClick={()=>navigate(`/deals/${slug}`)}
    sx={{
      height: { xl: "40px" },
      width: { xl: buttonWidth },
      bgcolor: theme.palette.primary.main,
      mt: "1.25rem",
      color:theme.palette.common.white,
      fontSize:theme.typography.subtitle2.xl,
      "&:hover" : {
        background: theme.gradient_color.button_hover_color,
        color:theme.palette.common.black
      }
    }}
  >
   {button_text}
  </Button>
  )
}

export default Common_card_button
