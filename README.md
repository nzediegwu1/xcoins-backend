# XCOINS API

## Improvements made
1. Implement Error Handler Decorator
2. Integrate request logging and error logging
3. Use Express validator middleware to validate request data
4. JSDOC
5. Typing
6. Indexing
7. Remove unused dependencies
8. Implement pagination in endpoints
9. Modularize routes
10. Created separate `index.ts` module for server instantiation
11. API Doc using Swagger (Not done due to limited time)
12. Test - Not done (Not done due to limited time)

### Implement Error Handler Decorator
- Ensure that all unhandled errors are caught and logged in one place
- Keeps the code DRY and avoids repetition of `try/catch` across the controller methods
- Ensures that success and error response follows a uniform format across the project

### Integrate request logging and error logging
- Logging using `morgan` helps to track events and errors when they occur, time of the event and details about the request.
- Makes debugging easy

### Use Express validator middleware to validate request data
- Intercepts the API request to ensure request data is valid and returns error if invalid
-  Prevents unnecessary processing when user input is invalid

### JSDOC
- Use on functions to improve readability

### Typing
- Define function signatures to ensure type safety and improve readability

### Indexing
- Indexed fields that are used in queries to drastically improve query execution speed especially when records become large
- Uses Btree data structure to make query execute at O(logn) time

### Remove unused dependencies
- This is to keep things neat and make for fast installation/deployment

### Implement pagination in endpoints
- This was implemented using a `findPaginated` helper function to retrieve paginated data and total count of data
- Helps to protect the endpoints from overload when number of records become high

### Modularize routes
- This is to ensure separation of concerns and maintenability. - Api implementations were moved to controllers

### Create separate `index.ts` module for server instantiation
- Good to ensure separation of concerns
- Best practice not to use same server instance for test and development to avoid conflicts