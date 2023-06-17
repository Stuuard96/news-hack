import { style } from '@vanilla-extract/css'

export const story = style({
  color: '#374151'
})

export const storyTitle = style({
  textDecoration: 'none',
  color: '#111',
  fontSize: 'clamp(1.4rem, 2vw, 1.8rem)'
})

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  columnGap: '8px',
  marginBottom: '.4rem',
  lineHeight: '24px'
})

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  columnGap: '8px',
  lineHeight: '24px',
  fontSize: '1.2rem'
})

export const storySubLink = style({
  textDecoration: 'none',
  color: '#888',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const storyLink = style({
  textDecoration: 'none',
  color: '#888',
  fontSize: 'clamp(1.3rem, 2vw, 1.5rem)',
  ':hover': {
    textDecoration: 'underline'
  }

})
