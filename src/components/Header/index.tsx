import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo-ig-news" className=""></img>
        <nav>
          <a href="/">Home</a>
          <a href="/posts">Post</a>
        </nav>
        <button className=""></button>
      </div>
    </header>
  );
}
