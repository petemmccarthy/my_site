import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router.map(function() {
    this.resource('my-site', { path: '/' });
});

// export default Router;
