# Drata-Assignment
Drata test

You will need to have Node.js and NPM installed on your machine. 
If you want to have WebdriverIO integrated into your test suite, then install it locally with:

$ npm instal @wdio/cli  


after Webdriverio instalation you can setup with the wizzard. 
If you're in the root directory of an existing project, run:

npm init wdio .

or if you want to create a new project:

npm init wdio ./path/to/new/project

? Where is your automation backend located? 
-On my local machine
? Which framework do you want to use? 
-mocha
? Do you want to use a compiler? 
-No!
? Where are your test specs located? 
-./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? 
-No
? Which reporter do you want to use? 
-spec
? Do you want to add a plugin to your test setup?
-Yes
? Do you want to add a service to your test setup? 
-chromedriver
? What is the base url? 
-''

You shall need to install chai with

npm install chai 

Once the wizard end, you can run on console the comand:

npm run wdio
or
npx run wdio

thats it!