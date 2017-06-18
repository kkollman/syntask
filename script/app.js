//call script as jQuery function to ensure it's working
$(function() {
console.log('keknuw');
//panel animations
const hideMenuItem = function() {
  $(this).next('.menu__item').slideToggle(700, 'easeInOutBack');
}
//select left panel
const leftPanelMenu = $('.panel--left .panel__menu');

//by clicking on each element title you can hide this element
leftPanelMenu.on('click', '.menu__item-title', hideMenuItem);

});
