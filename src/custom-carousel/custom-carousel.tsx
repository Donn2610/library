import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

interface Props {
  carouselItems: Array<{ title: string, content: string }>
  // eslint-disable-next-line @typescript-eslint/ban-types
  setSelectedItem: Function
  fontSize: string
  textColor: string
  backgroundColor: string
}

export const CustomCarousel: React.FC<Props> = ({
  carouselItems,
  setSelectedItem, fontSize, textColor, backgroundColor
}) => {
  return (
    <div>Hello</div>
  )
}

function Item (props: any): JSX.Element {
  return (
    <Paper style={paperStyle(props.backgroundColor)}>
        <p style={titleStyle(props.fontSize, props.textColor)}>{props.item.title}</p>
    </Paper>
  )
}

function titleStyle (fontSize: string, textColor: string): React.CSSProperties {
  return {
    fontFamily: 'IBM',
    fontSize,
    color: textColor
  }
}

function paperStyle (backgroundColor: string): React.CSSProperties {
  return {
    borderRadius: '4px',
    background: backgroundColor,
    height: '30px',
    paddingTop: '3px'
  }
}

function carouselStyle (backgroundColor: string): React.CSSProperties {
  return {
    height: '30px',
    width: '220px',
    borderRadius: '4px',
    textAlign: 'center',
    background: backgroundColor
  }
}

function navButtonStyle (textColor: string): React.CSSProperties {
  return {
    background: 'transparent',
    color: textColor,
    margin: '0px'
  }
}
