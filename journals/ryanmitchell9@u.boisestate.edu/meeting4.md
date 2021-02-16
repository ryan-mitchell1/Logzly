# Meeting 4

- Attendance: All attended

This week my team and I worked on the Build System Lab assignment. We worked on researching and creating our build.sh and clean.sh. The build.sh was relatively clear that we needed to call 'yarn install' from two different folders. This was done by using --cwd to run the install command from a different folder without having to cd into it. Then we worked through the clean.sh. This was relativly the same process but we needed to delete two .lock files and two node_module folders. To do this we tried to use 'find' but was unsuccessful to get this working for the node_modules for now, so we opted for 'rm'. Because we would have consistently needed to run yarn install from two places and/or delete files/folders from two places, it is very efficient to just have these two commands. 

My task for this week:

- Research the best testing framework for our project
- Work on using this testing framework to create a few example tests and a script to run them 




