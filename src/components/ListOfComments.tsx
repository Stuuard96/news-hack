import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { listStory } from '../pages/TopStories.css'
import { CommentLoader } from './CommentLoader'
import { getRelativeTime } from '../utils/getRelativeTime'

const Comment = (props: { id: number }) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comments/${id}`, () => getItemInfo(id))
  if (isLoading) return <CommentLoader />
  const { text, by, kids, time } = data

  const relativeTime = getRelativeTime(time)

  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span>.</span>
            <span>{relativeTime}</span>
          </small>
        </summary>
        <p>{text}</p>
      </details>
      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  )
}

export const ListOfComments = (props: { ids: number[] }) => {
  const { ids } = props
  return (
    <ul className={listStory}>
      {ids.map((id: number) => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  )
}
