var gulp            = require('gulp'),
    rename          = require('gulp-rename'),
    runSequence     = require('run-sequence'),
    handleErrors    = require('../utils/handleErrors'),

    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),

    STYLES          = require('../config').STYLES;



gulp.task('Styles:Development', function(callback) {
    runSequence('Styles:Compile', 'Styles:Autoprefixer', callback);
});

gulp.task('Styles:Production', function(callback) {
    runSequence('Styles:Compile', 'Styles:Compress', callback);
});



gulp.task('Styles:Compile', function(callback) {
    runSequence('Styles:Home', 'Styles:About', callback)
});



gulp.task('Styles:Home', function() {
    return gulp.src(STYLES.HOME.SOURCE + 'home.scss')
        .pipe(sass(STYLES.SETTINGS))
        .on('error', handleErrors)
        .pipe(gulp.dest(STYLES.HOME.BUILD));
});

gulp.task('Styles:About', function() {
    return gulp.src(STYLES.ABOUT.SOURCE + 'about.scss')
        .pipe(sass(STYLES.SETTINGS))
        .on('error', handleErrors)
        .pipe(gulp.dest(STYLES.ABOUT.BUILD));
});



gulp.task('Styles:Compress', function() {
    return gulp.src(STYLES.PATHS.BUILD + '**/**.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(STYLES.PATHS.BUILD));
});

gulp.task('Styles:Autoprefixer', function() {
    return gulp.src(STYLES.PATHS.BUILD + '**/**.css')
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(gulp.dest(STYLES.PATHS.BUILD));
});