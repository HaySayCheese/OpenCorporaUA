var gulp        = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('default', ['Development']);


gulp.task('Development', function(callback) {
    runSequence('Clean',
        'Libraries:Development',
        'Images:Development',
        'Styles:Development',
        'Scripts:Development',
        'Watch',
        callback
    )
});



gulp.task('Production', function(callback) {
    runSequence(
        'Clean',
        'Libraries:Production',
        'Images:Production',
        'Styles:Production',
        'Scripts:Production',
        'Watch',
        callback
    )
});