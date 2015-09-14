var gulp            = require('gulp'),
    rename          = require('gulp-rename'),
    gulpif          = require('gulp-if'),
    runSequence     = require('run-sequence'),
    handleErrors    = require('../utils/handleErrors'),

    typescript      = require('gulp-typescript'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),

    SCRIPTS         = require('../config').SCRIPTS,
    DEBUG           = require('../config').DEBUG;



gulp.task('Scripts', function(callback) {
    runSequence('Scripts:App','Scripts:Landing', 'Scripts:About', callback)
});



gulp.task('Scripts:App', function() {
    return gulp.src(SCRIPTS.APP.SOURCE + 'AppModule.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(gulpif(DEBUG, uglify()))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(SCRIPTS.APP.BUILD));
});

gulp.task('Scripts:Landing', function() {
    return gulp.src(SCRIPTS.LANDING.SOURCE + 'LandingModule.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(gulpif(DEBUG, uglify()))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(SCRIPTS.LANDING.BUILD));
});

gulp.task('Scripts:About', function() {
    return gulp.src(SCRIPTS.ABOUT.SOURCE)
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(gulpif(DEBUG, uglify()))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(SCRIPTS.ABOUT.BUILD));
});