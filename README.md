# BlogAPI_Task
## clone the above repo and install dependancy using command ==> `npm install`
## run ==>`npm start`
## Your server is run in==> `localhost:5000`
 
### to check the api routes with foll url
### Base Url for blogs: `localhost:5000/blogs`
### Base Url for user: `localhost:5000/user`

# Routes for Blogs:

## get("/",getAllBlogs); // Get all blogs
## post("/add",addBlogs); // Create new blogs
## put("/update/:id",updateblog); // Update blogs according to id
## get("/:id",getById); //Get blog by id 
## delete("/:id",deleteBlog); //Delete blog by id
## get("/user/:id",getByUserId); //Get blog by userID
## post("/search",getByKeyword); // Search blog according to keywords
  
# Routes for User:  
## get("/",getAllUser ); // Get all user list 
## post("/signup",signup); // Sign up user
## post("/login",login); // Login User

# TestCases is added for both user and blogs
## To Run TestCases run command ==> `npm run test`
