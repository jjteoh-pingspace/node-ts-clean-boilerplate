import del from 'del'
import * as gulp from 'gulp'
import * as ts from 'gulp-typescript'
import eslint from 'gulp-eslint'

const tsProject = ts.createProject('tsconfig.json')

gulp.task('clean', done => {
  return del(['dist'], done)
})

gulp.task('compile-ts', () => {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'))
})

gulp.task('lint', () => {
  const args = Object.values(process.argv)
  const opts = {
    quiet: !args.includes('--verbose'), // ignore warning
    fix: args.includes('--fix'), // auto fix as much error as possible
  }

  return gulp
    .src(['**/*.{ts,js}', '!node_modules/**']) // excluding files defined in .eslintignore file
    .pipe(eslint(opts))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task(
  'default',
  gulp.series('lint', 'clean', 'compile-ts', done => {
    done()
  }),
)
