import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('us-production-capacity-widget', 'Integration | Component | us production capacity widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{us-production-capacity-widget}}`);

  assert.equal(this.$().text().trim(), 'Data not available.');

  // Template block usage:
  this.render(hbs`
    {{#us-production-capacity-widget}}
      template block text
    {{/us-production-capacity-widget}}
  `);

  assert.equal(this.$().text().trim(), 'Data not available.');
});