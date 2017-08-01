1. Not enough information
2. Reducer computation needed
3. Information hidden locally in a side effect
4. Action triggers action which triggers action and state doesn’t get updated

## Made worse

1. Pass unnecessary information to component just to be able to create the action with all the necessary information
2. Duplicate the computation in the reducer and in the side effect
3. Information is needed somewhere else
4. Result has outdated information since information was passed to the action from the state
