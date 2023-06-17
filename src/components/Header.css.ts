import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  paddingBottom: '1.2rem',
  borderBottom: '1px solid #eee'
})

export const link = style({
  color: '#374151',
  fontSize: '1.8rem',
  margin: 0,
  textDecoration: 'none'
})
