function Catch() {
    fetch('https://freetestapi.com/api/v1/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        console.log('Data fetched using then/catch:', data);
      })
      .catch(error => {
        console.error('Error fetching data using then/catch:', error);
      });
  }
  
Catch();
  