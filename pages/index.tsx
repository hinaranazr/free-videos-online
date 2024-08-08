import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () =&gt; {
  return (
    <div classname="{styles.container}">
      <head>
        <title>Facebook Vercel Redirect Website</title>
        <meta content="Explore the Amazing &amp; weird Nature in and Around the World" name="description"></meta>
        <link href="/favicon.ico" rel="icon"></link>
      </head>

      <main classname="{styles.main}">
        <h1 classname="{styles.title}">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p classname="{styles.description}">
          Get started by editing{' '}
          <code classname="{styles.code}">pages/index.tsx</code>
        </p>

        <div classname="{styles.grid}">
          <a classname="{styles.card}" href="https://nextjs.org/docs">
            <h2>Documentation →</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a classname="{styles.card}" href="https://nextjs.org/learn">
            <h2>Learn →</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a classname="{styles.card}" href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples →</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a classname="{styles.card}" href="https://vercel.com/new?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app">
            <h2>Deploy →</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer classname="{styles.footer}">
        <a href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app" rel="noopener noreferrer" target="_blank">
          Powered by{' '}
          <span classname="{styles.logo}">
            <image alt="Vercel Logo" height="{16}" src="/vercel.svg" width="{72}">
          </image></span>
        </a>
      </footer>
    </div>
  )
}

export default Home
