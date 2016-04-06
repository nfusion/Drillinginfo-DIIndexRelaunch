import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('oil-production-widget', 'Integration | Component | oil production widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{oil-production-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#oil-production-widget}}
      template block text
    {{/oil-production-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
