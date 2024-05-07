# Lab 5 - Starter

Addy Ngo

1. No, I wouldn't use a unit test to test the "message" feature. Since the "message" feature involves two users, it will require multiple components interacting with each other, which a unit test can't test well. For example, perhaps you could use a unit test to test if your message was created, but you'd also need to some how test if the recipient was able to receive it, which would require network as well, which can't be tested completely locally with unit tests.

2. Yes, I would use a unit test to test the "max message length" feature. In this case, the "create message" feature would only be one component so it's easier to test with unit tests. Since the unit test pertains to the "create message" component, specifically inputting a message, changing other app features also wouldn't affect the unit test. For example, a unit test could be created to test inputs and see if a message is successfully created or not for an input longer than 80 characters.