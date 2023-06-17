import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'
import { listStory, listStoryItem } from './TopStories.css'
import { Spinner } from '../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function TopStories () {
  const { data, isLoading, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const page = key.split('/')[1]
      return getTopStories(Number(page), 10)
    }
  )

  const stories = data?.flat()

  return (
    <InfiniteScroll
      dataLength={stories?.length ?? 0}
      next={() => setSize((prevSize) => prevSize + 1)}
      hasMore={data?.[data.length - 1]?.length === 10}
      loader={<Spinner />}
    >
      {
        isLoading && <Spinner />
      }
      <ul className={listStory}>
        {stories?.map((id: number, index: number) => (
          <li className={listStoryItem} key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  )
}
