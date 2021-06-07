"use strict";

import gulp from "gulp";

const requireDir = require("require-dir");

requireDir("./tasks/");

export const development = gulp.series("clean",
gulp.parallel(["views", "styleConcat", "script", "image"]),
    gulp.parallel("server"));

export const prod = gulp.series("clean", "sprite", "spritesvg",
    gulp.series(["views", "styleConcat", "script", "image"]));

export default development;
