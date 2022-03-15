interface MovieSmall {
    title: string;
}

interface MoviePerson {
    director?: Person;
    actors?: Person[];
}

type Person = {
    name: string;
}

type Movie = MovieSmall & MoviePerson;

const moviesSmall: MovieSmall[] = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' },
    { title: 'Movie 5' },
  ];
  
  const moviesFull: Movie[] = [
    {
      title: 'Movie 1',
      director: { name: 'Ridley Scott' },
      actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
      title: 'Movie 2',
      director: { name: 'Ridley Scott' },
      actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
      title: 'Movie 3',
      director: { name: 'Ridley Scott' },
      actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
      title: 'Movie 4',
      director: { name: 'Ridley Scott' },
      actors: [{ name: 'Actor one' }],
    },
    {
      title: 'Movie 5',
      director: { name: 'Ridley Scott' },
      actors: [{ name: 'Actor one' }],
    },
  ];
  
  function getDirector(movie: Movie): string {
    return movie.director?.name ?? 'Unknown Director';
  }

  function getActors(movie: Movie): Person[] | string {
    return movie.actors ?? 'Unknown actors';
  }
  
  function getLeadingActor(movie: Movie): string {
    return movie?.actors?.[0]?.name ?? 'Unknown actor';
  }
  
  function getSecondaryActor(movie: Movie): string {
    return movie?.actors?.[1]?.name ?? 'Unknown actor';
  }
  
  function logMovie(movie: Movie): void {
    console.log('Title:', movie.title);
    console.log('Director:', getDirector(movie));
    console.log('Actors:', getActors(movie));
    console.log('Lead actor', getLeadingActor(movie));
    console.log('Second actor', getSecondaryActor(movie));
  }
  
  function logSmallMovies(movie: Movie) {
    logMovie(movie);
  }
  
  function logFullMovies(movie: Movie) {
    logMovie(movie);
  }
  
  moviesSmall.forEach((movie: Movie) => {
    console.group('Small movies');

    logSmallMovies(movie);

    console.groupEnd();
  });
  
  moviesFull.forEach((movie: Movie) => {
    console.group('Full movies');

    logFullMovies(movie);

    console.groupEnd();
  });