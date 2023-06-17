import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { Link } from 'wouter'
import { storyLink, storySubLink, story, storyFooter, storyHeader, storyTitle } from './Story.css'
import { StoryLoader } from './StoryLoader'
import { getRelativeTime } from '../utils/getRelativeTime'

export const Story = (props: { id: number, index: number }) => {
  const { id, index } = props
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(id))

  if (isLoading) return <StoryLoader />

  const { title, url, score, by, kids, time } = data

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}

  const relativeTime = getRelativeTime(time)

  // TODO: Create a relativeTime function
  return (
    <article className={story}>
      <header className={storyHeader}>
        <a className={storyTitle} href={url} target='_blank' rel='noreferrer'>
          <small>{index + 1} .</small>
          {title}
        </a>
        <a className={storyLink} href={url} target='_blank' rel='noreferrer'>
          ({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storySubLink} href={`/article/${id}`}>by {by}</Link>
        <Link className={storySubLink} href={`/article/${id}`}>{relativeTime}</Link>
        <Link className={storySubLink} href={`/article/${id}`}>{kids?.length ?? 0} comments</Link>
      </footer>
    </article>
  )
}
