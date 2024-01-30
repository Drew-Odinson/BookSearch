# BookSearch

Welcome to the Book Search Engine project! This application is a refactored Google Books API search engine, transitioning from a RESTful API to a more modern GraphQL API built with Apollo Server. Utilizing the MERN stack (MongoDB, Express.js, React, and Node.js), it offers a responsive and efficient way for avid readers to search and save their favorite books. The transition to GraphQL enhances performance and user experience by streamlining data queries and mutations.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)


## Features

| | |
| --- | --- |
|- -**GraphQL Integration:** Implementing Apollo Server for efficient data handling. |
| -- **User Authentication:** Enhanced middleware for secure login/signup in a GraphQL context. |
| - - **Dynamic Search:** Utilize Google Books API to fetch a wide range of books based on user queries. |
| - - **Save and Manage Books:** Users can save and manage their favorite books in their account.
 |
 | - - **Apollo Provider:** Ensures seamless communication between React front end and Apollo Server.
 || -- **Deployment on Render:** The application is deployed for robust access and reliability.
 | | - - **Responsive Design:** Optimized for a seamless experience across various devices and screens. |

### Technologies Used

| Technology | Description |
| --- | --- |
| Node.js |
| Express.js |
| MongoDB |
| Apollo Server |
| GraphQL |
| JWT |
| Render |


## Installation

Ensure you have Node.js, MongoDB, and npm installed before starting..

```bash

cd book-search-engine
# Install dependencies for server & client
npm install
cd client
npm install

# Run the application
npm start

```


Visit http://localhost:3000 in your web browser to view the application.

# Usage

Search for Books: Enter a search term to find books.
Save Books: Logged-in users can save books to their account.
Manage Saved Books: View and remove saved books from your account.


# Contributors

This project is open for contributions. Feel free to fork the repository and submit pull requests.



## License

 [MIT licensed](./LICENSE).