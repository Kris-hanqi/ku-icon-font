var fontList = [
  { title: 'arrows', icon: 'arrows' },
  { title: 'arrows-alt', icon: 'arrows-alt' },
  { title: 'eye', icon: 'eye' },
  { title: 'eye-close', icon: 'eye-close' },
  { title: 'cog', icon: 'cog' },
  { title: 'home', icon: 'home' },
  { title: 'dashboard', icon: 'dashboard' },
  { title: 'avatar', icon: 'avatar' },
  { title: 'user', icon: 'user' },
  { title: 'lock', icon: 'lock' },
  { title: 'phone', icon: 'phone' },
  { title: 'business', icon: 'business' },
  { title: 'commodity', icon: 'commodity' },
  { title: 'publicity', icon: 'publicity' },
  { title: 'activity', icon: 'activity' },
  { title: 'order', icon: 'order' },
];

var app = new Vue({
  el: '#app',
  data: {
    fonts: fontList
  }
});
