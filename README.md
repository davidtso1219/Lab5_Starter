# Lab 5 - Starter
## Yu-Jia Fiona Kuo
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - Answer: I would use it to test if the message meets the required cases before sending, but probably would not use it to test the sending process because that would require testing interactions between different individual components, such as user interface, network services, database, and other related functionalities.
  
2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    - Answer: Yes, because unit testing is suitable for testing the length of a message since it is focusing on a single functionality by simpliy checking the size of a message, which does not neccessarily require knowing how it interact with other components.
