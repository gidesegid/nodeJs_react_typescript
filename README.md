# Example App Using Node, TypeScript, and React
This example app shows how to create a simple users list and their details  using Node and TypeScript, as well as a frontend to interact with it using React typescript.

Prerequisites: Node.js.

## Getting Started
To install this example application, run the following commands:
```bash
git clone https://github.com/gidesegid/nodeJs_react_typescript.git

Go to specific folder and run
npm install
```
This will install a local copy of the project. 


NB: The data in MOCK_DATA.json file came from "https://www.mockaroo.com/". It is a random data generator website.

After running npm install, all necessary dependencies will be installed and you are good to go.

To see a sample in a browser you need to run any one or maybe both of the servers.

There are two main folders: the first folder is for the backend(nodejs server written in typescript)  and the second folder is  frontend react typescript(client side script which is in react typescript)

At each folders you have to install the npm package by "npm install" and run them by npm run dev in the backend folder or npm start in the frontend folder.

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
After running the npm run build , you will see a dist folder  which is being created and that means you have js server and it can run  by itself as js server . Start it by 
```bash
npm start
```
Congratulations you have a ts server and js server, what are you waiting for, go to browser and enjoy it at localhost:5000
When you open in a browser at localhost:5000, you will see immidiately a list of ids and emails of few users as a json.
If you go to localhost:5000/user/1 then you will see list of information related to that particular user.
So these are the routes that you can see with some results on the browser
```bash
localhost:5000
localhost:5000/user/20
```
you can change localhost:5000/user/20<------ to any number between 1 and 20.This numbers is the ids of users in the mock data json.


### Run react typescript(frontend)
This folder is a client side functionality of the project. It is react typescript 
```bash
npm install
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
## License
[MIT](https://choosealicense.com/licenses/mit/)