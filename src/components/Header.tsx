import { header, link } from './Header.css'

export function Header () {
  return (
    <nav className={header}>
      <img className='' src='/logo.png' alt='Logo de hacker news' width={20} />
      <a className={link} href='/'>Hacker News</a>
    </nav>
  )
}
