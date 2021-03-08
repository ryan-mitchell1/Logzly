# Ryan Mitchell

## User Story

As a user of Logzly, I need to be able to create, join, and manage groups so that I can have a more organized place to post logs. I also need to be able to select a specific group so that I can be navigated to that group’s log page.

## Tasks

1. I will need to create a front end for the group page with buttons for adding groups, selecting the groups, logging out, joining a group, and leaving/deleting groups. I will also need to add a view to display the groups that the user is a part of and additional UI features to add a pleasant user experience. 
2. I will need to add functionality to the user interface. This will include routing, opening a modal for creating a group and calling endpoints in the backend of our application.
3. I will need to create a model in Firebase for a group. This will be used to store information such as admin user, group name, group password, group invite code, update date, and create date.
4. I will need to create the endpoints and functionality for these endpoints for getting the group data for the user, creating a group, and joining a group. This will be done in the backend of our application and will need to create a group controller and group service classes.
5. I will need to create the endpoints and functionality for these endpoints for deleting, leaving, and removing members from the group. This will be done in the backend of our application and will need to add to the group controller and group service classes.

### Time estimation method

Our team mostly used estimation by analogy to estimate that each of my tasks is roughly 9 hours of work. To estimate by analogy you compare the project/tasks on hand to previous and very similar projects that have been completed in the past. I specifically found this method to be helpful because I have completed a few web applications in the past and very recently, my CS 471 project was somewhat similar to this. This made it easier to estimate how long it will take to complete various tasks like creating front-end user interfaces or creating endpoints and functionality.

## Definition of Done

- Task 1 DOD - I will know when I am done when the created user interface resembles somewhat of the wireframe that our team had previously created. If there are various changes from the wireframe like the color then once these differences have been approved by the team I will know that I am done.
- Task 2 DOD - I will know when I am done when the user interface can successfully route to different pages and successfully open a modal for creating a group. In addition, this will also need to communicate with the backend which I will know when I am done when the user interface can set off a ping in the backend.
- Task 3 DOD - I will know that I am done when I am able to create a group object with all of the fields needed through the Firebase UI.
- Task 4 DOD - I will know that I am done by having a set of unit/system tests that exercise my newly created endpoints. I can run my tests with the test.sh script and see the results of the tests in the console. My tests are also run on every commit with the results for the tests and other actions shown at https://github.com/shanep-capstone/cs481-s21-team_10/actions.
- Task 5 DOD -  I will know that I am done by having a set of unit/system tests that exercise my newly created endpoints. I can run my tests with the test.sh script and see the results of the tests in the console. My tests are also run on every commit with the results for the tests and other actions shown at https://github.com/shanep-capstone/cs481-s21-team_10/actions.



