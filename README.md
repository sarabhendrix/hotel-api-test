# Vacation Planner

Our react app will feature a vacation planning webapp that allows users to book a vacation, including place to stay and recommended activities in the area all in one place. What sets our webapp apart from other popular booking sites is that it incorporates GenAI for a more personalized and interactive experience for the user to facilitate booking. Our Design wiki goes into more detail on the specifics of what the vacation planner will look like: https://github.com/SCCapstone/RollingCapStones/wiki/Design.

## External Requirements
You should first have an IDE installed on your device to run the app. [Visual studio code](https://code.visualstudio.com/) is a popular IDE that can be used to run this app.

In order to build this project you first have to install:

-   [Node.js](https://nodejs.org/en/)
-   [MongoDB](https://www.mongodb.com/)
-   [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/?er=221886)
-   [Spring Initializr](https://start.spring.io/)

## Setup
You will need to clone this repository in your desired IDE.
* To clone: git clone https://github.com/SCCapstone/RollingCapStones.git

You will then navigate to the necessary directory.
* To change directory: cd RollingCapStones/vacationplannerapp

Once you are in the correct directory, you will need to make sure npm is installed along with react-router-dom, bootstrap, react-cookie, reactstrap to run the react app.
* To install npm: npm install
* To install npm extensions: npm i bootstrap react-cookie react-router-dom reactstrap

## Running

To run the react application, ensure you are in the vacationplannerapp directory and run this command:
* npm start

Now, the react app should be running correctly on your device. Thanks for checking out our project!

# Deployment

We will be deploying to Azure, and the following instructions are for doing
so in Visual Studio Code:

Init: Make sure you have Azure App Service and Azure Tools extension. 

### Deploying
1. Go to the Azure Tab on the left, then choose the Azure subscription.
Right-click on App Services and then choose Create New Web App.
2. Input a unique name for the web app, then select Java 17 for the run
time stack
3. Select your pricing tier (most likely free)
4. Once the web app has been initilized to Azure, Visual Studio will have
a pop-up appear in the bottom right corner. Click Deploy to fully Deploy 
the web app.

Please Note: You would need to do this process all over again to deploy
manually from your system. If you would like to have an automated
redeployment, please refer to the next section

### Re-Deploying

TBD

Webapps need a deployment section that explains how to get it deployed on the
Internet. These should be detailed enough so anyone can re-deploy if needed
. Note that you **do not put passwords in git**.


# Testing

Tests will be added when their section that gets created. These tests can be
found in `/test/unit` or `/test/behavior` for unit and behavioral test 
respectfully. When these test gets added, we will update this section with any
installation that is required (found under the section title Installing Test) 
and how to run the tests (found under the section title Running Tests)


# Authors

Your names and emails  

Christopher Schweninger  
School Email: schwenic@email.sc.edu | Personal Email: mwmaster901@gmail.com  

Peyton Fisher  
School Email: pmfisher@email.sc.edu | Personal Email: pmnf0713@gmail.com  

Charlie Gorman  
School Email: gormanct@email.sc.edu | Personal Email: charlietgorman@gmail.com

Jenna Stover  
School Email: jkstover@email.sc.edu | Personal Email: jenna.stover810@gmail.com

Sara Hendrix
School Email: seh18@email.sc.edu | Personal Email: sarabhendrix@gmail.com