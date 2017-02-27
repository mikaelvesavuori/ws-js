const config = require("./config.js");

const gulp = require("gulp");
const babel = require("gulp-babel");
const browsersync = require("browser-sync");
const eslint = require("gulp-eslint");
const reporter = require("gulp-reporter");
const plumber = require("gulp-plumber");
const ts = require("gulp-typescript");

gulp.task("babel", function() {
	gulp.src("app.js")
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest("prod/"))
});

gulp.task("eslint", function() {
	gulp.src("app.js")
		.pipe(plumber())
		.pipe(eslint()).on("error", errorHandler)
		.pipe(reporter())
		.pipe(eslint.format());
});

gulp.task("typescript", function () {
	return gulp.src("typescript/**/*.ts")
		.pipe(ts({
			noImplicitAny: false,
			out: "typescript.js"
		}))
		.pipe(gulp.dest("prod/"));
});

gulp.task("default", ["watch"], function() { });

gulp.task("watch", ["browsersync"], function() { });

gulp.task("browsersync", function() {
	browsersync(config.browsersync);

	gulp.watch("*.{css,html}", browsersync.reload);
	gulp.watch("**/*.js", ["babel", "eslint"], browsersync.reload);
	gulp.watch("**/*.ts", ["typescript"], browsersync.reload);
});

function errorHandler (error) {
	console.log(error.toString());
	this.emit("end");
};

	//babel: {
		//src: [dev + "scripts/js/**//*/",
			//"!" + dev + "scripts/js/_unused/**/*",
			//"!" + dev + "scripts/js/nocompile/**/*",
			//"!" + dev + "scripts/js/init/**/*"
			// ],
		//dest: dev + "scripts/compiled/"
	//},
/*
const config = require("../config.js");

const gulp = require("gulp");
const browsersync = require("browser-sync");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const scss = require("postcss-scss");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const colorguard = require("colorguard");
const flexibility = require("postcss-flexibility");
const ofi = require("postcss-object-fit-images");
//const doiuse = require("doiuse");
//const perfectionist = require("perfectionist");
const gulpFilter = require("gulp-filter");
const rename = require("gulp-rename");

gulp.task("sass", function () {
	const processors = [
		precss(config.precss.options),
		autoprefixer(config.autoprefixer.options),
		colorguard(),
		flexibility(),
		ofi()
		//doiuse(config.doiuse.options),
		//perfectionist(config.perfectionist.options)
	];

	const filter = gulpFilter(["*.css", "!*.map"], { restore: true });
	browsersync.notify("Compiling Sass");

	return gulp.src(config.sass.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on("error", sass.logError))//, browsersync.notify("Error in Sass")))
		.pipe(postcss(processors, {syntax: scss}))
		//.pipe(filter)
		.pipe(sourcemaps.write("maps")) //, { includeContent: false, sourceRoot: "Static/sass/"}))
		//.pipe(filter.restore)
		//.pipe(rename({dirname: ""}))
		.pipe(gulp.dest(config.sass.dest))
		.pipe(browsersync.stream());
});
*/
