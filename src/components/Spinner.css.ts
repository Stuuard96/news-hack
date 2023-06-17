import { style, keyframes } from '@vanilla-extract/css'

export const spinnerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  marginBottom: '50px'
})

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

export const spinner = style({
  border: '4px solid #f3f3f3',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  marginTop: '50px',
  width: '50px',
  height: '50px',
  animationName: spin,
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
})
