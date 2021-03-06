import gulp from "gulp";
import nodemon from "nodemon";
import browserSync from "browser-sync";
import plumber from "gulp-plumber"; //例外處理
import gulpLoad from "gulp-load-plugins";
import sass from 'gulp-sass';

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
gulp.task('sass', cb => {
  gulp.src('app/styles/*/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
  return cb();
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

// [gulp4寫法]local的task，任務順序為clean、ScriptsLocal、sass、browserSync
gulp.task("local", gulp.series("clean","ScriptsLocal","sass", "browserSync", () => {}));
