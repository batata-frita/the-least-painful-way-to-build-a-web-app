## Lightning Strikes! (Paulo)

1. Lightning strikes! [short pause]

2. Everything burns to the ground.

3. But that's not a problem! You had insurance! So you buy a new house with it. You also decide to buy a robot and teach it so that the next time it happens it calls the fire department.

4.

---

[pause]

## Phone Explodes (Paulo)

9. You get a new phone, you go back to your house and

10. BOOM! It explodes!

11. You look at your robot, and it's watching unboxing videos, completely ignoring the situation.

12. Since your phone is gone, you quickly run outside shouting for help, and your neightbor calls the fire department.

13. Saving your house from imminent destruction.

14. When everything calms down, you teach your robot to also call the fire department when a phone explodes

15. and the next time you buy phone, you make sure it won’t include that feature.

## Lightning Rod (Fernando)

16.
























----

We've been paying attention to the wrong thing all along
It's not that important whether is that a lightning strikes, or a phone explodes, or a meteor falls from the sky. What's important is something that is missing here, something is the middle, that is whether or not there is a fire in the house.


25. And then you decide to teach the robot to _not_ worry any more about lightning strikes, because those are not going to be a problem anymore.

26. But as things goes, you missed something: the lightning rod actually broke on the previous strike and it actually doesn’t protect you when the next lightning strikes.

27. And this time, your robot is no longer paying attention, and you were not at home,

28. So your house burns to the ground.

## Revelation (Fernando)

29. So after all of this you decide to go around for a walk and think about life, and try to understand what's going wrong. Why this keeps happening to you? What could you do the praction this from happening ever again?

It’s a beautiful day outside. You let the sun warm your skin, you feel the wind on your face and are looking at the trees, when suddenly

30. you see a ball of fire crossing the sky and falling in the middle of the forest

31. suddenly everything is on fire. And you starting asking yourself, why? how? why would this happen? Why is this happening? Is this a sign?

And then you realize that, YES! IT IS A SIGN! The fire is the key!

32. You've been paying attention to the wrong thing! It’s not the lightning or the phone exploding that matters, the fire is what matters!

33. Is not is that we should call the fire department when lightning strikes, or when a phone explodes, or when a fire ball falls from the sky.

34. What you want to know is whether those things actually cause a fire

35. or not

36. to call the fire department

[pause]

## Deep Dive (Paulo)

36 (still same slide) and to understand what this missing piece is, we need to understand the whole.

37. lets step back and take a high level look into what each of these parts are. first we have the actions, then we have the update function and the state, and finally we have the effects,

### Actions (Fernando)

38. Let’s take a deeper look at this structure.
The first component are the actions

39. We are already familiar with some actions, the ones that we have been discussing that can start a fire in the house, but there are a couple more that we didn’t mention in the story that are going to be necessary to represent the reality if we think of this as an application.

40. One of them is installing a lightning rod,

41. The other one is the notifying that the fire truck is on its way.

42. actions are simple descriptions of things that happen, they don't have any logic and they are instantaneous, as soon they happen they are over, we cannot use them to store information

### State (Paulo)

42 (still same slide): and to store information, we need something else, and that something else is the state

43. State is going to be our model of the reality in the application, so it will contain all the information about how things currently are.
44. From the story we already know that whether or not there is a fire in the house is an important piece of information to keep in our state, but we also have the information about if the fire truck is on its way and whether or not we have a functioning lightning rod installed

### Update function (Fernando)

45. these pieces of information in state, along with the action is then used by the update function

46. which gets an action and the current state of reality and creates a new version of it.

47. The update function contains the rules to update our representation of the reality.

In this particular case, what we have is wether there is a lighting rod installed and if a fire is going to happen

### Effects (Paulo)

48. Now that we have this way of modeling the actions and the way in which they can change the world, then we can start doing effects based on it. We are not conserned about how the current state came to be.

49. We can see the whole picture where actions flow from the left, making updates on the state and causing new effects on the right.

### Back to the start (Fernando)

50. if we go back to the first lesson you taught your robot,

51. we can see what it's wrong, it is missing the description of how the actions affect reality

52. we are bypassing the update function and the state, and we are missing some crucial information that we need to make the decision to whether or not call the fire department

53. modeling our effects as a function of the state we can for sure know if there is a fire in the house, allowing us to always make the right call

## Practical examples

### Kafka

54. how do we take this model and apply it to our day to day web development? how can we make it less painful?

55. we can apply this in a microservice architecture in a service that will for example consume a list of events of adding items to a shopping cart and based on those events decide what are the available shipping options that a customer might have in a checkout application

56. here is a visualization of this particular service. on the left we have our event stream of adding items to a shopping cart. on the right we are going to have the events that will be produced by our service, which is going to be in the middle

57. you recently got your house burned down. now you need to buy everything back again with your insurance money. you had a big book collection, so you're going to start buying them again one by one. you are going to our shopping website and you add a book to your shopping cart. this will turn into an event in the event stream,

58. which will be turned by our service into an action of adding one item into the cart

59. and then it goes the update function

60. which will create a new version of our reality that contains the book in the shopping cart. now we can see that we have a shopping for a total amount of 25 and weighting 500 grams.

61. based on that we can model our shipping options effect as a function of this state which has a logic that based on the weight is ok to ship worldwide and it will cost 5

62. you continue to shop in the website and you add a game to play when you are bored of the book. this particular game will cost 30 and since this is an special edition is weights 200 grams.

63. this will be turned by our service into an action that adds an item to the cart which will go through the update funtion that will create a new version of the reality that contains the book and the game, and we can see the total now that contains a representation of the total, and the kilos. we are still within the weight limit for international shipping, so we don’t do anything

64. but you loved also to play the piano, and your piano got burned down with the rest of the house. pianos are pretty heavy and expensive,

65. so as you add the piano to your cart, this will also be consumed by our service which will turn it into an add item to the cart,

66. which will then update our version of the world and we have the price is very high and the total weight is high as well.

67. this will impose some restriction in where we can ship the items, and we have a rule that will restrict this order to be shipped only into Europe, and will raise the price to 150

(wrap it up)

### Web app

68. lets take look at how this same model will play out in a frontend application. we are going to model a login form

69. to reclaim the insurance money, you need to login to the insurance company website.

70. the first thing that you do is to paste your username and that will be converted by the application in a write action that contains the user name

71. the update function will create a new state with the name

72. and we will use that new state to update the UI to show your name written in the field. as you can see here, we are actually modeling the rendering inthe same way that we were modeling the shipping options event effect in the previous example. rendering is also an effect model as a function of state

73. the next thing that you do is to paste your password, which works the same way of updating the username

74. you then press the submit button, which the application turns into a submit action,

75. when the update function processes the submit action, it detects that the login data is not valid. the login form expects an email, but you pasted your name, so the field is now in an error state,

76. and that will cause the effect of the field turning red and wanrning you that you should write down an email

77. you fix the mistake,

78. and you try to submit again

79. this time the validation succeeds,

80. so the state reflects the fact that the login is ready to be submitted for the first time.

81. that state leads to two effects.

the first is a request to the backend with the login information

the second one is updating the ui to reflect that we are now are waiting for a reply from the server

82. due to connectivity issues, the request fails,

83. so what we get instead in the application is an action that tells us that the request failed

84. the update function will pick up that action and update the state with the fact that the login data is ready to be submitted for the second time

87. once again, the application tries to do the login request,

88. and it fails again

89. we again get the action of the request failing,

90. and update the state to show that the login data is ready to be submitted, for the third time

91. being the third time, it looks the connection problems could be severe, so we want to notify you about them by drawing a crossed red cloud in the ui

92. at last, the request goes through, and the server response is turned into a login success action,

93. the update function removes the password and login ready information from the state since its no longer relevant, and instead it sets a flag saying that you are successfully logged in.

94. from this state, the ui gets updated, and you are logged in

## Bitcoin mining (Paulo)

97. Now that you fully understood the problem and you have taught the robot well, you relax

98. fire up your computer

99. and decide to start mining some bitcoins

100. as your machine runs and the fans kick in, bitcoins pouring into your wallet,

101. the transformer overheats with the power surge and blows up

102. setting your house on fire again

103. but this time the robot is not taken by surprise. is wasn’t unboxing videos, and it is not paying attention to the mining bitcoins, or any of the infinite unexpected things that could happen: it just notices the fire, and it calls the fire department

104. the fire truck arrives in no time and everything is saved

105. Thank you
