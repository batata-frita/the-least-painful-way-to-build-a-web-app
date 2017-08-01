1. Not enough information
2. Reducer computation needed
3. Information hidden locally in a side effect
4. Action triggers action which triggers action and state doesn’t get updated

## Made worse

1. Pass unnecessary information to component just to be able to create the action with all the necessary information
2. Duplicate the computation in the reducer and in the side effect
3. Information is needed somewhere else
4. Result has outdated information since information was passed to the action from the state

## Examples

1. Search. When clicking the search button, we need to query to make the request.
2. Validation: request should only be done if _all_ data is valid. For knowing that we need to query the state.
3. Show loading spinner while submitting from a button. The button sets itself to a loading state until the promise for the request is resolved (and only then the action is dispatched).
4. Search. If a retry happens and the user wrote something else meanwhile, the retry will be done with the wrong query.
