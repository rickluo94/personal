import classes from "../TimeLine/TimeLine.module.css";

const TimeLine = () => {
  return (<div className={classes.pageSection}>
    <div className={classes.containerL}>
      {/* Experience Timeline */}
      <div className={classes.subject}>工作經歷</div>
      <ul className={classes.timeLine_ul}>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className={classes.date}>2014/7</div>
          <div className={classes.title}>短期計時駐點人員</div>
          <div className={classes.descr}>
            昕傳科技股份有限公司<br />
            災害應變中心駐點資訊系統維護操作人員
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className={classes.date}>2017/8</div>
          <div className={classes.title}>產品開發測試人員</div>
          <div className={classes.descr}>
            成大創新數位內容研究中心<br />
            technology-stack:<br />
            C#
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className={classes.date}>2019/8</div>
          <div className={classes.title}>MIS輪班人員</div>
          <div className={classes.descr}>
            嘉資國際有限公司<br />
            針對公司內部需求設計軟體，以及各部門監控維護系統正常運作，排除公司內部電腦使用端各類問題。<br />
            technology-stack:<br />
            C++/CLI
          </div>
        </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className={classes.date}>2020/1</div>
          <div className={classes.title}>軟體設計工程師</div>
          <div className={classes.descr}>
            鈞曜科技有限公司<br />
            1.既有WMS系統維護修改開發新功能(紅外線指示器，LED陣列指示器)<br />
            2.針對舊系統部分重構修改<br />
            3.開發一對多倉儲管理系統（國軍某單位專案）<br />
            3.開發智能管理籃球櫃 （台中某大學）<br />
            4.修改訂單系統 API<br />
            專案經歷:<br />
            國軍某單位補給總庫-WMS客製化系統
            台灣知名鞋業股份有限公司-WMS客製化系統
            德國知名亞洲區單車零配件廠-WMS客製化系統
            台灣知名CNC切削工具機製造廠-WMS客製化系統
            智能管理籃球櫃
            technology-stack:<br />
            ASP.NET 、WPF、MySql
          </div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className={classes.date}>2021/5</div>
          <div className={classes.title}>後端工程師</div>
          <div className={classes.descr}>
            鑫捷科技股份有限公司<br />
            1.公司既有管理系統網站維護修改<br />
            2.台灣知名食品公司代送系統<br />
            3.陸軍整備中心系統修改及維護<br />
            technology-stack:<br />
            ASP.NET MVC、BootstrapVue、jquery、Vue.js、SQL Server、Oracle 10g
          </div>
        </li>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className={classes.date}>2021/10</div>
          <div className={classes.title}>前端工程師</div>
          <div className={classes.descr}>
            自僱接案(super8娛樂城)<br />
            修改維護遊戲網站框架<br />
            切版介接後端API<br />
            technology-stack:<br />
            React 、react-router-dom、redux、redux-observable
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className={classes.date}>2022/1</div>
          <div className={classes.title}>後端工程師</div>
          <div className={classes.descr}>
            自僱接案(幾合股份有限公司)<br />
            中央研究院民族學研究所博物館<br />
            藏品查詢系統後端開發及介接修改RWD畫面<br />

            1. 篩選功能包含3項<br />
            2. 輸入式查詢9項<br />
            3. 下拉選單列查詢共8項<br />
            4. 依照起迄日共2組 1. 蒐藏時間起迄 2. 入藏時間起迄<br />
            5. 列出可查詢的項目(查詢列表頁 面內所顯示的篩選項目)<br />
            6. 列出藏品內容可顯示的項目<br />
            7. 圖片套用燈箱效果(Fancybox)<br />
            8. 搜尋頁、列表頁、內容頁畫面調整切版<br />

            technology-stack:<br />
            ASP.NET MVC、ASP.NET Web API 、SQL Server、Bootstrap、jquery
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className={classes.date}>2022/3</div>
          <div className={classes.title}>前端工程師</div>
          <div className={classes.descr}>
            自僱接案(GUGO遊戲平台)<br />
            GUGO運動賽事平台<br />
            共四個部分一頁式廣告頁面<br />
            1. HTML + CSS 切版<br />
            2. 製作效果動畫<br />
            1. 標題文字入場效果 共4項<br />
            2. Button按鈕效果 共2項<br />
            3. 副標題項目入場效果 共7項<br />
            4. LOGO入場效果 共4項<br />

            technology-stack:<br />
            html css postcss tailwindcss
          </div>
        </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className={classes.date}>2022/5</div>
          <div className={classes.title}>全端工程師</div>
          <div className={classes.descr}>
            幾合股份有限公司<br />
            工作內容<br />
            1. CMS 系統重構"Migrating from .NET Framework to .NET Core"<br />
            2. CMS 系統維護<br />
            3. 功能再開發<br />
            4. 使用原碼檢測Fortify<br />
            5. 修正資安漏洞<br />
            6. 修改網頁符合AA無障礙<br />

            專案名稱：<br />
            教育部國民及學前教育署網站<br />
            客家委員會獎補助系統網站<br />
            民族學研究所博物館網站<br />
            新竹縣政府文化局網站<br />
            新竹縣縣史館「記憶拼圖-無牆博物館」改版<br />

            technology-stack:<br />
            ASP.NET MVC、ASP.NET Core、SQL Server、Bootstrap、jquery、Kendo UI
          </div>
        </li>
      </ul>
    </div>
  </div >);
};

export default TimeLine;
