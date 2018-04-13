const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

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

//copy all html files to dist folder
gulp.task('copyHTML', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//optimize image
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);