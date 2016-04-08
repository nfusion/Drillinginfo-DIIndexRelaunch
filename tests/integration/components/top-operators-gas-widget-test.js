import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-operators-gas-widget', 'Integration | Component | top operators gas widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-operators-gas-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#top-operators-gas-widget}}
      template block text
    {{/top-operators-gas-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
