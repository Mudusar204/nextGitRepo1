import { color } from '@chakra-ui/react'
// import { ClassName } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button/Button'
import styles from '../styles/Home.module.css'
import Counter from '../components/counter/Counter'
import StudentsList from '../components/studentsList/StudentsList'
import Navbar from '../components/navbar/Navbar'
import StudentsList2 from '../components/studentsList2/StudentsList2'
import Todo from './todo'
import Update from '../components/update/Update'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Navbar/> */}
     <Update/>
      {/* <Counter /> */}
      {/* <StudentsList /> */}
      {/* <StudentsList2/> */}
      <Todo/>
      {/* <Button color="red" buttonTitle="1st button" data="something"/>
<br />
<Button  color="blue" buttonTitle="2nd button" extraStyle={{padding:20,color:"red"}}/>
<br />
<Button color="green" buttonTitle="3rd button"/>
<br />
<Button color="yellow" buttonTitle="4th button"/> */}
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
