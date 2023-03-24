import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import rename from 'gulp-rename';
import log from 'fancy-log';
import fs from 'fs';
import path from 'path';
import mjml2html from 'mjml';
import { registerComponent } from 'mjml-core';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    const actualFilePath = path.join(dir, file);

    const filePath = fs.statSync(actualFilePath).isDirectory()
      ? walkSync(actualFilePath, filelist)
      : actualFilePath;

    if (filePath.includes('.js')) {
      filelist.push(filePath);
    }
  })
  return filelist;
}

const compile = () => gulp
  .src(path.normalize('components/**/*.ts'))
  .pipe(
    babel({
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      plugins: [
        "@babel/plugin-proposal-class-properties"
      ]
    }),
  )
  .on('error', log)
  .pipe(rename({ suffix: '.compiled' }))
  .pipe(gulp.dest('libs'))
  .on('end', () => {
    const watchedComponents = walkSync('./libs');

    console.log('watchedComponents', watchedComponents)
    watchedComponents.forEach((compPath) => {
      const fullPath = path.join(process.cwd(), compPath)
      delete require.cache[fullPath]
      registerComponent(require(fullPath).default)
    });

    fs.readFile(path.normalize('./index.mjml'), 'utf8', (err, data) => {
      if (err) throw err
      const result = mjml2html(data)
      fs.writeFileSync(path.normalize('./index.html'), result.html)
    });
  })

gulp.task('build', compile);

gulp.task('watch', () => {
  compile()
  return watch([path.normalize('components/**/*.js'), path.normalize('index.mjml')], compile)
})
