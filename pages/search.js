import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
import NewsArticles from '../components/NewsArticles'


export default function Search({ articles }) {
    const router = useRouter()
    const { q } = router.query

    return (
        <div>
            <Head>
                <title>{q} - Search Results | Somraj's News Site</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

            </Head>

            <div className="container mx-auto">
                <div className="wavy-bg h-[100px]  text-center justify-center flex  relative">
                <img 
                    src='/mask.png'
                    alt="logo"
                    className="relative"
                />
                    <h1 className="font-bold mt-9">Search Results for "{q}" </h1>
                    <div className="wavy" />
                    <div className="wavy" />
                    <div className="wavy" />
                </div>
                <p className="border-b-8 "></p>
                
                <NewsArticles articles={articles} />
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    try {
        const { q } = query
        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(
            q
          )}&apiKey=faca45ac98004d0b9cbd2efc7f227b27&pageSize=50`
        )

        return {
            props: {
                articles: data.articles,
            },
        }
    } catch (error) {
        console.error(error)

        return {
            props: {
                articles: null,
            },
        }
    }
}