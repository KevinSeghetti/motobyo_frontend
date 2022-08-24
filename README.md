# frontend for coding challenge

### to install

npm run install


### to run
npm run start


## Usage
This simple app is built around a single page which is the employee list.
All editing is done via pop-up dialogs in front of that list.

It has a rudimentary user system, the app begins logged out.

There are 2 users in the seed data, one of them is:
username: "SteveJovanelly"
password : "test"

The system uses react router for page navigation. When not logged in the
only valid route is login (attempting to view other routes will redirect to
the login page). Once logged in, the login route goes away, and routes for
logout, employee, and an about appear, and it navigates to the employee page.

Click the New button to create a new employee. A popup to enter values appears.
Cancel aborts the operation, Ok sends the data to the server, after which
the pop-up closes and the list refreshes.

Click the delete button on one of the employees listed to delete it.
Cancel aborts the operation, Ok sends a command to the server to mark the
employee as inactive, after which the pop-up closes and the list refreshes.

Click the first name on one of the employees to view their details

Click the edit button on one of the employees to edit their details.

(all 3 options: create, view, edit, use the same component)

The filter dropdown selects whether to display active, inactive, or all employees

The about page mostly exists to have another page to navigate to.


## TODO
There are many things left to do before this app could be called complete
* more styling
* add react proptypes for props checking
* input field validation, ghosting of Ok when not valid
* actual auth with server, stored in cookie and sent with all requests
* unit tests


# create react app original docs

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
