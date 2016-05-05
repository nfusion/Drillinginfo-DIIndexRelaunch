import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('us-rig-count-widget', 'Integration | Component | us rig count widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{us-rig-count-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#us-rig-count-widget}}
      template block text
    {{/us-rig-count-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
