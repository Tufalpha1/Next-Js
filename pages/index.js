
import ArticleList from '../components/ArticleList'
import { server } from '../config'


export default function Home({articles}) {
  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  )
}
// Using local api data
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
// Using typicode api data
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }