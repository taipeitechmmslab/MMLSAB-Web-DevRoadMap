import gulp from "gulp";
import nodemon from "nodemon";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import gulpLoad from "gulp-load-plugins";
import sass from "gulp-sass";
import useref from "gulp-useref";
import filter from "gulp-filter";
import uglify from "gulp-uglify";
import gulpif from "gulp-if";

const $ = gulpLoad();

const errorHandler = () =>
  plumber({
    errorHandler: function(err) {
      console.log(err);
      this.emit("end");
    }
  });

//nodemon負責watch後端檔案
gulp.task("nodemon", cb => {
  let started = false;
  return nodemon({
    script: "server.js",
    watch: ["routes/*.js", "server.js"],
    ignore: ["app/scripts/*.js"]
  }).on("start", e => {
    if (!started) {
      started = true;
      cb();
    }
    started = true;
  });
});

//[gulp4寫法] browserSync負責監看template內的檔案並刷新瀏覽器
gulp.task(
  "browserSync",
  gulp.series("nodemon", () => {
    browserSync.init(null, {
      proxy: "http://localhost:3000",
      files: ["templates/**"],
      browser: ["chrome"],
      port: 5000,
      reloadDelay: 3000
    });
  })
);

//清空每次執行gulp local所產生的dist檔
gulp.task("clean", require("del").bind(null, ["dist"]));

//轉譯babel並輸出到dist，前端改抓dist資料夾內轉譯後的js
gulp.task("ScriptsLocal", cb => {
  gulp
    .src(["app/scripts/*/*.js"])
    .pipe(errorHandler())
    .pipe($.babel())
    .pipe(plumber.stop())
    .pipe(gulp.dest("dist/scripts"));
  return cb();
});

//使用sass，將sass轉譯成CSS檔案並輸出到dist/styles資料夾
gulp.task("sass", cb => {
  gulp
    .src("app/styles/*/*.sass")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/styles"));
  return cb();
});

//gulp.watch負責watch前端檔案
gulp.task("build:watch", cb => {
  gulp.watch("app/scripts/*/*.js", gulp.series("ScriptsLocal")); //JS改變就執行ScriptsLocal任務
  gulp.watch("app/styles/*/*.sass", gulp.series("sass")); //sass改變就執行sass任務
  cb();
});

//自動載入bower_component檔
gulp.task("bower", cb => {
  /* to include all bower components*/
  const wiredep = require("wiredep").stream;
  return gulp
    .src("app/templates/header.ejs")
    .pipe(
      wiredep({
        /* to avoid routes */
        ignorePath: /^(\.\.\/)*\.\./
      })
    )
    .pipe(gulp.dest("templates"));
});

//https://stackoverflow.com/questions/43475376/typeerror-useref-assets-is-not-a-function
//自動化執行build:js、build:css
gulp.task("vendor", cb => {
  return (
    gulp
      .src("templates/header.ejs")
      /* useref concat all bower components */
      .pipe(useref())
      /* *Filter can defined stream's file with glob */
      .pipe(gulpif("*.ejs", gulp.dest("templates")))
      .pipe(gulpif("*.js", uglify()))      
      .pipe(gulp.dest("dist"))
  );
});

gulp.task("bowerComponents", gulp.series("bower", "vendor"));

// [gulp4寫法]local的task，任務順序為clean、ScriptsLocal、sass、build:watch、browserSync
gulp.task(
  "local",
  gulp.series(
    "clean",
    gulp.parallel("ScriptsLocal", "sass"),
    "bowerComponents",
    "build:watch",
    "browserSync"
  )
);

// [gulp4寫法]build的task，任務順序為clean、ScriptsLocal、sass
gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("ScriptsLocal", "sass"), "bowerComponents")
);
