import React from "react";
import styles from "./Logo.module.css";


const Logo = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <h1 className="mx-auto text-dark" style={{ borderBottom: "2px solid #000", width: "max-content" }}>Leaderboard REPORT</h1>
      <div className={`${styles.header} d-flex justify-content-between mx-4`}>
        <div className="my-5">
          <h4>Interaction : <span className="text-secondary">Product Mgmt V1.0</span> </h4>
          <h4>Date : <span className="text-secondary">{date}</span></h4>
          <hr />
          <h4>CANDIDATE NAME : <span className="text-secondary">Abc</span></h4>
        </div>
      </div>
    </>
  );
};

export default Logo;