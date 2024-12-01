import rickLecturerImg from "../../assets/IMG_0777.JPEG";
import p5 from "../../assets/p5.png";
import p8 from "../../assets/p8.png";
import p7 from "../../assets/p7.png";
import p6 from "../../assets/p6.jpeg";
import p2 from "../../assets/p2.PNG";
import p4 from "../../assets/p4.PNG";
import p3 from "../../assets/p3.PNG";
import p1 from "../../assets/p1.PNG";
import classes from "../TimeLine/TimeLine.module.css";
import rickImg from "../../assets/IMG_0552.png";

const TimeLine = () => {
  return (
    <div id="timeline" className={classes.container}>
      <div className={classes.subject}>Experience</div>
      <ul className={classes.timeLine_ul}>
        <li style={{"--accent-color": "#4CADAD"}}>
          <div className={classes.date}>Now</div>
          <div className={classes.title}>To be continued</div>
          <div className={classes.descr}>
            Keep going keep growing
          </div>
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2024/6</div>
          <div className={classes.title}>全端工程師</div>
          <div className={classes.descr}>
            山石久平股份有限公司<br/>
            工作內容<br/>
            1. 雲端軟體開發講師<br/>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={rickLecturerImg} alt={"rick_lecturer_img"}/>
              <span className={classes.img_sub}>華越資通</span>
            </div>
            2. 碳盤查雲端系統需求分析<br/>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p5} alt={"cfv_sys_img"}/>
              <span className={classes.img_sub}>威爾森智能減碳</span>
            </div>
            3. 雲端服務系統需求分析及開發<br/>
            4. LINE Messaging API 介接<br/>
            5. Threads API 介接<br/>
            專案經歷:<br/>
            <a href={"https://yula.sf39.app"} target={"_blank"}>YULA 預約雲服務</a><br/>
            <a href={"https://sf39.app/"} target={"_blank"}>山石久平 官網</a><br/>
            technology-stack:ASP.NET MVC、ASP.NET Web API 、SQL Server、React
          </div>
        </li>
        <li style={{"--accent-color": "#41516C"}}>
          <div className={classes.date}>2023/7</div>
          <div className={classes.title}>後端工程師</div>
          <div className={classes.descr}>
            凱群資訊股份有限公司<br/>
            工作內容<br/>
            1. 分析原系統 ERP 業務邏輯<br/>
            2. 建立後端API 及修改資料模型<br/>
            3. 協助前端串接及修改部分套件<br/>
            4. 部署伺服器<br/>
            5. 處理原系統客戶需求<br/>
            6. 網頁應用調用手機攝像頭掃碼<br/>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p6} alt={"cad_erp_img"}/>
              <span className={classes.img_sub}>凱群 ERP</span>
            </div>
            technology-stack:ASP.NET Core、SQL Server、React
          </div>
        </li>
        <li style={{"--accent-color": "#1B5F8C"}}>
          <div className={classes.date}>2022/5</div>
          <div className={classes.title}>全端工程師</div>
          <div className={classes.descr}>
            幾合股份有限公司<br/>
            工作內容<br/>
            1. CMS 系統重構"Migrating from .NET Framework to .NET Core"<br/>
            2. CMS 系統維護<br/>
            3. 功能再開發<br/>
            4. 使用原碼檢測Fortify<br/>
            5. 修正資安漏洞<br/>
            6. 修改網頁符合AA無障礙<br/>
            專案名稱：<br/>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p2} alt={"p2_img"}/>
              <span className={classes.img_sub}>學前教育網站</span>
            </div>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p7} alt={"p7_img"}/>
              <span className={classes.img_sub}>獎補助系統網站</span>
            </div>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p3} alt={"p3_img"}/>
              <span className={classes.img_sub}>博物館網站</span>
            </div>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p1} alt={"p1_img"}/>
              <span className={classes.img_sub}>形象內容網站</span>
            </div>
            新竹縣縣史館「記憶拼圖-無牆博物館」改版<br/>
            technology-stack:ASP.NET MVC、ASP.NET Core、SQL Server、Bootstrap、jquery、Kendo UI
          </div>
        </li>
        <li style={{"--accent-color": "#E24A68"}}>
          <div className={classes.date}>2022/3</div>
          <div className={classes.title}>前端工程師</div>
          <div className={classes.descr}>
            山石久平股份有限公司<br/>
            工作內容<br/>
            GUGO運動賽事平台<br/>
            共四個部分一頁式廣告頁面<br/>
            1. HTML + CSS 切版<br/>
            2. 製作效果動畫<br/>
            1. 標題文字入場效果 共4項<br/>
            2. Button按鈕效果 共2項<br/>
            3. 副標題項目入場效果 共7項<br/>
            4. LOGO入場效果 共4項<br/>
            technology-stack:html css postcss tailwindcss
          </div>
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2022/1</div>
          <div className={classes.title}>後端工程師</div>
          <div className={classes.descr}>
            山石久平股份有限公司<br/>
            工作內容<br/>
            1. 篩選功能包含3項<br/>
            2. 輸入式查詢9項<br/>
            3. 下拉選單列查詢共8項<br/>
            4. 依照起迄日共2組 1. 蒐藏時間起迄 2. 入藏時間起迄<br/>
            5. 列出可查詢的項目(查詢列表頁 面內所顯示的篩選項目)<br/>
            6. 列出藏品內容可顯示的項目<br/>
            7. 圖片套用燈箱效果(Fancybox)<br/>
            8. 搜尋頁、列表頁、內容頁畫面調整切版<br/>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p4} alt={"p4_img"}/>
              <span className={classes.img_sub}>中央研究院民族學研究所博物館</span>
            </div>
            technology-stack:ASP.NET MVC、ASP.NET Web API 、SQL Server、Bootstrap、jquery
          </div>
        </li>
        <li style={{"--accent-color": "#41516C"}}>
          <div className={classes.date}>2021/10</div>
          <div className={classes.title}>前端工程師</div>
          <div className={classes.descr}>
            山石久平股份有限公司<br/>
            修改維護遊戲網站框架<br/>
            切版介接後端API<br/>
            <div className={classes.img_box}>
              <img className={classes.rick_img} src={p8} alt={"p8_img"}/>
              <span className={classes.img_sub}>遊戲平台</span>
            </div>
            technology-stack:React 、react-router-dom、redux、redux-observable
          </div>
        </li>
        <li style={{"--accent-color": "#4CADAD"}}>
          <div className={classes.date}>2021/5</div>
          <div className={classes.title}>後端工程師</div>
          <div className={classes.descr}>
            鑫捷科技股份有限公司<br/>
            1.公司既有管理系統網站維護修改<br/>
            2.台灣知名食品公司代送系統<br/>
            3.陸軍整備中心系統修改及維護<br/>
            technology-stack:ASP.NET MVC、BootstrapVue、jquery、Vue.js、SQL Server、Oracle 10g
          </div>
        </li>
        <li style={{"--accent-color": "#1B5F8C"}}>
          <div className={classes.date}>2020/1</div>
          <div className={classes.title}>軟體設計工程師</div>
          <div className={classes.descr}>
            鈞曜科技有限公司<br/>
            1.既有WMS系統維護修改開發新功能(紅外線指示器，LED陣列指示器)<br/>
            2.針對舊系統部分重構修改<br/>
            3.開發一對多倉儲管理系統（國軍某單位專案）<br/>
            3.開發智能管理籃球櫃 （台中某大學）<br/>
            4.修改訂單系統 API<br/>
            專案經歷:<br/>
            國軍某單位補給總庫-WMS客製化系統
            台灣知名鞋業股份有限公司-WMS客製化系統
            德國知名亞洲區單車零配件廠-WMS客製化系統
            台灣知名CNC切削工具機製造廠-WMS客製化系統
            智能管理籃球櫃
            technology-stack:ASP.NET 、WPF、MySql
          </div>
        </li>
        <li style={{"--accent-color": "#E24A68"}}>
          <div className={classes.date}>2019/8</div>
          <div className={classes.title}>MIS輪班人員</div>
          <div className={classes.descr}>
            嘉資國際有限公司<br/>
            針對公司內部需求設計軟體，以及各部門監控維護系統正常運作，排除公司內部電腦使用端各類問題。<br/>
            technology-stack:C++/CLI
          </div>
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2017/8</div>
          <div className={classes.title}>產品開發測試人員</div>
          <div className={classes.descr}>
            成大創新數位內容研究中心<br/>
            technology-stack:C#
          </div>
        </li>
        <li style={{"--accent-color": "#41516C"}}>
          <div className={classes.date}>2014/7</div>
          <div className={classes.title}>短期計時駐點人員</div>
          <div className={classes.descr}>
            昕傳科技股份有限公司<br/>
            災害應變中心駐點資訊系統維護操作人員
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;
