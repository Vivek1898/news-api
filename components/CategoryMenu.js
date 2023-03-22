import Link from "next/link";
import { useRouter } from "next/router";


export default function CategoryMenu(){
    const router = useRouter()

    const handleClick = (category) => {
        const encodedCategory = encodeURIComponent(category);
        // router.push(`/category/${encodedCategory}`);
        router.push({
            pathname: '/category',
            query: { category: encodedCategory },
          })
          
      }
      const home = () =>{
        router.push(`/`);
      }
      

    return (
        <div className="flex flex-wrap mb-4 mt-4 text-center gap-1 p-4  ">
             <button
                onClick={() => home('technology')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>Home</span><i></i>
            </button>
            <button
             className="btn btn-primary mr-2"
               // className="btn-style "
                onClick={() => handleClick('business')}
            >
                <span>Business</span><i></i>
            </button>
            <button
                onClick={() => handleClick('entertainment')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>Entertainment</span><i></i>
            </button>
            <button
                onClick={() => handleClick('general')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>General</span><i></i>
            </button>
            <button
                onClick={() => handleClick('health')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>Health</span><i></i>
            </button>
            <button
                onClick={() => handleClick('science')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>Science</span><i></i>
            </button>
            <button
                onClick={() => handleClick('sports')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>Sports</span><i></i>
            </button>
            <button
                onClick={() => handleClick('technology')}
                 className="btn btn-primary mr-2"
                // className="mr-2 md:flex-shrink text-blue-500 font-bold bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 focus:outline-none"
            >
                <span>Technology</span><i></i>
            </button>
        </div>
    )
}