// imports
var gulp = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer      = require('vinyl-buffer');

// build src
gulp.task('browserify', function(cb){	
 	return browserify('./src/app.js', {
            debug: true 
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./www/'));

    cb();
});

// build in release mode
gulp.task('browserify:release', function(cb){
	
 	return browserify('./src/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./www/'));

    cb();
});

// copy fonts
gulp.task('fonts', function(cb){
 	return gulp.src('./node_modules/winjs/fonts/**')
        .pipe(gulp.dest('./www/fonts/'));
    cb();
});

// copy assets
gulp.task('assets', function(cb){
 	gulp.src('./assets/**')
        .pipe(gulp.dest('./www/'));
        
    gulp.src('./node_modules/winjs/css/**')
        .pipe(gulp.dest('./www/css'));
        
    cb();
});

// copy templates
gulp.task('templates', function(cb){
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./www/'));
    cb();
});
