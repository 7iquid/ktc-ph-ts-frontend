import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Box.module.scss";
import cn from "classnames";

type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";

const Box: FunctionComponent<{ children: ReactNode, justifyContent?:JustifyContent, }> = ({ children,justifyContent }) => {
  const classNames = cn({
      [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
   });
  return <div  className={styles.Box}>
          <div className={classNames}>
            {children}
          </div>;
        </div>;
};

export default Box;
