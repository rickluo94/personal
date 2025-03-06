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
            href={"https://chatgpt.com/share/67c96739-80e4-800e-a65c-eae2a6648f34"}
            className={"logo-button text-accent"}
          >
            AI 摘要
          </a>
        </div>
        <div className={"container-l"}>
          <div className={"intro-text"}>
            <h1 className={"fs-700 an-h1"}>
              學無止境{"  "}朝夢想邁進
              <br/>
              你好我是{"  "}
              <span className={"ff-sans-cond text-accent"}>羅亘佑！</span>
            </h1>
            <div className={"intro-p an-intro-p"}>
              <p>學術成就：</p>
              <ul>
                <li>大學畢業專題全系第二名</li>
                <li>機械輔具（科技部大專學生研究計畫）</li>
              </ul>
              <p>早期經驗：</p>
              <ul>
                <li>成大創新產學，產品開發測試人員。</li>
              </ul>
              <p>多元職涯：</p>
              <ul>
                <li>電競直播人員</li>
                <li>Zabbix監控系統建置與維護</li>
                <li>遠端監控系統開發</li>
              </ul>
              <p>專精領域：</p>
              <ul>
                <li>網站內容管理系統 CMS</li>
                <li>鈑金加工 ERP</li>
                <li>自動化倉儲 ERP</li>
                <li>開發WMS新功能，優化擴充性</li>
                <li>租借籃球櫃研發</li>
              </ul>
            </div>
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
