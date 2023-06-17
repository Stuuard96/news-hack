import ContentLoader from 'react-content-loader'

export const CommentLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={120}
      viewBox='0 0 400 160'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='4' y='9' rx='3' ry='3' width='230' height='13' />
      <rect x='249' y='9' rx='3' ry='3' width='133' height='13' />
      <rect x='8' y='33' rx='0' ry='0' width='375' height='117' />
    </ContentLoader>
  )
}
