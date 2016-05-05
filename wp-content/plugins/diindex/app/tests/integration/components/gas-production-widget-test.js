import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gas-production-widget', 'Integration | Component | gas production widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gas-production-widget}}`);

  assert.equal(this.$().text().trim(), 'Data not available.');

  // Template block usage:
  
  this.render(hbs`
    {{#gas-production-widget}}
      template block text
    {{/gas-production-widget}}
  `);

  assert.equal(this.$().text().trim(), 'Data not available.');
});
