
import styles from './page.module.css'

export default function Home() {
  return (
    <main style={{background:process.env.BG}} className={styles.main}>
      <div>
        <h1>{process.env.DB_USER}</h1>
        <h2> {process.env.HELLO_MESSAGE}</h2>
      </div>

    </main>
  )
}
