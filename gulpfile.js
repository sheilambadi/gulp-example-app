const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
var sass = require('gulp-sass');

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

//minify js
gulp.task('minify', function() {
   gulp.src('src/js/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest('dist/js'));
});

//compile sass to regular css
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
         .pipe(sass().on('error', sass.logError)) 
         .pipe(gulp.dest('dist/css'));
 });

 //default message ~ run all tasks using 'gulp' cmd
gulp.task('default', ['message', 'copyHTML', 'imageMin', 'minify', 'sass'] );