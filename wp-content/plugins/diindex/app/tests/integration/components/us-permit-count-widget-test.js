import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('us-permit-count-widget', 'Integration | Component | us permit count widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{us-permit-count-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#us-permit-count-widget}}
      template block text
    {{/us-permit-count-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
