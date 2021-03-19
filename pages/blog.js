import Head from 'next/head'
import blogStyles from '../styles/Blog.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={blogStyles.blogHeader}>
               <h1>blog</h1>
          </div>
      </main>
    </div>
  )
}
