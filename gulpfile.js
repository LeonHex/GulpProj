var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', [
    'uglify',
    'print'
]);

gulp.task('uglify', function(){
    gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('release'));
});

gulp.task('print', function(){
    console.log('print task is running...');
});

/* 
    watch file change and do something
*/
gulp.task('watch', function(){
    gulp.watch('**/*.js', ['print']);
});