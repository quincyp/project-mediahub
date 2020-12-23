# Media Hub

# Technology Used

###     1. JavaScript
###     2. HTML
###     3. CSS, Bootstrap
###     4. EJS
###     5. Github
###     6. Node and modules: express, Mongoose, bcryptjs


# User Stories

## Home page (*authentication*):

Movie Hub is an app which allows users to add the movie title along with release year and story details once *registered and logged in*.

Register link will take the user to the page where they can input required name(*5 characters or more*), email and password(*5 characters or more*). 

Once user registered and logged in they will remain logged in for 7 days.

## Adding a movie title:

Add New Title allows user to add a movie title to our database. 

## Movie index page:

Once title is entered, API feed is fetched and scanned for a title match to import movie image, details and release year.

At this point new movie will be displayed on index page, then user can edit and delete movie information as Title, Details and the year.

## Home page (*authentication*):

User is also able to add any comments to each movie once added, and those comments are automaticly removed once movie is deleted.



### Wireframe 
![wireframe](./wireframe.png "wireframe")

## Entity Relationship Diagram (ERD)
![ERD](./public/resources/ERD1.png "ERD")

## Stretch Goals To-do

- Look into Heroku deployment

<!-- --Show.ejs no image if logic needs to be added -->
<!-- --Increase text area of comment body -->
--Make index images clickable links (tried wrapping img in </a> not working!)
<!-- --Remove image not found fake title -->
<!-- --Add login CSS -->
<!-- --Add register CSS -->
<!-- --Details text box edit/new -->

<!-- - Remove user author, auto fill with logged in user -->

<!-- - Redo coloring of dark gray text in overall CSS [look at subheading and overview text in particular] -->
    - Update link colors

<!-- - Fix comment section CSS add margin/padding -->

- Fix fully responsive sizing

<!-- - Add Font Awesome Icons -->
<!-- -- Add as logo too -->
<!-- -- Create/Edit/Delete icon buttons -->

<!-- - Redo logout button CSS
    - remove the background
    - align right on all nav pages -->

- Delete Comment CRUDs?
    - comment index.ejs
    - comment show.ejs

- Look into new fonts?
