import gulp from 'gulp';
import nodemon from 'nodemon';
import browserSync from 'browser-sync';

// //nodemon負責watch後端檔案
gulp.task('nodemon', cb => {
  let started = false;
  return nodemon({
    script: 'server.js',
    watch: ['routes/*.js', 'server.js'],
    ignore: ['app/scripts/*.js'],
  }).on('start', e => {
    if(!started){
      started = true;
      cb();
    }
    started = true;
  });
});
//browserSync負責監看template內的檔案並刷新瀏覽器 ※gulp 4※
gulp.task('browserSync', gulp.series('nodemon', () => {
  browserSync.init( null, {
    proxy: 'http://localhost:3000',
    files: ['templates/**'],
    browser: ['chrome'],
    port: 5000,
    reloadDelay: 3000
  })
}));
// //browserSync負責刷新代碼 ※gulp 3※
// gulp.task('browserSync', ['nodemon'], cb => {
//   browserSync.init( null, {
//     proxy: 'http://localhost:3000',
//     files: ['templates/**'],
//     browser: ['chrome'],
//     port: 5000,
//     reloadDelay: 3000
//   })
// });

// //運行用task，下gulp local ※gulp 4※
gulp.task('local', gulp.series('browserSync', () => {
}));
// //運行用task，下gulp local ※gulp 3※
// gulp.task('local', cb => {
//   runSequence(['browserSync']);
// });
