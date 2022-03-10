import ThemeSwitch from "./ThemeSwitch";
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ThemeSwitch />
    </div>
  )
}