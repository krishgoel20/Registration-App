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
### 1. Clone the Project
Clone the project repository to the local machine using a version control like Git. Navigate to the directory where you want to store the project and run the command : **"git clone <repository_url>"**.

### 2. Install Dependencies
Navigate to the project's root directory and install the project's dependencies by running : **"npm install"**. This command will install all the required libraries and packages listed in the **'package.json'** file.

### 3. Start the Development Server
To run the React App locally, run the command : **"npm start"** in Terminal / Command Prompt / Git Bash. This command will start the Development Server, and the app should open in a new browser window.

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