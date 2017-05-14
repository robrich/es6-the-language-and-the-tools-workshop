/*global $:false */
const announce = (name) => {
  /*eslint no-console:2 */
  console.log('hello '+name);
  $('body').append('hello '+name);
}
announce('world');
