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

29. So after all of this you decide to go around for a walk and think about life, and try to understand what's going wrong. Why this keeps happening to you? What could you do the prevent this from happening ever again?

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

37. Let’s take a look at what is happening here.
First we have the events, which are the things that can happen (lightning strikes, phone explosions, fireballs…), then we have the update function and the state (we will come back to that in more detail soon) and the effects, which are things that we want to do in response to the current reality.

### Events (Fernando)

38. Let’s take a deeper look at this structure.
The first component are the events

39. We are already familiar with some events, the ones that we have been discussing that can start a fire in the house, but there are a couple more that we didn’t mention in the story that are going to be necessary to represent the reality is we think of this as an application.

40. One of them is installing a lightning rod, since it’s an action that will affect the world and change whether or not a lightning strike will result in a fire.

41. The other one is the fire truck being on its way. If we know that the fire truck is already coming we wouldn’t want to call it again.

42. Now that we have all the events that we will need for now, let’s take a look at

### State (Paulo)

43. state. State is going to be our model of the reality in the application, so it will contain all the information about how things currently are.

44. From the story we already know that whether or not there is a fire in the house is an important piece of information to keep in our state, but we also have the information about if the fire truck is on its way and whether or not we have a functioning lightning rod installed, which will see soon will impact if a fire will start.

But we are missing something here: we need a way for the events to affect the state. We need a way of calculating what the new state is going to be whenever an event happens.

### Update function (Fernando)

45. That missing piece is the update function.

46. which gets an event and the current state of reality and creates a new version of it.

47. The update function is a description of the transformation that the state will undergo when a given event happens, using the current state as a starting point.

### Effects (Paulo)

48.

49. We can see the whole picture

### Back to the start (Fernando)

50.

51. (we can see what it's wrong, we are missing the description of how the events affect reality)

52. (bypassing)

## Bitcoin mining (Paulo)

54. Now that you fully understood the problem and you have taught the robot well, you relax

55. fire up your computer

56. and decide to start mining some bitcoins

57. as your machine runs and the fans kick in, bitcoins pouring into your wallet,

58. the transformer overheats with the power surge and blows up

59. setting your house on fire again

60. but this time the robot is not taken by surprise. Is not paying attention to the mining bitcoins, or any of the infinite unexpected things that could happen: it just notices the fire, and it calls the fire department

61. the fire truck arrives in no time and everything is saved

62. Thank you
