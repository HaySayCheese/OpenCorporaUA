var gulp            = require('gulp'),
    del             = require('del'),
    gulpif          = require('gulp-if'),
    runSequence     = require('run-sequence'),
    handleErrors    = require('../utils/handleErrors'),

    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),
    sourcemaps      = require('gulp-sourcemaps'),

    DEBUG           = require('../config').DEBUG,
    STYLES          = require('../config').STYLES;



gulp.task('Styles', function(callback) {
    runSequence('Styles:Home', 'Styles:About', callback)
});



gulp.task('Styles:Home:Clean', function() {
    return del([STYLES.HOME.BUILD])
});

gulp.task('Styles:About:Clean', function() {
    return del([STYLES.ABOUT.BUILD])
});



gulp.task('Styles:Home', ['Styles:Home:Clean'], function() {
    return gulp.src(STYLES.HOME.SOURCE + 'home.scss')
        .pipe(gulpif(DEBUG, sourcemaps.init()))
        .pipe(sass(STYLES.SETTINGS))
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(gulpif(DEBUG, sourcemaps.write('/maps', {
            includeContent: false
        })))
        .on('error', handleErrors)
        .pipe(gulpif(!DEBUG, minifyCSS()))
        .pipe(gulp.dest(STYLES.HOME.BUILD));
});


gulp.task('Styles:About', function() {
    return gulp.src(STYLES.ABOUT.SOURCE + 'about.scss')
        .pipe(gulpif(DEBUG, sourcemaps.init()))
        .pipe(sass(STYLES.SETTINGS))
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(gulpif(DEBUG, sourcemaps.write('/maps', {
            includeContent: false
        })))
        .on('error', handleErrors)
        .pipe(gulpif(!DEBUG, minifyCSS()))
        .pipe(gulp.dest(STYLES.ABOUT.BUILD));
});