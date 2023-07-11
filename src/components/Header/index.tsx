import styles from "./styles.module.scss";
import { SignInButton } from '../SignInButton/index';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo-ig-news" className=""></img>
        <nav>
          <a className={styles.active} href="/">
            Home
          </a>
          <a href="/posts">
            Post
          </a>
        </nav>
        <SignInButton/>
      </div>
    </header>
  );
}
