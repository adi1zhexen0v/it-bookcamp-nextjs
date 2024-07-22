import { HiOutlineExternalLink } from "react-icons/hi";
import { IBook } from "@utils/interfaces";
import { calculatePrice } from "@utils/utils";
import styles from "./BookCard.module.scss";

interface Props {
  book: IBook;
}

export default function BookCard({ book }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <div className={styles.link}></div>
        <HiOutlineExternalLink />
        <p>See full page</p>
      </div>
      <img src={book.image} alt={book.isbn13} className={styles.image} />
      <div className={styles.block}>
        <h2 className={styles.title}>{book.title}</h2>
        <div className={styles.price}>
          <h4>{book.price}</h4>
          {+book.isbn13 % 3 === 0 && <span>${calculatePrice(+book.isbn13, book.price)}</span>}
        </div>
      </div>
    </div>
  );
}
