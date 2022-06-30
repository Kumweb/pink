const gulp = require('gulp');

// Обработчик ошибок
const plumber = require('gulp-plumber');

// Отображение в DevOps Google
const sourcemap = require('gulp-sourcemaps');

// Препроцессор Sass(SCSS)
const sass = require('gulp-sass')(require('sass'));

// Префиксы
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();

// Минификация CSS
const csso = require('gulp-csso');
const rename = require('gulp-rename');

// Оптимизация изображений
const imagemin = require('gulp-imagemin');

// WebP
const webp = require('gulp-webp');

// Styles

const styles = () => {
  return gulp
    .src('source/sass/styles.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('source/css'))
    .pipe(sync.stream());
};

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source',
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('source/*.html').on('change', sync.reload);
};

// Images

const images = () => {
  return gulp
    .src('source/img/**/*.{jpg,png,svg}')
    .pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 }), imagemin.mozjpeg({ progressive: true }), imagemin.svgo()]));
};

exports.images = images;

// WebP

const webpi = () => {
  return gulp
    .src('source/img/**/*.{png,jpg}')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('source/img'));
};

exports.webpi = webpi;

exports.default = gulp.series(styles, watcher);
