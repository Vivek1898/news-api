import Head from 'next/head'

export default function Test() {
  return (
    <div>
      <Head>
        <title>Test Page</title>
      </Head>
      <h1 className="text-xl font-bold text-center font-50 mt-5">This is a test page</h1>
      <p className='text-lg font-medium text-center font-serif mt-5'>This page verify routing of the pages</p>
    </div>
  )
}
