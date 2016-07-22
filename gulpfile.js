const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const gulpmocha = require('gulp-mocha');

gulp.task('default', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: { NODE_ENV: 'development', PORT: 8000 },
    ignore: ['./node_modules/**'],
  })
  .on('restart', () => console.log('Found changes, Restarting Application'.red));
});

gulp.task('test', () => {
  gulp.src('src/tests/*.js')
    .pipe(gulpmocha({ reporter: 'nyan' }));
});
