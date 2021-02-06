# CS481 - Senior Design Project

TODO:[CI Lab](https://shanep.github.io/capstone/labs/ci/)

## Project Epic

### App Name
Logzly

### Overview
Logzly will be a group journaling app for developers working on a certain project. It will allow team managers and members to see what the fellow developers are working on a particular day or throughout the week. Logzly could also be used as a platform to submit reflections about things that the members worked on throughout the week.

Logzly’s users will have the ability to view all the groups that they are a part of, view the entries that they have permission to see in that group, and have the ability to create new groups. Each group will have a list of members with one of the members being the owner. The owner can add/remove people to the group, change permissions, set a schedule when entries need to be submitted, remove members from the group and delete the group. Other members will have the ability to submit entries and leave the group.

### Potential Users
The potential users will be software developers on teams and their managers, or in an academic setting for teachers and students.

### Goals
The main goal of this project is to give students and/or developers a place to record an overview of their work, along with what they plan to work on next, and possibly any issues that they are running into. This will provide teams with an easy way to view what their peers are working on and for a way for that individual to keep track of their progress. 

Another goal is to connect the website with Github. This will allow for easy creation of teams and better integrations with the information on Github.  For example, posts submitted to the app could be tagged with tags associated with a repository.  Developers and managers could then sort and view posts by tag, so that they can easily view posts related only to their areas of responsibility.

Another goal for this project is to make a system for creating teams and viewable permission. So if the contributors on a Github project are not precisely what you are looking for you will be able to edit the teams and set who is able to view and not view each other's journal entries.

Each journal entry will be time stamped for the team manager to see when the developers submitted their entries. Teachers or managers will be able to set recurring deadlines for when journal entries must be submitted.

### Sample Use Case
A sample use case for this application is this project. Every week we must submit a journal entry to the Github repository. But this system is not the easiest process for the student or the teacher because the professor must dig through all the repositories in order to view the entries. So this application will provide an easy way for team members and the professor to view journal entries. And it will provide a better way to add entries instead of having to commit to the repository.

## Feedback from Shane

HA!! What a great project :) I could really use something like this. I can see so many applications outside of software development or the academic environment. For example, I can see this as a great way to do yearly employee evaluations. The employee would use this app during the year and the evaluation would be the employee and manager sitting down and reviewing the journal entries.  

I am excited to see the finished project and with your teams permission use it in my classes!


## Tech lab

For this project, we discussed that we will need both a frontend and backend, and with this will need both backend and frontend languages and frameworks. To start we discussed frontend frameworks and we quickly decided that we wanted to stick with one of the main three; Vue.js, Angular.js, and React.js. This is because these three frameworks have the most support and documentation available.  From these three we decided to go with React. This is because our combined experience with React outweighs either of the other two and we all still want to learn more about it. In addition, after some research, we found React to be very fast, scalable, and somewhat simple to use/learn. React and Angular also have some of the highest value right now in the job market, and in recent years React and Vue have been competing for the most popular framework.

Then we discussed backend frameworks and decided to go with nodeJS because we wanted to choose an all-javascript solution using the same package manager. Our research also concluded that nodeJS is fast because it uses the V8 engine developed for chrome which compiles javascript code into native machine code directly, thus increasing the speed and efficient execution of the code. Once decided on nodeJS we had to start looking into web frameworks for nodeJS and we decided on Express. We decided to use Express because it was easy to configure and customize. Using express would allow us to conveniently serve static files and resources from our application. 

Lastly, we also discussed a little bit about what databases we should use. Our first consideration was Firebase because we are considering using this for our authentication as well through GitHub. We also are considering a SQL database such as MySQL or PostgreSQL. We are still weighing the pros and cons of both of these options and are intending to have the decision made when we start developing our project.


## Planning Lab

TODO:[Planning Lab](https://shanep.github.io/capstone/labs/planning/)

- [Jane's Plan](planning/janedoe@u.boisestate.edu.md)
- John's Plan
- Bob's Plan
