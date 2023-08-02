import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('pages/counter'), { ssr: false })

const Home = (props: any) => (
  <HomePage {...props} />
)

export default Home
