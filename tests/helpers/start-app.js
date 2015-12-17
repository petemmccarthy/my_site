import Ember from 'ember';
import Application from '../../app';
// <<<<<<< HEAD
import Router from '../../router';
import config from '../../config/environment';
//
export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
// =======
// import config from '../../config/environment';

// export default function startApp(attrs) {
//   let application;
//
//   let attributes = Ember.merge({}, config.APP);
//   attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  // Ember.run(() => {
// >>>>>>> e4f1d68af75e6cb2630385998b1e18712d8d8d43
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
