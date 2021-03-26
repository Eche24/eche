import Head from 'next/head'
// import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>eche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2 class="text-2xl font-semibold my-12 tracking-wider uppercase text-blue-600 text-left">Lastest from our blog</h2>
        
        <h3 class="text-xl font-bold mb-4 capitalize text-left">The Importance of Learning CSS</h3>
        <p class="text-sm font-semibold tracking-wider leading-6 font-serif1 w-1/2">
        Your Markdown files are either local (in the file system) or remote (stored in a CMS). 
        Local content is a great choice when you want to allow collaboration (e.g. edit this page on GitHub link) with a large number of people. 
        They also make more sense for small, personal projects. 
        Remote content might also be a better choice if non-developers need to edit content.
        </p>
        <div class="text-sm font-bold mt-4">
          Read more
        </div>
      </section>
    </div>
  )
}
