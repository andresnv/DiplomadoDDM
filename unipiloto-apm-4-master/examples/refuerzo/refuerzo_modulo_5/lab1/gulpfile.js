var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin');


/*
* Configuración de la tarea 'demo'
*/
gulp.task('html-min', function(){
	gulp.src('index.html')
		//.pipe(concat('index.min.html'))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('build/'))
});

gulp.task('js-min', function(){
	gulp.src('js/app.js')
		//.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
});