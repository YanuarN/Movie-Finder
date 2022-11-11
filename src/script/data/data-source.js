class DataSource {
  static searchClub(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=16d1421&s=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.Search) {
            return Promise.resolve(responseJson.Search);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;