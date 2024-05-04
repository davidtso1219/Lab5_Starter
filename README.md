# Lab 5 - Starter


## Part 3
### Check your understanding
- 1) No, making a unit test for this would not make sense, this is more of a integration test, verify that a process/component can interact with another process or feature. Unit testing if a user could write to another in a messaging system would not really be a unit test as it scope quickly relies on other parts of the code base outside the unit scope, as noted above a integration/system test would make more sense as we want to see the interplay of multiple components of the messaging system and the necessary other systems like a relay server etc.
- 2) Yes using a unit test to verify the max message length feature does make sense as the scope of the test can be accomplished within the single part of the code base handling the message length checking, and this test would not rely on other features within the code base, making this a perfect candidate for unit testing.