// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var gutil = require('gulp-util');
var jsonminify = require('gulp-jsonminify');
var minifyHTML = require('gulp-minify-html');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var notify = require('gulp-notify');
var mainBowerFiles = require('main-bower-files');

// bower files
gulp.task('bower-files', function () {
    var RegEx = (/.*\.min.js$/i);
    gulp.src(mainBowerFiles({
        filer: RegEx
    }), {
        base: 'bower_components'
    })
        .pipe(gulp.dest('www/bower_components'));
});

// Clean
gulp.task('clean', function () {
    return gulp.src('build', {
            read: false
        })
        .pipe(clean());
});

// Minify HTML
gulp.task('min-html', function () {
    var opts = {
        empty: true,
        cdata: true,
        comments: false,
        conditionals: true,
        spare: true,
        quotes: true
    };
    gulp.src('src/./*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('www'));
    gulp.src('src/partials/./*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('www/partials'));
    gulp.src('src/templates/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('www/templates'));
});

// Minify JSON
gulp.task('min-json', function () {
    return gulp.src('src/json/**/*.json')
        .pipe(jsonminify())
        .pipe(gulp.dest('www/json'));
});

// Prefix & Minify CSS
gulp.task('min-css', function () {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('www/css'));
});

// Minify JS & concatenate
gulp.task('min-js', function () {
    gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('www/js'))
        .on('error', gutil.log);
    gulp.src('bower_components/angulartics/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('angulartics.min.js'))
        .pipe(gulp.dest('www/bower_components/angulartics'))
        .on('error', gutil.log);
    gulp.src('bower_components/SHA-1/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('SHA-1.min.js'))
        .pipe(gulp.dest('www/bower_components/SHA-1'))
        .on('error', gutil.log);
});

// Lint Task
gulp.task('lint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Direct Copy
gulp.task('copy', function () {
    gulp.src('src/img/**').pipe(gulp.dest('www/img'));
    gulp.src('src/partials/**').pipe(gulp.dest('www/partials'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['lint', 'min-js']);
    gulp.watch('src/css/*.css', ['min-css']);
    gulp.watch('src/json/**/*.json', ['min-json']);
    gulp.watch('src/templates/*.html' ['min-html-templates']);
    gulp.watch('src/partials/*.html' ['min-html-partials']);
});

// Default Task
gulp.task('default', ['lint', 'bower-files', 'min-html', 'min-css', 'min-js', 'min-json', 'copy', 'watch']);
