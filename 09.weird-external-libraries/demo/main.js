import $ from 'jquery';
const Handlebars = window.Handlebars; // handlebars doesn't play well with webpack

let template = `<div>
  <h2>Hello {{name}}</h2>
  <p>Tweet me at <a href="https://twitter.com/{{twitterHandle}}">@{{twitterHandle}}</a></p>
</div>`;

let templateFn = Handlebars.compile(template);

let data = {
  name: 'Rob',
  twitterHandle: 'rob_rich'
}
let html = templateFn(data);

let container = $('#container');
$('#container').html(html);
