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
    runSequence('Styles:Landing', 'Styles:About', callback)
});



gulp.task('Styles:App:Clean', function() {
    return del([STYLES.APP.BUILD])
});

gulp.task('Styles:Landing:Clean', function() {
    return del([STYLES.LANDING.BUILD])
});

gulp.task('Styles:About:Clean', function() {
    return del([STYLES.ABOUT.BUILD])
});



gulp.task('Styles:App', ['Styles:App:Clean'], function() {
    return gulp.src(STYLES.APP.SOURCE + 'app.scss')
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
        .pipe(gulp.dest(STYLES.APP.BUILD));
});



gulp.task('Styles:Landing', ['Styles:Landing:Clean'], function() {
    return gulp.src(STYLES.LANDING.SOURCE + 'landing.scss')
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
        .pipe(gulp.dest(STYLES.LANDING.BUILD));
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