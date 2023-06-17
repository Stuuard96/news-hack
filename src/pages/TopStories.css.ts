import { style } from '@vanilla-extract/css'

export const listStory = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  selectors: {
    '&:first-child': {
      padding: '0'
    }
  }
})

export const listStoryItem = style({
  selectors: {
    '&:last-child:not(:active)': {
      borderBottom: 'none'
    }
  },
  padding: '0.5rem',
  borderBottom: '1px solid #eee'
})
