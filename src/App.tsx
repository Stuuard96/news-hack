import { Suspense, lazy } from 'react'
import { Header } from './components/Header'
import { Route } from 'wouter'

const TopStories = lazy(() => import('./pages/TopStories'))
const Details = lazy(() => import('./pages/Details'))

export default function App () {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}> {/* 'Loading...' */}
          <Route path='/' component={TopStories} />
          <Route path='/article/:id' component={Details} />
        </Suspense>
      </main>
    </>
  )
}
