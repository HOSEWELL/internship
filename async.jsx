async function Movie() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data fetched using async/await:', data);
    } catch (error) {
      console.error('Error fetching data using async/await:', error);
    }
  }
  
  Movie();
  