import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('us-prod-cap-chart', 'Integration | Component | us prod cap chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{us-prod-cap-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#us-prod-cap-chart}}
      template block text
    {{/us-prod-cap-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
