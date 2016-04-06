import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('top-ops');
  this.route('rig-count');
  this.route('us-permits');
  this.route('us-gas-prod-cap');
  this.route('us-oil-prod-cap');
  this.route('us-prod-cap');
  this.route('us-prod-cap-charts');
  this.route('oil-prod');
  this.route('gas-prod', function(){
    this.route('month/:monthindex');
  });
});

export default Router;
