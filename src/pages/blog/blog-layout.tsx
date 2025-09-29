import "./blog-layout.css";
import styles from "./blog-layout.module.css";

import { Link, NavLink, Outlet } from "react-router";

const getActiveClassName = ({ isActive } : {
  isActive: boolean,
  isPending: boolean,
}) => isActive ? "page-link-active" : ``;

export default function BlogLayout() {
  return <>
    <header className={styles.pageHeader}>
      <Link to="/" className={styles.pageNav}>&larr;&nbsp;Back to&nbsp;chat</Link>
      <h1 className={styles.pageTitle}>Blog</h1>
    </header>
    <main className={styles.pageContainer}>
      <aside className={styles.pageSidebar}>
        <nav className={styles.sidebarNavigation}>
          <NavLink to="" className={getActiveClassName} end>Intro to blog</NavLink>
          <hr style={{
            border: 0,
            borderBottom: "solid 1px #999",
            width: "100%",
          }} />
          <NavLink to="/blog/1" className={getActiveClassName} end>Article 1</NavLink>
          <NavLink to="/blog/2" className={getActiveClassName} end>Article 2</NavLink>
          <NavLink to="/blog/3" className={getActiveClassName}>Article 3</NavLink>
        </nav>
      </aside>
      <section className={styles.pageMain}>
        <Outlet />
      </section>
    </main>
  </>;
}
