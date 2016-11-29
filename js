// The anonymous function below will fire on page load

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');

  var $url    = $('.flexsearch-input').val()|| 'http://www.mattbowytz.com/simple_api.json?data=all';

  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $url,
      method: 'GET'
    }).success(function(data) {
      var list = '';
      $.each(data.data.interests, function(i, x) {
        list += '<li>' + x + '</li>';
      });
      $('.items').append(list).fadeIn('slow');
    }).fail(function(data) {
      console.log(data);
    });
  });
})();
