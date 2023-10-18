import React from 'react'
import { Switch, type SxProps, type Theme } from '@mui/material'

interface SwitchButtonProps {
  onToggle: (checked: boolean) => void
  checked: boolean
  bgTrackChecked: string
  bgTrackUnChecked: string
  bgThumbCheckedBefore: string
  bgThumbUnCheckedBefore: string
  bgThumbCheckedAfter: string
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({ onToggle, checked, bgTrackChecked,bgTrackUnChecked, bgThumbCheckedBefore, bgThumbUnCheckedBefore, bgThumbCheckedAfter  }) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newCheckedState = event.target.checked
    onToggle(newCheckedState)
  }

  return (
    <Switch
      sx={switchStyle(checked, bgTrackChecked, bgTrackUnChecked, bgThumbCheckedBefore, bgThumbUnCheckedBefore, bgThumbCheckedAfter)}
      style={{ background: 'transparent' }}
      checked={checked}
      onChange={handleToggle}
    />
  )
}

function switchStyle (checked: boolean, bgTrackChecked: string, bgTrackUnChecked: string, bgThumbCheckedBefore: string, bgThumbUnCheckedBefore: string,bgThumbCheckedAfter: string): SxProps<Theme> {
  return {
    '& .MuiSwitch-track': {
      background: checked ? bgTrackChecked : bgTrackUnChecked
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: checked ? bgThumbCheckedBefore : bgThumbUnCheckedBefore,
      '&:after': {
        // eslint-disable-next-line max-len
        backgroundImage: checked ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 24 24"><path fill="${encodeURIComponent(bgThumbCheckedAfter)}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')` : ''
      }
    }
  }
}
