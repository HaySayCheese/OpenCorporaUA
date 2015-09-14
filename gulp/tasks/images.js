var gulp        = require('gulp'),
    changed     = require('gulp-changed'),
    imagemin    = require('gulp-imagemin'),

    IMAGES      = require('../config').IMAGES;

gulp.task('Images', function() {
    return gulp.src(IMAGES.SOURCE)
        .pipe(changed(IMAGES.BUILD))
        .pipe(imagemin())
        .pipe(gulp.dest(IMAGES.BUILD))
});