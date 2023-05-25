

1. Create a repo
No Prime repo to fork this time.

 ~~Choose a teammate to create a repo, create it in GitHub and then clone it on your local machine~~
 ~~Run npm init in your new repo~~
 ~~LiveShare with your teammates~~
 Your teammates may fork your repo if they want their own copy and/or want to submit PRs

2. Deploy to heroku
 ~~Install express~~
 Create a basic server file with a simple GET endpoint
 Deploy it to heroku
 Test it with Postman

3. Deploy a database
 ~~Create a Postgres DB on bit.io~~
 ~~Use their query runner to create a "messages" table with the following columns:~~
~~"id" - serial primary key~~
~~"title" - varchar(60) not null~~
~~"text" - varchar(140) not null~~
"timestamp" - timestampz no null
 ~~Populate the table with a couple of test messages~~
~~ Install pg in your server~~
 ~~Configure a Pool to connect to bit.io (make sure you use heroku config:set for the password!)~~
 ~~Add a GET endpoint to fetch all messages from the table~~
 Test it with Postman

4. Finish your endpoints
 Add a POST endpoint which accepts a title and text as JSON and creates a new table row
 Update your GET endpoint:
Sort by timestamp with newest first
Send back only the ten most recent messages
 Test your endpoints with Postman

5. Build your front end
 Add a index.html, JS, and CSS files and serve them with express.static
 Add a title at the top of your page
 Display the ten most recent messages at the bottom your page with their title, timestamp, and text
 Add a simple form to your page:
Accepts a title and text
Submits them to the back end when a button is clicked
Refreshes the displayed messages after submission is successful

6. Stretch goals
 Add validation to prevent invalid user input like messages which are too long
 Add a delete button to your displayed messages which deletes that message from the database when pressed
 Add an edit button to your displayed messages which allows any message to be updated in the database
 Style your index.html
 Are you vulnerable to a Cross Site Scripting (XSS attack)? Sanitize your inputs!
 What features would be most useful to you in a message-board app? Add them.