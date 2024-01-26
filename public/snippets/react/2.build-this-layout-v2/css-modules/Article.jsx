//Article.jsx
import styles from "./Article.module.css";
export default function Article({ header, content }) {
  return (
    <article className={styles.article}>
      <h2>{header}</h2>
      <div className={styles.content}>{content}</div>
    </article>
  );
}
