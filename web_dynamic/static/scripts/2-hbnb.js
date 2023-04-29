#!/usr/bin/node
$(document).ready(function() {
  let amenities = {};
  $('.amenity-checkbox').on('change', function() {
    let amenityId = $(this).parent().data('id');
    if ($(this).is(':checked')) {
      amenities[amenityId] = $(this).parent().data('name');
    } else {
      delete amenities[amenityId];
    }
    let amenitiesList = Object.values(amenities).join(', ');
    $('.amenities h4').text('Amenities: ' + amenitiesList);
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
  if (textStatus === 'success' && data.status === 'OK') {
    $('#api-status').addClass('available');
  } else {
    $('#api-status').removeClass('available');
  };
});
