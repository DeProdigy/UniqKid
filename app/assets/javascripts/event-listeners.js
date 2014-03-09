$( document ).ready(function() {
  console.log( "Loaded Main Page" );

  $('#signup-form').on('submit', function(event){
    event.preventDefault();

    $(function() {
      $('#signup-form').chimpaxify({'url': 'http://uniqkid.us3.list-manage2.com/subscribe/post?u=f4f4089d6992b16f24b9e6640&amp;id=8d386d8bbc'});
      console.log('submited');
    });

  });
});