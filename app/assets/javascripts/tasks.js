// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  console.log('document is ready!', new Date());
	$('#task_name').focus();

	$('.modal-footer .btn-primary').click(function() {
    console.log('save the changes!');
  });
});

$(document).on('turbolinks:load', function() {
  $('#task_name').focus();

  $('.modal-footer .btn-primary').click(function() {
    $('.modal-body form').submit();
  });
});
