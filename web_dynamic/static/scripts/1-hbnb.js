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

  