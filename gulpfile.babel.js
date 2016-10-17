import gulp from 'gulp';
import del from 'del';
import gutil from 'gulp-util';
import runsequence from 'run-sequence';

const paths = {
  src: {
    css: 'semantic/dist/sematic.min.css',
    js: 'semantic/dist/sematic.min.js',
    misc: 'semantic/dist/themes/**',
  },
  dist: 'dist/',
};

gulp.task('dist:css', () =>
  gulp.src(paths.src.css)
    .pipe(gulp.dest(paths.dist))
);

gulp.task('dist:js', () =>
  gulp.src(paths.src.js)
    .pipe(gulp.dest(paths.dist))
);

gulp.task('dist:misc', () =>
  gulp.src(paths.src.misc)
    .pipe(gulp.dest(paths.dist))
);

gulp.task('dist:clean', () =>
  del(paths.dist)
);
