import * as React from "react";
import rickImg from "./assets/IMG_0552.png";
import Provide from "./components/Provide/Provide";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={"page-section radius-large"}>
        <div>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://petban-6992c.web.app/"}
            className={"logo-button text-accent"}
          >
            Pet伴
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
              大學畢業專題獲得全系第二
              <br />
              同年以相同專題申請通過科技部大專學生研究計畫
              <br />
              兵役前任職於成大創新數位內容研究中心,擔任產品開發測試人員
              <br />
              出社會後第一份工作是電競直播人員,完成電競夢之後
              <br />
              先是做了MIS工程師負責Zabbix建置監控維護系統正常運作
              <br />
              並開發了一套遠端監控電腦系統(C++)
              <br />
              在這之後任職於鈞耀科技軟體工程師一職，主要負責自動化倉儲專案
              <br />
              開發新功能及重構WMS系統,研發租借籃球櫃
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
                <div>WPF</div>
              </div>
            </div>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button"}
              href={"https://petban-6992c.web.app/about"}
            >
              關於工作室
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button"}
              href={"https://www.facebook.com/PetBan.Studio"}
            >
              聯絡方式
            </a>
          </div>
          <div className={"img-w"}>
            <img className={"rick-img"} src={rickImg} alt={"rick"} />
          </div>
        </div>
      </div>
      <Provide />
    </div>
  );
}

export default App;
