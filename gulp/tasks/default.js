var gulp            = require('gulp'),
    runSequence     = require('run-sequence'),

    DEBUG           = require('../config').DEBUG;


gulp.task('default', function(callback) {
    DEBUG = true;


    runSequence('Clean',
        'Libraries',
        'Images',
        'Styles',
        'Scripts',
        'Watch',
        callback
    )
});



gulp.task('production', function(callback) {
    DEBUG = false;

    runSequence('Clean',
        'Libraries',
        'Images',
        'Styles',
        'Scripts',
        'Watch',
        callback
    )
});



gulp.task('dev', function(callback) {
    DEBUG = true;

    runSequence('Clean',
        'Libraries',
        'Images',
        'Styles',
        'Scripts',
        'Watch',
        callback
    )
});