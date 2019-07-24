# MMLSAB-Web-DevRoadMap

# no-gulp 不使用現代化工具Gulp架設網頁伺服器。
1. 架設Node.js伺服器並能夠接受要求（Request, req）與回應（Response, res）。
2. 撰寫HTML，並在Node.js伺服器中回傳靜態HTML網頁檔案。
3. 撰寫自訂的JS程式碼。在HTML網頁的標頭（Header）加入自訂的JS程式碼與透過CDN引入其他常見的jQuery與Bootstrap的JS程式碼。
4. 使用Fetch API在自訂的JS程式碼取得外部的JSON資料。
5. 透過Bootstrap將Fetch API取得的資料用表格的方式顯示，並使用jQuery操作HTML。
6. 在自訂的JS程式碼增加功能來操作HTML網頁的元素。
7. 在CSS中透過media query設定指定螢幕尺寸下的CSS樣式。

# gulp 使用現代化工具Gulp架設網頁伺服器。
1. 學會安裝gulp環境與撰寫任務檔案gulfile。
2. 在Gulp中使用nodemon監視後端檔案與browserSync刷新代碼。
3. 在Gulp中使用babel轉譯JS檔案，並輸出到資料夾。
4. 在Gulp中使用sass轉譯sass檔案為CSS，並輸出到資料夾。
5. 在Gulp中透過gulp.watch功能，監視sass和js的修改，並執行特定建置任務。
6. 在express當中使用ejs模板引擎增強HTML網頁。
7. 使用bower下載前端套件並透過gulp的建置任務整合檔案。
8. 透過vue實作backstage網頁完成相同的功能，並示範兩個vue元件之間傳遞資料。

# webpack 使用webpack4 建設網頁伺服器
1. 建立一個Express的網頁伺服器
2. 透過Webpack，載入JS與CSS並注入HTML網頁中
3. 透過webpack，載入JS與CSS並注入使用CDN套件的HTML網頁
4. 透過Webpack，JS中載入bootstrap與jQuery並注入HTML網頁
5. 分離開發版與線上版的Webpack設定，與優化線上版檔案
6. 在Webpack中，監控檔案儲存，並自動執行webpack
7. 在Webpack中，啟用熱加載模組，並透過Hot Reload插件推送更新到瀏覽器
8. 在Webpack中，使用ESlint提高程式碼品質
9. 使用jest撰寫單元測試並取得coverage報告

# react 使用React 架設網頁伺服器
使用React 16.x版框架，架設網頁伺服器。學會React、React-router、Redux-react、Redux-thunk套餐。
1. 使用Create react app工具，快速架設React的開發環境。
2. 在React中，引入Bootstrap與jquery，。
3. 在React的生命週期發送HTTP取得資料，改用reactstrap。
4. 在React，建立父元件（Users）跟子元件（User），並透過props傳送資料。
5. 在React，切換路由使用react-router，渲染不同的React元件
6. 在React，新增Counter元件，使用Redux管理資料狀態。
7. 在React，新增Todo元件，整合使用Redux管理資料狀態。
8. 在React，使用Redux-thunk重寫Users與UserInfo元件，統一整合使用Redux管理資料狀態。
