var gulp    = require('gulp'),
    del     = require('del'),

    PATHS   = require('../config').PATHS;

gulp.task('Clean', function() {
    return del([PATHS.BUILD]);
});