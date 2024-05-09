# Lab 5 - Starter

Umar Khan

**Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

Not really. Since unit testing is used to debug on a _small_ scale, but the messaging feature is presumably a very large piece of functionality of the messaging app and probably contains a ton of different moving parts. It would be more befitting of unit testing to test each _component_ of the messaging feature bit-by-bit to make sure each part is functioning as intended.

**Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

Yes. This is a much better use of unit testing. Since this is a small part of the code with very few moving parts, it would be a great use case for unit testing. You could write a unit test that tries to write a message that exceeds the maximum length, and checks if it is allowed to write the entire thing. 

Expose site: https://ukcsd.github.io/Lab5_Starter/expose.html

Explore site: https://ukcsd.github.io/Lab5_Starter/explore.html
