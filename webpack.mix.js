const mix = require('laravel-mix')

mix.js('src/assets/app.js', '_site/assets/dist.js')
mix.sass('src/assets/app.scss', '_site/assets/dist.css')
