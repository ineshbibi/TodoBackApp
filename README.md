### About the application

This project is a BackEnd web application app developed with Nodejs (Express Js) and MongoDB.
It's a todo list, it allows you to manage different todo items ( Add , update and delete)

### `npm install`

To install all the dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

If you don't have GitHub :

        1/ First you need to install heroku into your machine : https://devcenter.heroku.com/articles/heroku-cli

        2/ Go into your project repository and Login into heroku : \$ heroku login

        3/ $ git init $git add . \$ git commit -m "First Commit"

        4/ Create your heroku server : \$ Heroku create
        you will get two links the first one is the link of your app
        and the second one is the get repository

        5/ Add your project into the heroku git repository :
        \$ git remote add heroku your-repository-link

        6/ Push into your heroku repository git push heroku master

        7/Run your app using : $ heroku open

If you have GitHub :

        1/Go to heroku web site : https://dashboard.heroku.com/apps

        2/ Create new App

        3/ Go the the deploy session

        4/Click into GitHub

        5/Go to your project and then $git push origin master
