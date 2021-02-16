# Meeting 4

- Attendance: All attended

This week our team worked on the Build System lab. We put the commands needed to build our project in the build.sh file and the commands needed to remove the build artifacts in the clean.sh file. Since we are planning to employ an all-javascript solution in our project, it would have been kind of tedious to cd into the client and the server directory to execute a yarn install. Having a build script will help us execute those instructions conveniently from the root folder.

Here's what I'm planning to do this week:
- Look into how we can make the deletion of node_modules folder a bit more dynamic from the clean.sh file. Right now we are hardcoding the paths of the two node_modules directory in the script. Having it dynamic would allow us to delete node_modules from any location within our project. That way, if the location of the node_modules change somehow, the script should still be able to delete them without us needing to modify the script.