# connex-one-express
Connex-one-express is the backend API for the Connex One technical challenge.

# Download repository
Copy the SSH key from the repository and open your terminal to the designated path you wish to copy the project into. 
<br/>
<br/>
Run the command:
``` 
git clone <SSH_KEY>
```
# Setting up the project
Once you have downloaded the project, you need to run NPM to download all the required packages the project requires.
<br/>
To do so, go back to the terminal and move to the project directory and run the command:
```
npm i
```
Once the download is complete add a .env file to the root of the directory, this is where we will add the server port and the domains for both the frontend application and backend.
<br>
The env variables are called:
```
FRONTEND_URL=
BACKEND_URL=
PORT=
```
NOTE: The variables that concern the URLs do not require the forward slash '/' at the end, as these variables are only for CORS Origin Access Be sure that the backend URL port matches the PORT variable.

Add the preffered URLs and Port that you want for the application.
eg.
```
FRONTEND_URL='http://localhost:3000'
BACKEND_URL='http://localhost:3001'
PORT=3001
```
<br/>
This project uses Nodemon to run the local server and the necessary script has already been created. To run the project open the terminal and write:

```
npm run devstart
```
Note: This project uses Typescript, so this custom script compiles the project first into the '/dist' folder. Nodemon runs it from there.
<br/>
# Running tests
Supertest and Jest are used to test the routes of this project. To simply test the routes run the command:
```
npx jest
```
