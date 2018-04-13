const gulp = require('gulp');

/*
    --TOP LEVEL FUNCTIONS--
    gulp.task - define tasks
    gulp.build - point to files to use
    gulp.dest - points to folder to output
    gulp.watch - watch files and folders for changes
*/

//logs message ~ run using 'gulp message'
gulp.task('message', function(){
    return console.log('Gulp is running...');
    
});

//default message ~ run using 'gulp'
gulp.task('default', function(){
    return console.log('Gulp is running...');
    
});