$(document).ready(function() {
    $('#get-section-btn').click(function() {
      $.ajax({
        type: 'GET',
        url: '{% url "get_section" %}',
        success: function(response) {
          $('#section-container').html(response.section_html);
        },
        error: function(response) {
          console.log('Bir hata oluştu!');
        }
      });
    });
  });
  

