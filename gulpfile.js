var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    del = require('del'),
	ngHtml2Js = require("gulp-ng-html2js");
	spritesmith=require("gulp.spritesmith");

gulp.task("clean", function(cb) {
    del(['public/dist/bundle.min.css', 'public/dist/bundle.min.js','public/app/assets/templates/template-cache.js' ], cb);
});


gulp.task("bower", function() {

    var install = require("gulp-install");
    return gulp.src(["./bower.json"])
        .pipe(install());

});

gulp.task("build-js",["build-template-cache"], function() {
    return gulp.src("public/app/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.min.js"))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./public/dist"));
});

gulp.task("build-css", function() {
    return gulp.src("public/app/assets/stylesheets/scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.min.css"))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({ keepSpecialComments: 0 })) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./public/dist"));
});

gulp.task("build-template-cache", function(){
    return gulp.src("public/app/views/**/*.html")
    .pipe(ngHtml2Js({moduleName:"Application", prefix:"/views/"}))
    .pipe(concat("template-cache.js"))
    .pipe(gulp.dest("./public/app/assets/templates/"));
});

gulp.task('resources', function () {

    var spriteData = gulp.src('public/app/assets/images/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.min.png',
            cssName: '_sprite.scss',
            algorithm: 'top-down',
            padding: 5
        }));

    spriteData.css.pipe(gulp.dest('public/app/assets/stylesheets/scss/modules'));
    spriteData.img.pipe(gulp.dest('public/dist'))
});


gulp.task("build", ["clean","build-css", "build-js" ]);

gulp.task("default", function(){
   return gulp.watch(["public/app/**/*.js", "public/app/views/**/*.html", "public/app/assets/stylesheets/scss/**/*.scss"], ["build"]); 
});