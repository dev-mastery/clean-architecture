#Web App Architecture Example
This project is a partial implementation of a an e-commerce storefront for a fictional company called "CleanCo". It's purpose is to demonstrate key concepts of a highly stable, layered, web application architecture.
Many of these concepts are explained by Robert C. Martin (aka "Uncle Bob") in The Clean Architecture*

*This project is in no way endorsed by, or affiliated with, Robert C. Martin

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
After setup, from the command line, at `/clean-architecture`:

    cd server
    cd CleanCo.Ecomm.RestAdapter
    dotnet run

Open a new terminal window and go to `/clean-architecture`:

    cd client
    npm run start

**IMPORTANT:** Make sure the server code is running at `localhost:5000`

##License

Copyright (c) 2016 Dev Mastery

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
