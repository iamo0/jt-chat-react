import styles from "./blog-layout.module.css";
import { Link, NavLink } from "react-router";

export default function BlogLayout() {
  return <>
    <header className={styles.pageHeader}>
      <Link to="/" className={styles.pageNav}>&larr;&nbsp;Back to&nbsp;chat</Link>
      <h1 className={styles.pageTitle}>Blog</h1>
    </header>
    <main className={styles.pageContainer}>
      <aside className={styles.pageSidebar}>
        <nav className={styles.sidebarNavigation}>
          <NavLink to="">Intro to blog</NavLink>
          <hr style={{
            border: 0,
            borderBottom: "solid 1px #999",
            width: "100%",
          }} />
          <NavLink to="">Article 1</NavLink>
          <NavLink to="">Article 2</NavLink>
          <NavLink to="">Article 3</NavLink>
        </nav>
      </aside>
      <section className={styles.pageMain}>
        <h1>Welcome to our blog</h1>
        <p>Check out all the new articles posted by out authors.</p>
      </section>
    </main>
  </>;
}