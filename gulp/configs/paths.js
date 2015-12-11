'use strict';

var bowerPath = './vendor/assets/bower_components/';

module.exports = {
  scripts: {
    origin: {
      lib:[
        bowerPath + 'underscore/underscore.js',
        bowerPath + 'momentjs/moment.js',
        bowerPath + 'angular/angular.js',
        bowerPath + 'angular-route/angular-route.js',
        bowerPath + 'angular-sanitize/angular-sanitize.js',
        bowerPath + 'angular-cookies/angular-cookies.js'
      ],
      app:[
        // app declaration
        './app/assets/javascripts/app.js'

        // services
        // bowerPath + 'oas-services/services/services.js',
        // bowerPath + 'oas-services/services/configurators/DfpConfigService.js'
      ]
    },
    destination: './vendor/assets/bower_components/dist/js'
  },

  templates: {
    origin: [
    ],
    destination: './vendor/assets/bower_components/dist/js'
  },

  styles: {
    watch: [
      './app/assets/stylesheets/app.scss',
      './app/assets/stylesheets/**/*.scss'
    ],
    origin: [
      './app/assets/stylesheets/app.scss',
    ],
    destination: './vendor/assets/bower_components/dist/css'
  },

  images: {
    origin: [
      './app/assets/images/*.{png,gif,jpg}',
      './app/assets/images/**/*.{png,gif,jpg}',
      './app/assets/images/**/**/*.{png,gif,jpg}',
      '!./app/assets/images/sprite/*.{png,gif,jpg}'
    ],
    destination: './public/dist/images'
  },

  sprites: {
    origin: [
      './app/assets/images/sprite/*.{png,gif,jpg}'
    ],
    destination: {
      styles: './app/assets/stylesheets/local',
      images: './public/dist/images/sprite'
    }
  }
};
