import { BearCounter, FishCounter } from '@/components/about'

const AboutPage = () => {
  return (
    <>
      <main className="flex flex-col p-4">
        <h1>This is the about page</h1>

        <BearCounter />

        <FishCounter />
      </main>
    </>
  )
}

export default AboutPage
