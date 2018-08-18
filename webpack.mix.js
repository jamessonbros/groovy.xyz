const mix = require('laravel-mix')

// styles
mix.sass('src/assets/sass/app.scss', 'src/assets/dist/build.css')

// scripts
mix.js('src/assets/js/app.js', 'src/assets/dist/build.js')
