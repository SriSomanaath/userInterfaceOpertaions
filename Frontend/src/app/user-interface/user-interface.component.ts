import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  ngOnInit(): void {
    const userForm = document.getElementById('userForm') as HTMLFormElement;
    userForm.addEventListener('submit', (event) => this.submitUserForm(event));
  }

  submitUserForm(event: Event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(event.target as HTMLFormElement);
    const userData = {
      username: formData.get('username'),
      email: formData.get('email'),
    };
    console.log("userInterface",userData);
    // Send data to the backend using Fetch API
    fetch('http://localhost:3000/api/users', {
      method: 'POST', // Use the appropriate HTTP method (POST, PUT, GET, DELETE, etc.)
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(userData), // Convert data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from the server:', data);
        // Do something with the response data, e.g., display a success message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., display an error message to the user
      });
  }
}
