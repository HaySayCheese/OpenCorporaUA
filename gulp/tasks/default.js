var gulp        = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('default', function(callback) {
    runSequence('Clean',
        'Libraries',
        'Images',
        'Styles',
        'Scripts',
        'Watch',
        callback
    )
});