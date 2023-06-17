export const getTopStories = async (page: number, limit: number) => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const data = await response.json()
  // page starts at 1, but slice starts at 0
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const ids = data.slice(startIndex, endIndex)
  return ids
}

export const getItemInfo = async (id: number) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const data = await response.json()
  return data
}
