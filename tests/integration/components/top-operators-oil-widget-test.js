import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-operators-oil-widget', 'Integration | Component | top operators oil widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-operators-oil-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#top-operators-oil-widget}}
      template block text
    {{/top-operators-oil-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
