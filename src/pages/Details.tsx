import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { ListOfComments } from '../components/ListOfComments'
import { useEffect } from 'react'

export default function Details (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(Number(id)))
  const commentsIds = data?.kids?.slice(0, 10) ?? []
  const title: string = data?.title ?? 'Details'

  useEffect(() => {
    document.title = `Hacker News - ${title}`
  }, [title])

  return (
    <div>
      {isLoading
        ? <p>Loading...</p>
        : <ListOfComments ids={commentsIds} />}
    </div>
  )
}
