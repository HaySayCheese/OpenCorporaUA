var gulp     = require('gulp'),

    CONFIG   = require('../config');

gulp.task('Watch', function() {
    gulp.watch(CONFIG.STYLES.APP.SOURCE     + '**/**.scss',    ['Styles:App']);
    gulp.watch(CONFIG.STYLES.LANDING.SOURCE + '**/**.scss',    ['Styles:Landing']);
    gulp.watch(CONFIG.STYLES.ABOUT.SOURCE   + '**/**.scss',    ['Styles:About']);


    gulp.watch(CONFIG.SCRIPTS.APP.SOURCE        + '**/**.ts',   ['Scripts:App']);
    gulp.watch(CONFIG.SCRIPTS.LANDING.SOURCE    + '**/**.ts',   ['Scripts:Landing']);
    gulp.watch(CONFIG.SCRIPTS.ABOUT.SOURCE      + '**/**.ts',   ['Scripts:About']);


    gulp.watch(CONFIG.IMAGES.SOURCE,        ['Images']);


    gulp.watch(CONFIG.LIBRARIES.SOURCE,     ['Libraries']);
});