var gulp            = require('gulp'),
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



gulp.task('Scripts:Home', function() {
    return gulp.src(SCRIPTS.HOME.SOURCE)
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(SCRIPTS.HOME.BUILD));
});

gulp.task('Scripts:About', function() {
    return gulp.src(SCRIPTS.ABOUT.SOURCE)
        .pipe(sourcemaps.init())
        .pipe(typescript(SCRIPTS.SETTINGS))
        .on('error', handleErrors)
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(SCRIPTS.ABOUT.BUILD));
});



gulp.task('Scripts:Compress', function() {
    return gulp.src(SCRIPTS.PATHS.BUILD + '**/**.js')
        .pipe(uglify())
        .pipe(gulp.dest(SCRIPTS.HOME.BUILD));
});
