# Lab 5 - Starter

## Check Your Understanding

### Question 1
Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

**Answer:**  
Unit testing might not be the best choice for testing the entire "message" feature due to its reliance on multiple interacting components. However, unit tests are suitable for testing individual parts of the feature such as the message formatting and validation functions.

### Question 2
Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

**Answer:**  
Yes, unit testing is appropriate for the "max message length" feature. This feature's functionality is isolated and can be precisely defined and tested without external dependencies, making it ideal for unit testing.
