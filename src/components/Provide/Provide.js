import classes from "./Provide.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Provide = () => {
  AOS.init({
    duration: 2200,
  });
  const onClickHandler = () => {
    window.location.hash = "timeline";
  };

  return (
    <div id="provide" className={classes.pageSection}>
      <div className={classes.containerL}>
        <div className={classes.subject}>Tech Stack</div>
        <ul className={classes.ulCard}>
          <li className={classes.liCard} data-aos="fade-up-right">
            <p>網站切版</p>
            <ul>
              <li>HTML + CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Kendo UI</li>
            </ul>
          </li>
          <li className={classes.liCard} data-aos="fade-up">
            <p>Front-End 前端</p>
            <ul>
              <li>React</li>
              <li>ASP.NET Core Blazor</li>
            </ul>
          </li>
          <li className={classes.liCard} data-aos="fade-up-left">
            <p>Back-End 後端</p>
            <ul>
              <li>ASP.NET MVC</li>
              <li>ASP.NET Core MVC</li>
              <li>Entity Framework</li>
              <li>Prisma</li>
              <li>MySql</li>
              <li>MS SQL</li>
            </ul>
          </li>
        </ul>
        <div className={classes.arrow} onClick={onClickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Provide;
