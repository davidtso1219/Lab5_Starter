# Lab 5 - Starter
Name: Salman Navroz

Expose.html: [https://salnav.github.io/Lab5_Starter/expose.html](https://salnav.github.io/Lab5_Starter/expose.html)

Explore.html: [https://salnav.github.io/Lab5_Starter/explore.html](https://salnav.github.io/Lab5_Starter/explore.html)

## Check Your Understanding
1. You can technically unit test the messaging feature by checking if the other user received the message successfully, but it would be more ideal to test each subcomponent of this process with unit tests. This means testing if the writing works, sending works, receiving works, as well as all the other processes. This ensures that the entire messaging part of the application works because you verified that each smaller process works already with unit tests.
2. Yes it is good to unit test the "max message length" because this is an edge case that is easier to debug on a small scale. This is easy to unit test with a hard stop at 80 characters, so it is good to ensure that it will not be a problem in the real production app.
