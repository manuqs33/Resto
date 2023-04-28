
import { Hero } from '../components/Hero'
import { Banner } from '../components/Banner'
import { RecommendendDishes } from '../components/RecommendendDishes'
import { MessageContainer } from '../components/MessageContainer'

export function StartPage() {
  return (
    <>
    <Hero />
    <Banner />
    <RecommendendDishes />
    <MessageContainer />
    </>
  )
}