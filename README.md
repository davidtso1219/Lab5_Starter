# Lab 5

### Teammates

Esther Xiong, Timothy Herchen (part of Team 22)

## Part 3: Unit testing with Jest

### Question 1

You would not use a unit test to test the message feature of a messaging application, because the message will go through numerous layers (units) of the application: the network layer, the front end, the server backend, *etc.* This is not the job of a unit test but rather an integration test.

### Question 2

You could certainly use a unit test to test the max message length feature, as this feature would likely be implemented on the front end and so could be testable in isolation.
