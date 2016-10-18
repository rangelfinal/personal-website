import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import paths from './paths';

gulp.task('js', () =>
  gulp.src(paths.src.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dist(paths.dist.js))
);

// TODO: Minimify
