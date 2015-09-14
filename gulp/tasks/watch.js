var gulp     = require('gulp'),

    CONFIG   = require('../config');

gulp.task('Watch', function() {
    gulp.watch(CONFIG.STYLES.LANDING.SOURCE,    ['Styles:Landing']);
    gulp.watch(CONFIG.STYLES.ABOUT.SOURCE,      ['Styles:About']);


    gulp.watch(CONFIG.SCRIPTS.LANDING.SOURCE,   ['Scripts:Landing']);
    gulp.watch(CONFIG.SCRIPTS.ABOUT.SOURCE,     ['Scripts:About']);


    gulp.watch(CONFIG.IMAGES.SOURCE,        ['Images']);


    gulp.watch(CONFIG.LIBRARIES.SOURCE,     ['Libraries']);
});