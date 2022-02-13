import classes from "./Provide.module.css";

const Provide = () => {
  return (
    <div className={classes.pageSection}>
      <div className={classes.containerL}>
        <div>提供服務</div>
        <ul className={classes.ulCard}>
          <li className={classes.liCard}>RWD 網站切版 800起/頁</li>
          <li className={classes.liCard}>RESTful API 設計 2000起</li>
          <li className={classes.liCard}>RESTful API 介接 1000 起</li>
        </ul>
      </div>
    </div>
  );
};

export default Provide;
