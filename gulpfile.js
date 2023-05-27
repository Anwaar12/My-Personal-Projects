let gulp = require("gulp");
var autoprefixer = require("autoprefixer");
gulp.task("styles", function () {
  gulp.src("styles.css").pipe("autoprefixer").pipe(gulp.dest("build"));
});
