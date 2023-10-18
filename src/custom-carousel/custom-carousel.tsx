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
  fontFamily: string
}

export const CustomCarousel: React.FC<Props> = ({
  carouselItems,
  setSelectedItem, fontSize, textColor, backgroundColor, fontFamily
}) => {
  return (
    <Carousel autoPlay={false}
        navButtonsAlwaysVisible={true}
        strictIndexing={true}
        cycleNavigation={false}
        navButtonsProps={{ style: navButtonStyle }}
        onChange={(now: number | undefined) => { setSelectedItem(carouselItems[now!].content) }}
        sx={carouselStyle} indicators={false}>
        
    </Carousel>
  )
}

function Item (props: any): JSX.Element {
  return (
    <Paper style={paperStyle}>
        <p style={titleStyle(props.fontSize, props.textColor, props.fontFamily)}>{props.item.title}</p>
    </Paper>
  )
}

function titleStyle (fontSize: string, textColor: string, fontFamily: string): React.CSSProperties {
  return {
    fontFamily,
    fontSize,
    color: textColor
  }
}

const paperStyle: React.CSSProperties = {
    borderRadius: '4px',
    background: '#2D3339',
    height: '30px',
    paddingTop: '3px'
}

const carouselStyle: React.CSSProperties = {
    height: '30px',
    width: '220px',
    borderRadius: '4px',
    textAlign: 'center',
    background: '#2D3339'
}

const navButtonStyle: React.CSSProperties = {
    background: 'transparent',
    color: '#9199A1',
    margin: '0px'
}
