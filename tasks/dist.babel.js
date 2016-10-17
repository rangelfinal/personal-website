import gulp from 'gulp';
import runSequence from 'run-sequence';
import del from 'del';
import paths from './paths';

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

gulp.task('dist', () =>
  runSequence('dist:clean', ['dist:css', 'dist:js', 'dist:misc'])
);
