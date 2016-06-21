import $ from 'jquery';

const anounce = (name) => {
  console.log('hello '+name);
  $('body').append('hello '+name);
}
anounce('world');
