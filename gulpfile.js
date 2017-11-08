var gulp         = require('gulp'), // Подключаем Gulp
    less         = require('gulp-less'), //Подключаем Less пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
    htmlmin       = require('gulp-html-minifier');// Подключаем пакет для минификации HTML


//  таск Less+префиксы
gulp.task('less', function(){ // Создаем таск Less
    return gulp.src('app/less/*.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


//  таск browser-sync
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


//  таск для минификации
gulp.task('css-libs', ['less'], function() {
    return gulp.src('app/css/style.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

// таск для минификации HTML
gulp.task('minify', function() {
    gulp.src('app/*.html')// Выбираем файл для минификации
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app'))// Выгружаем в папку app
});

// Наблюдение
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/less/*.less', ['less']); // Наблюдение за sass файлами в папке less
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
});


// таск сжимаем изображения
gulp.task('img', function() {
    return gulp.src('app/img/*') // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});


// Удаляем папку dist перед сборкой
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

// продакшен
gulp.task('build', ['clean', 'img', 'css-libs', 'minify'], function() {

    var buildCss = gulp.src([ // Переносим библиотеки css в продакшен
            'app/css/*.min.css',

        ])
        .pipe(gulp.dest('dist/css'))

    var buildHtml = gulp.src([ // Переносим библиотеки html в продакшен
            'app/index.min.html',

        ])
        .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);