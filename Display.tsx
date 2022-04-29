import React from "react";

import DisplayData from "./DisplayData";

import { DUMMY_DATA, name, sheet } from "../data/data";
import styles from "./Display.module.css";

interface Data {
  num: string;
  options: string;
  upcoming: string;
  edit: boolean;
}

const Display = () => {
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "10rem" }}>
        <div className={styles.timeSheet}>{sheet}</div>
        <div className={styles.name}>{name}</div>
        {/* <div style={{ position: 'absolute', left: '24rem', top: '4rem', fontWeight: '700', fontSize: '26px', marginBottom: '5rem' }}>{sheet}</div>
                <div style={{ position: 'absolute', left: '24rem', top: '6rem', fontWeight: '600', fontSize: '22px' }}>{name}</div> */}
        {DUMMY_DATA.map((item) => (
          <DisplayData
            key={item.id}
            id={item.id}
            period={item.period}
            status={item.status}
            edit={item.edit}
          />
        ))}
      </div>
    </div>
  );
};

export default Display;
