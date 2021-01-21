## Gatling Corp JS project

The goal of this small project is to create a small webapp displaying users and their related posts (data are located
on [jsonplaceholder](https://jsonplaceholder.typicode.com)).

Use this project, which has already yarn configured and the table of users implemented. The architecture of the project
is up to you. Please code as you would do in your everyday work.

#### Specifications

- [x] Add the option to fetch each user posts on [jsonplaceholder](https://jsonplaceholder.typicode.com) and display
  them with their user.
- [x] The name of each user should be editable, and should send the update to the server (note that the update is faked
  on jsonplaceholder).
- [x] Display the number of users living in an Appt, and in a Suite (field address.suite)

##### Bonus

- [x] add a spinner while information is loading
- [x] add css
- [x] use redux
- [x] split the application into different pages
- [x] add tools typically used in a development environment (linters, code formatter, ...)

##### Bonus 2

- [x] units tests & snapshot tests (```yarn test```)
- [x] Storybook (```yarn storybook```)
