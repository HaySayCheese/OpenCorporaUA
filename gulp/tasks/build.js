var gulp        = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build', function(callback) {
    runSequence('clean', ['fonts', 'libraries', 'images', 'sass', 'scripts'], callback)
});