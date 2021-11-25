import styles from "./Details.module.css";
import Button from "./Button";

export default function Details(props) {
  const { cal, pfc, deg, price, minPrice } = props;

  return (
    <>
      <div className={styles.flex_div}>
        <div className={styles.flex_child}>{cal} </div>
        <div className={styles.flex_child}>P/F/C: {pfc}</div>
        <div className={styles.flex_child} style={{ textAlign: "right" }}>
          {deg} C{" "}
        </div>
      </div>

      <div className={styles.flex_div}>
        <div style={{ fontSize: "35px", fontWeight: "bold", flexBasis: "65%" }}>
          {price}
          <span
            style={{
              fontSize: "28px",
              color: "red",
              textDecoration: "line-through",
              marginLeft: "25px"
            }}
          >
            {minPrice}{" "}
          </span>{" "}
        </div>
        <Button />
      </div>
    </>
  );
}
