# To-do list

Add, remove, and mark finished or unfinished tasks.

Check the site [**here**](https://kvasir124.github.io/to-do-list-react/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies

* HTML
* CSS
  * Normalize.css
  * Grid
  * Flex
  * Media queries
  * styled-components
* Javascript
  * ES6+ features
  * Immutability
  * create-react-app
  * Redux

## Site functionality

![to-do-list-demo](https://github.com/Kvasir124/to-do-list/assets/141030238/08e2dbf6-97d8-45b4-83c2-b0a1481c4274)

The site's function is to provide the user with a simple to-do list. The user can add tasks by filling out the input field and pressing the "add task" button, which submits the simple form. This causes the task to appear in the list below with two buttons on either side - one for marking the task as done and the other for deleting it. Each submitted task has its own controls, which the user can interact with independently. There are also 2 buttons that appear next to the "Task list" header when the list isn't empty. One of them can mark all undone tasks as done, and the other can hide completed tasks. All tasks and task operations are handled with Redux.

## Responsiveness

With the use of CSS Media queries, the site adapts to small screens (<767px) by moving the "add task" button under the input field. This ensures that the input field doesn't shrink too much and obscure the written text. The two buttons that appear next to the "Task list" header also move below it when the screen is small enough. This prevents the text from overflowing and obscuring itself.

# React.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
