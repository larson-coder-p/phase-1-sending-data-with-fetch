function submitData(name, email) {
    // Create the request body object
    const body = JSON.stringify({
      name: name,
      email: email
    });
  
    // Perform the POST request
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: body
    })
    .then(response => {
      // Handle non-200 responses
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Append the new id to the DOM
      const idElement = document.createElement('p');
      idElement.textContent = `New ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Handle errors and append the error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
  }
  
