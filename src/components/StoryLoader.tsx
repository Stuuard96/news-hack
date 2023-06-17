import ContentLoader from 'react-content-loader'

export const StoryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={50}
      viewBox='0 0 400 50'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='29' y='9' rx='3' ry='3' width='230' height='13' />
      <circle cx='12' cy='15' r='8' />
      <rect x='273' y='10' rx='3' ry='3' width='151' height='13' />
      <rect x='6' y='34' rx='3' ry='3' width='83' height='10' />
      <rect x='102' y='35' rx='3' ry='3' width='83' height='10' />
      <rect x='202' y='34' rx='3' ry='3' width='83' height='10' />
    </ContentLoader>
  )
}
