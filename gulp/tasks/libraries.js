var gulp        = require('gulp'),
    size        = require('gulp-size'),
    rename      = require('gulp-rename'),

    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),

    LIBRARIES   = require('../config').LIBRARIES;

gulp.task('Libraries', function() {
    return gulp.src(LIBRARIES.SOURCE)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('/maps'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(LIBRARIES.BUILD))
        .pipe(size());
});