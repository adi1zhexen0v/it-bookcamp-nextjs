import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import logo from "@img/logo.png";
import { BOOKS_PAGE_ROUTE, CATEGORIES_PAGE_ROUTE, HOME_PAGE_ROUTE } from "@utils/consts";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Image src={logo} alt="Logo" className={styles.logo} />
        </div>
        <ul className={styles.list}>
          <li>
            <Link href={HOME_PAGE_ROUTE} className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href={BOOKS_PAGE_ROUTE} className={styles.link}>
              Books
            </Link>
          </li>
          <li>
            <Link href={CATEGORIES_PAGE_ROUTE} className={styles.link}>
              Categories
            </Link>
          </li>
        </ul>
        <div className={styles.input}>
          <input type="text" placeholder="Search a book..." />
          <GoSearch />
        </div>
      </nav>
    </header>
  );
}
