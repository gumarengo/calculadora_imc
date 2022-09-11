import React from "react";
import { level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: level;
};

const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {item.icon === "up" && <img src={upImage} alt="upImage" width="30" />}
        {item.icon === "down" && (
          <img src={downImage} alt="downImage" width="30" />
        )}
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc && (
        <div className={styles.yourImc}>Seu IMC é de: {item.yourImc}</div>
      )}

      <div className={styles.gridInfo}>
        <>
          IMC esta entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};

export default GridItem;
