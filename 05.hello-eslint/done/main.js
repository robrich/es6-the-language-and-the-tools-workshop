/*global $:false */
const anounce = (name) => {
  /* eslint no-console:0 */
  console.log('hello '+name);
  $('body').append('hello '+name);
}
anounce('world');
