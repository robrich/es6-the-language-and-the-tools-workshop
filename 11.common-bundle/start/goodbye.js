import $ from 'jquery';

const anounce = (name) => {
  console.log('goodbye '+name);
  $('body').append('goodbye '+name);
}
anounce('world');
