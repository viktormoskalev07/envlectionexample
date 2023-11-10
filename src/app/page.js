
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>{process.env.DB_USER}</h1>
      <h2> hello</h2>
    </main>
  )
}
