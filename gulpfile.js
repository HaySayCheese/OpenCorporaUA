var gulp        = require('gulp'),
    del         = require('del'),

    ts          = require('gulp-typescript'),
    typescript  = require('typescript'),
    sourcemaps  = require('gulp-sourcemaps'),

    runSequence = require('run-sequence');


const PATHS = {
    SOURCE: 'static/source/',
    BUILD:  'static/build/'
};



// Default
gulp.task('default', function() {
    runSequence(
        'Clean',
        'TypeScript',
        'CopyHtml',
        'Watch'
    );
});


//Clean
gulp.task('Clean', function() {
    return del([PATHS.BUILD]);
});





// TypeScript
gulp.task('TypeScript:Main', function() {
    var tsProject = ts.createProject('tsconfig.json', {
        typescript: typescript
    });

    return gulp.src([PATHS.SOURCE + 'typings/**/**.ts', PATHS.SOURCE + 'scripts/main/**/**.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: PATHS.SOURCE
        }))
        .pipe(gulp.dest(PATHS.BUILD + 'main'));
});

gulp.task('TypeScript', [
    'TypeScript:Main'
]);







// Html Copy
gulp.task('CopyHtml:Main', function() {
    return gulp.src([PATHS.SOURCE + 'scripts/main/**/**.html'])
        .pipe(gulp.dest(PATHS.BUILD));
});

gulp.task('CopyHtml', ['CopyHtml:Main']);






// Watchers
gulp.task('Watch', function() {
    gulp.watch(PATHS.SOURCE + 'scripts/main/**/**.ts',      ['TypeScript:Main']);
    gulp.watch(PATHS.SOURCE + 'scripts/main/**/**.html',    ['CopyHtml:Main']);
});
