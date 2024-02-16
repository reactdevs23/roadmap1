import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  heading,
  headingColor,
  title,
  titleColor,
  data,
  line,
}) => {
  const renderBranch = (branchData, level, i) => {
    return (
      <div
        className={`${styles.branch} ${styles[`lv${level}`]} ${
          styles[`number${i + 1}`]
        }`}
      >
        {branchData.map((entry) => (
          <div key={entry.label} className={styles.entry}>
            <span
              className={styles.label}
              style={{ "--color": entry.color, "--bg": entry.bg }}
            >
              {entry.label}
            </span>
            {entry.children && renderBranch(entry.children, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      {" "}
      <div className={styles.mainWrapper} style={{ "--line": line }}>
        <div className={styles.header}>
          <h4 className={styles.heading} style={{ "--color": headingColor }}>
            {heading}
          </h4>{" "}
          <h2 className={styles.title} style={{ "--color": titleColor }}>
            {title}
          </h2>
        </div>
        <div id="wrapper" className={styles.wrapper}>
          {data.map((branch, i) => (
            <React.Fragment key={i}>
              <span
                className={[styles.label, styles.root].join(" ")}
                style={{ "--color": branch.color, "--bg": branch.bg }}
              >
                {branch.label}
              </span>
              {renderBranch(branch.children, 1, i)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
