import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub />
      Sign in with Github
    </button>
  );
}