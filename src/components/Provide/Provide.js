import classes from "./Provide.module.css";

const Provide = () => {
  return (
    <div className={classes.pageSection}>
      <div className={classes.containerL}>
        <div className={classes.subject}>提供服務</div>
        <ul className={classes.ulCard}>
          <li className={classes.liCard}>
            <p>RWD 網站切版</p>
            <p>NT$ 800 </p>
            <p>起/頁</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button"}
              href={"https://www.facebook.com/PetBan.Studio"}
            >
              馬上詢價
            </a>
          </li>
          <li className={classes.liCard}>
            <p>RESTful API 設計</p>
            <p>NT$ 2000</p>
            <p>起</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button"}
              href={"https://www.facebook.com/PetBan.Studio"}
            >
              馬上詢價
            </a>
          </li>
          <li className={classes.liCard}>
            <p>RESTful API 介接</p>
            <p>NT$ 1000 </p>
            <p>起</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button"}
              href={"https://www.facebook.com/PetBan.Studio"}
            >
              馬上詢價
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Provide;
