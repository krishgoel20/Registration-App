# Registration-App
A Registration App is a web or mobile application designed to streamline the process of user registration and sign-up. It serves as a user-friendly gateway for individuals or entities to become part of an online community, service, or organization.

## Design Inspiration Links
### 1. Link 1
https://www.freepik.com/premium-vector/mobile-app-login-registration-screen-template_1576877.htm

### 2. Link 2
https://dribbble.com/shots/11622319-Dark-and-Light-Mode-Registration-Process-Design/attachments/3244396?mode=media

### 3. Link 3
https://youtu.be/YxDlWHyk9z4

### 4. Link 4
https://youtu.be/mJ3bGvy0WAY

### 5. Link 5
https://youtu.be/5RUl8exLI-c

## Process

To run the React Native app using Expo :

### 1. Pre-requisites
Make sure to have **Node.js** installed on the machine. It can be downloaded from **"https://nodejs.org/en"**.
Install Expo CLI globally. This can be done by running the command : **npm install -g expo-cli**.
Ensure to have Expo Go installed on your Android or iOS device if it's planned to run the app on a physical device.

### 2. Set up the Project
Create a new directory for the project and navigate to it in the Terminal.
Create a new Expo project using the **"expo init"** command : **expo init Registration-App**. Choose the "blank" template or any other template preferred.
Follow the prompts to configure the project. This generates a project structure with the necessary files.

### 3. Navigate to the Project directory
Use the command : **cd Registration-App**.

### 4. Start the Development server
To start the development server, use the command : **expo start**.
This will open a new tab in the web browser with the Expo DevTools. A QR code will be visible that can be used to run the app on a physical device, as well as options for running on a simulator or emulator.

### 5. Running on Physical Device
Open the Expo Go app on your physical device (Android or iOS).
Scan the QR code from the Expo DevTools in the browser using the Expo Go app. This will load the app on the device.

### 6. Running on Emulator/Simulator
Select the appropriate option from the Expo DevTools in the web browser.

### 7. View the App
The app can be now seen running on the physical device or the emulator/simulator.

### 8. Code and Test
Changes can be made to the code, and the Expo development server will automatically reload the app with the new code changes. The updates can be seen on the device or the emulator in real-time.

## Implementation
### 1. Setting up the Project
Start by creating a new React Native project using the Expo CLI, which makes it easy to develop and test the app. 
Set up the project structure with the necessary files and dependencies.

### 2. Navigation
The React Navigation library is used for navigation in the app. 
In this case, a **Stack Navigator**, provided by the library, is used to navigate between different screens.

### 3. Home Screen ('HomeScreen.js')
Create the **'HomeScreen'** component, which is the initial screen of the app. 
The **'HomeScreen'** component contains a single button that, when pressed, navigates the user to the **'Register'** screen.

### 4. Register Screen ('RegisterScreen.js')
This is the component where the user can input his/her Name and E-mail ID for registration.
React hooks are used to manage the component's state (**'name'** and **'email'** fields).
When the user presses the **"Register"** button, the **'handleRegister'** function is called. Inside this function : 
    a. An API call is made to the specified endpoint (**'YOUR_API_ENDPOINT'**) using Axios to register the user.
    b. If the registration is successful, the response data is logged to the console and then navigated to the **"Profile"** screen, passing the user's name and email as route parameters.
    c. If an error occurs during registration, the error is logged to the console.

### 5. Profile Screen ('ProfileScreen.js')
The **'ProfileScreen.js'** component displays the user's name and email, which are received as route parameters.
This screen is reached after successful registration and displays the user's registration details.

### 6. Navigation Container ('App.js')
In the **'App.js'** file, create the main navigation structure using a Stack Navigator.
Specify the initial route to be the **"Home"** screen.
The **'NavigationContainer'** wraps the navigation stack, providing the overall navigation context for the app.

### 7. Running the App
To run the app, use Expo's development server, which can be started with the **'expo start'** command.
The Expo DevTools in the web browser provide a QR code, which can be scanned with the Expo Go app on a physical device. 
This loads the app on the device for further testing.
Alternatively, the app can be run on an emulator or simulator, as explained in the Expo DevTools.

## File Structure
### 1. node_modules
This directory contains all the dependencies and packages that the project relies on. It's managed by **Node Package Manager (npm)** or **Yarn**.

### 2. public
This is a directory where various assets and resources are stored, which are publicly accessible within the app. In this case, a folder called **images** has been created inside this directory, containing the **background** image and the **logo** icon for the app.

### 3. src
It is a directory used to structure the code for better organization and maintainability. 
This contains a folder **components** which contains a file **Database.js**. In this case, the **Database.js** file is used to initialise our database called **User_Registration_System**. Configuration parameters, like database connection strings, credentials, and other settings, are also defined in this file. It contains functions/methods for executing database queries and other operations like Insert, Delete, Read, Update & Search. These functionalities allow us to interact with the database.
This also contains a folder **screens** which holds the files "**HomeScreen.js**", "**RegisterScreen.js**" & "**ProfileScreen.js**" that represent the different screens of the app.
Other than the **components** and the **screen** folders, the **src** folder also contains some files which are responsible for the basic layout and design of the app like **App.css**, **App.js**, **Background.css**, etc. The **App.js** file is the entry point of the app. It is the main component that sets up the navigation and renders the app's structure.

### 4. .gitignore
This file is used to specify which files and directories should be ignored and not tracked by version control systems like Git.

### 5. package-lock.json
It is a lock file which keeps track of exact dependency versions.

### 6. package.json
This file defines the project's dependencies and scripts for running, building, and testing the app.

## Database Implementation