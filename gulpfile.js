const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const header = require('gulp-header');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');

const pkg = JSON.parse(fs.readFileSync('package.json'));

const opts = {
  autoprefixer: {
    browsers: ['ie >= 9', '> 1% in CN']
  },

  minRename: {
    suffix: '.min'
  },

  banner: [
    '/*!',
    ' * <%= name %> -<%= homepage %>',
    ' * Version - <%= version %>',
    ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
    ' *',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
    ' */\n\n'
  ].join('\n')
};

gulp.task('sass', function() {
  return gulp.src('./scss/ku-icon.scss')
    .pipe(sass())
    .pipe(header(opts.banner, pkg))
    .pipe(postcss([ autoprefixer(opts.autoprefixer) ]))
    .pipe(gulp.dest('./css'))
    .pipe(cssnano())
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass:watch', ['sass', 'watch']);

gulp.task('default', ['sass']);
