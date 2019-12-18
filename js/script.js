jQuery(document).ready(function(){
    axios.get('https://csc225.mockable.io/movies')
        .then(function(response){
            console.log(response.data);
            var moviesHTML = response.data.map(function(movie){
                
            return '<p class="movie" data-movie="'+movie.id+'">' + 
                movie.title + '</p>' ;
            });
            
            $('#movies').html(moviesHTML);
            $('#current-movie').html('<p class="card2">Click on a movie to view info :)</p>');

        });
        $('#movies').html('<img class="loading" src="https://i.gifer.com/ZKZg.gif" alt="loading">');
        $('#current-movie').html('<img class="loading" src="https://i.gifer.com/ZKZg.gif" alt="loading">');

        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'https://csc225.mockable.io/movies/' + id;
            
            axios.get(url).then(function(response){
                var movie = response.data;
                var moviePoster ='<img src="' + movie.poster + '">';
                var movieHTML = '<p> Title: ' + movie.title + '</p>';
                movieHTML += '<p> Director: ' + movie.director + '</p>';
                movieHTML += '<p> Release date: ' + movie.release + '</p>';
                
                $('#current-movie').html(moviePoster + movieHTML);
                
            });

            $('#current-movie').html('<img class="loading" src="https://i.gifer.com/ZKZg.gif" alt="loading">');

        });



        
});
