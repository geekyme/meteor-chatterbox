Package.describe({
  summary: 'A smart package that provides user-to-user chatting system like facebook messages.'
});

Package.on_use(function (api) {
  api.use(['underscore', 'deps', 'templating', 'spacebars', 'ui', 'stylus', 'jade'], 'client');
  

  api.add_files(['chatterbox.jade', 'chatterbox_client.js', 'chatterbox.styl'], 'client');
  api.add_files(['chatterbox_server.js'], 'server');
  //api.add_files('overrides.js', 'client');
  //api.export('Layout', 'client');
});

Package.on_test(function (api) {
  // api.use('tinytest', 'client');
  // api.use('test-helpers', 'client');
  // api.use('blaze-layout');
  // api.use('templating');
  // api.add_files('layout-test.html', 'client');
  // api.add_files('layout-test.js', 'client');
});
