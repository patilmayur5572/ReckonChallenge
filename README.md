# ReckonChallenge
Reckon Challenge - A Node js server side application which uses Express framework. Below are the requirements for the project. <br>

### Requirements
Given the two endpoints provided, provide working code that calls 
* Endpoint1 to get the upper and lower bound of numbers calls. 
* Endpoint2 to get a set of divisors and the output required.
* For all numbers inclusive of the lower and upper bound, go through and check if it divisible by each of    the divisors provided in Endpoint2, If the number is wholly divisible , log the output as a result. If     multiple outputs are satisfied, print outputs that are satisfied.

# Getting Started
Please clone ReckonChallenge project into your local system to work with it. <br>

### Checking out the source-code from Github:
You need Git for cloning the project into your system. Please follow [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for Git installation. For cloning the the project, open Git Bash and give the following command: 
git clone https://github.com/patilmayur5572/ReckonChallenge.git <br>

### NPM and Node.js installation:
Please follow these instruction to download and install 
[Node Package Manager(npm) and Node.js](https://www.npmjs.com/get-npm). <br>

### Starting the ReckonChallenge project
After completing the installations, navigate to `ReckonChallenge/` directory and give command <br>
`npm intall`<br>
This would install all the package dependencies for the server from `package.json file` in the `node_modules` directory. <br>  

Once the installation has finished, navigate to `ReckonChallenge/server.js` and verify the server port address. By default the port number would be 3000, however it can be changed as per requirement. Start the server using command: <br>
`node server.js`<br>
If the port has not been changed, by default, the server should start at `http://localhost:3000` <br>
