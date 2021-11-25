import styles from "./Img.module.css";
export default function Img({ url }) {
  return <img src={url} alt="item" className={styles.img} />;
}
