#Web App Architecture Example
This project is a partial implementation of a an e-commerce storefront for a fictional company called "CleanCo". It's purpose is to demonstrate key concepts of a highly stable, layered, web application architecture.
Many of these concepts are explained by Robert C. Martin (aka "Uncle Bob") in The Clean Architecture*

*This project is in no way endrosed by, or affiliated with, Robert C. Martin

##Prerequisites
* git - https://git-scm.com
* .Net Core - https://www.microsoft.com/net/core 
* Node JS + NPM - https://nodejs.org/ 

##Setup
From the command line:

    git clone https://github.com/dev-mastery/clean-architecture.git
    cd clean-architecture
    cd server 
    dotnet restore
    cd ../client
    npm install
    
##Run
After setup, from the command line, at /clean-architecture:

    cd server
    cd CleanCo.Ecomm.RepoAdapter
    dotnet run

Open a new command line window and go to /clean-architecture:

    cd client
    npm run start
    
**IMPORTANT:** Make sure the server code is running at localhost:5000
