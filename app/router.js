import Ember from 'ember';
import config from './config/environment';

<<<<<<< HEAD
var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  this.resource('my-site', { path: '/' });
  this.route('my-menu', { path: '/my-menu'}, function () {
    this.route('my-about', { path: '/my-menu'}, function () {
    this.route('my-work');
    this.route('my-contact');
    });
  });
});
=======
const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router;
>>>>>>> e4f1d68af75e6cb2630385998b1e18712d8d8d43
