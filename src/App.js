import * as React from "react";
import rickImg from "./assets/IMG_0552.png";
import Provide from "./components/Provide/Provide";
import Experience from "./components/Experience/Experience";
import "./App.css";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {

  const onClickHandler = () => {
    window.location.hash = "provide";
  };

  return (
    <div className="App">
      <div className={"page-section radius-large"}>
        <div>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://petban.sf39.app/"}
            className={"logo-button text-accent"}
          >
            Rick CV
          </a>
        </div>
        <div className={"container-l"}>
          <div className={"intro-text"}>
            <h1 className={"fs-700 an-h1"}>
              學無止境{"  "}朝夢想邁進
              <br />
              你好我是{"  "}
              <span className={"ff-sans-cond text-accent"}>羅亘佑！</span>
            </h1>
            <p className={"intro-p an-intro-p"}>
              學術成就：大學畢業專題榮獲全系第二名， 並成功申請科技部大專學生研究計畫。
              <br />
              早期工作經驗：服兵役前，曾在成大創新數位內容研究中心擔任產品開發測試人員。
              <br />
              多元職涯：出社會後，最初擔任電競直播人員，實現個人電競夢想。
              <br />
              隨後轉任 MIS工程師，負責Zabbix監控系統的建置與維護，並開發了一套遠端監控電腦系統（C++）。
              <br />
              專精領域：後來在鈞耀科技擔任軟體工程師，主要負責自動化倉儲專案，開發新功能並重構WMS系統，同時參與研發租借籃球櫃。
            </p>
            <div className={"usp-wrapper"}>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>React</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>ASP.NET</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Kendo UI</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>WPF</div>
              </div>
            </div>
          </div>
          <div className={"img-w"}>
            <img className={"rick-img"} src={rickImg} alt={"rick_img"} />
          </div>
          <div className={"usp-wrapper usp-wrapper-r"}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button usp-item"}
              href={"https://www.linkedin.com/in/rick-lo/"}
            >
              Linkedin
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button usp-item"}
              href={"https://github.com/rickluo94"}
            >
              Github
            </a>
          </div>
          <div className={"arrow"} onClick={onClickHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Provide />
      <TimeLine />
    </div >
  );
}

export default App;
