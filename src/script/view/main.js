import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const MovieListElement = document.querySelector('movie-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    MovieListElement.movies = results;
  };

  const fallbackResult = message => {
    MovieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
