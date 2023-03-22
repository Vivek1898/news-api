import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
import NewsArticles from '../components/NewsArticles'
import SearchBar from '../components/SearchBar'
import CategoryMenu from '../components/CategoryMenu'
export default function Category({ articles }) {
  const router = useRouter()
  const { category } = router.query

  return (
    <div>
      <Head>
        <title>{category} News | News Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

      </Head>
      <div className="wavy-bg h-[100px]  text-center justify-center flex  relative" >
       
       <h1 className="font-bold mt-9">Top News Articles</h1>
   
     </div>
<div className='text-center'>
<SearchBar />
</div>
      
        <CategoryMenu />

      <div className="container mx-auto">
        <div className="wavy-bg h-[100px]  text-center justify-center flex  relative">
       
        <h1 className="font-bold mt-9">{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
        </div>
        
        <p className="border-b-8 "></p>
        
        <NewsArticles articles={articles} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const { category } = context.query;

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=faca45ac98004d0b9cbd2efc7f227b27&pageSize=50`
    );

    return {
      props: {
        articles: data.articles,
        category,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        articles: [],
        category: '',
      },
    };
  }
}


// export async function getServerSideProps({ category }) {
//   try {
    
   
//     const { data } = await axios.get(
//       `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f0d705cdde7f4416a9c6aaa70d662f50`
//     )

//     return {
//       props: {
//         articles: data.articles,
//         category,
//       },
//     }
//   } catch (error) {
//     console.error(error)

//     return {
//       props: {
//         articles: [],
//         category: '',
//       },
//     }
//   }
// }

