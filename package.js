Package.describe({
  name: 'krisn:meteor-slick-slider',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Slickjs slider for meteorjs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteorjs-packages/meteor-slick-slider',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  
  api.addFiles('lib/slick/slick.min.js', 'client');
  api.addFiles('lib/slick/slick.css', 'client');
  
  api.addAssets('lib/slick/fonts/slick.ttf', 'client');
  api.addAssets('lib/slick/fonts/slick.woff', 'client');
  api.addAssets('lib/slick/ajax-loader.gif', 'client');
  
  
  api.addFiles('lib/slick/slick-theme.css', 'client');


});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('krisn:meteor-slick-slider');
  api.mainModule('meteor-slick-slider-tests.js');
});
