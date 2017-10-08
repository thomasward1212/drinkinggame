const gulp = require('gulp');
const path = require('path');
const tsPipeline = require('gulp-webpack-typescript-pipeline');
const mocha = require('gulp-mocha');

tsPipeline.registerBuildGulpTasks(
  gulp,
  {
    entryPoints: {
      bundle: './src/index.ts'
    },
    outputDir: path.join(__dirname, 'public', 'dist')
  }
);

gulp.task('build:dev', ['tsPipeline:build:dev']);
gulp.task('build:release', ['tsPipeline:build:release']);
gulp.task('watch', ['tsPipeline:watch']);
gulp.task('test', () => {
  return gulp.src('testing/**/*.test.ts')
    .pipe(mocha({
      compilers: [
        'ts:ts-node/register'
      ],
      reporter: 'spec'
    }));
});
