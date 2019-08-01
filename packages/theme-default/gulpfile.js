'use strict'

const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss') // postcss的作用相当于一个跑插件的平台,具体的补前缀等操作是通过插件实现
const salad = require('postcss-salad')(require('./salad.config.json')) // 使用 bem 风格来对 css 进行命名

gulp.task('compile', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['compile'])
})
