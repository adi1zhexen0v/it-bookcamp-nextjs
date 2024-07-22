import { axiosInstance } from "@services/axios";
import { IBooksResponse } from "@utils/interfaces";
import BookCard from "@components/BookCard";
import styles from "./BooksPage.module.scss";

export default async function BooksPage() {
  const { data } = await axiosInstance.get<IBooksResponse>("/new");

  return (
    <div>
      <div className={styles.grid}>
        {data.books.map((book) => (
          <BookCard book={book} key={book.isbn13} />
        ))}
      </div>
    </div>
  );
}
