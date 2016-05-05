import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-ten', 'Integration | Component | top ten', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-ten}}`);

  assert.equal(this.$().text().trim(), 'Data not available.');

  // Template block usage:
  this.render(hbs`
    {{#top-ten}}
      template block text
    {{/top-ten}}
  `);

  assert.equal(this.$().text().trim(), 'Data not available.');
});
