var gulp            = require('gulp'),
    size            = require('gulp-size'),
    rename          = require('gulp-rename'),
    runSequence     = require('run-sequence'),
    handleErrors    = require('../utils/handleErrors'),

    typescript      = require('gulp-typescript'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),

    SCRIPTS         = require('../config').SCRIPTS;



gulp.task('Scripts', function(callback) {
    runSequence('Scripts:Home', 'Scripts:About', callback)
});



gulp.task('Scripts:Development', function(callback) {
    return gulp.src(SCRIPTS.PATHS.BUILD)
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(uglify())
        .pipe(sourcemaps.write('/maps'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(SCRIPTS.HOME.BUILD))
        .pipe(size());
});

gulp.task('Scripts:Production', function(callback) {
    runSequence('Scripts:Home', 'Scripts:About', callback)
});



gulp.task('Scripts:Home', function() {
    return gulp.src(SCRIPTS.HOME.SOURCE)
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(uglify())
        .pipe(sourcemaps.write('/maps'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(SCRIPTS.HOME.BUILD))
        .pipe(size());
});

gulp.task('Scripts:About', function() {
    return gulp.src(SCRIPTS.ABOUT.SOURCE)
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(uglify())
        .pipe(sourcemaps.write('/maps'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(SCRIPTS.ABOUT.BUILD))
        .pipe(size());
});

