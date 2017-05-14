import $ from 'jquery';

const announce = (name) => {
  console.log('goodbye '+name);
  $('body').append('goodbye '+name);
}
announce('world');
