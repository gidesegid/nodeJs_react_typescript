# Example App Using Node, TypeScript, and React
This example app shows how to create a simple users list and their details  using Node and TypeScript, as well as a frontend to interact with it using React typescript.

clone the repo 
```bash
git clone https://github.com/gidesegid/nodeJs_react_typescript.git
```
This will install a local copy of the project. 

If you are familiar with Docker and have that installed in your laptom then you can run 
```bash
docker-compose up
```
After docker compose has initialized successfully then visit localhost:3000 and enjoy.

If you are not familiar with docker or you do not have necessary requirments to run docker then go ahead, install nodejs if you do not have yet.

Prerequisites: Node.js.

## Getting Started
After cloning the repository at the root folders run:
```bash
npm install
```
NB: The data in MOCK_DATA.json file came from "https://www.mockaroo.com/". It is a random data generator website.

After running npm install, all necessary dependencies will be installed and you are good to go.

To see the sample in a browser you need to run the server and the client react server.

There are two main folders: the first folder is for the backend(nodejs server written in typescript)  and the second folder is  frontend react typescript(client side script which is in react typescript)

### Run node js server(backendWithTypescript)
 Backend -- This folder consists of node js server with different sub folders underneath.
   #### model 
     This folder contains the mock data json folder
   #### controller
     This folder contains all the neccessary controlls for the routes.
   #### routes
     This folder contains all the routes to the server
   #### app.ts
      This file is the server file which you could call it to run the server 
### To run the server
   You can run the ts server by 
   ```bash
   npm run dev
   ```
   or to run it as js server then you need to write npm run build to convert the typescript based code to js code.
   ```bash
   npm run build
```
After building the js by npm run build , you will see a dist folder  which is being created and that means you have js server and it can run  by itself as js server . Start it by 
```bash
npm start
```
Congratulations you have a ts server and js server, what are you waiting for, go to browser/ or postman/ or any other tool that can help you to see the results of the two apis, and enjoy it at localhost:5000
When you open in a browser at localhost:5000 for example, you will see immidiately a list of ids and emails of few users in a json formated.
If you go to localhost:5000/user/1 then you will see list of information related to that particular user.
So these are the routes(two apis) that you can see with some results on the browser
```bash
localhost:5000
localhost:5000/user/20
```
you can change localhost:5000/user/20<------ to any number between 1 and 20.This numbers is the ids of users in the mock data json.



### Run react typescript(frontend)
This folder is a client side functionality of the project. It is react typescript . The user list and details of users are set as apart components which could be found under src/components.
When opened in a browser you will get a box which contains list of users and you can click the button "get details" under each list then you will be navigated to the next page which has extra information of that particular user.
```bash
npm install
npm start
```
So in general combination of the server and the front end together , you will see meaningfull idiomatic lists of users and a button underneath to help you to look further information of the user.
## Contributing
Pull requests or cloning are welcome. For major changes, please open an issue first to discuss what you would like to change.
## License
[MIT](https://choosealicense.com/licenses/mit/)