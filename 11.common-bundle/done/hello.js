import $ from 'jquery';

const announce = (name) => {
  console.log('hello '+name);
  $('body').append('hello '+name);
}
announce('world');
