# Lab 5 - Starter
1. Yes, a unit test would be suitable for testing the "message" feature of a messaging application. This feature, which enables a user to write and send a message to another user, can be broken down into smaller testable units. For example, unit tests can verify if: 
  - The input text is correctly taken as input.
  - The message is correctly formatted for sending.
  - The sending function triggers properly with valid inputs.
  - Error handling works correctly for invalid inputs or system errors.
Unit testing here helps ensure that each component of the messaging functionality works independently before it is integrated into the larger system functionalities.
Testing the "max message length" feature with a unit test:
1. Yes, this feature should definitely be tested with unit tests. The "max message length" feature, which restricts users from typing more than 80 characters, is a discrete functionality that can be precisely tested using unit tests to ensure:
 - The system correctly counts the number of characters entered.
 - The system prevents further input after 80 characters.
 - The system provides a user-friendly notification or error when the limit is exceeded.
Unit tests for this feature can easily simulate entering text and can check the behavior of the application in response to these inputs, making them an effective testing strategy for verifying that the character limit enforcement works as expected.






2. 