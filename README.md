# TODO

- [x] Fix outlines for Redacted Font
- Outlines for the numbers (incoming messages, outgoing messages, price and weight in state, amount of retries)
- Add the gear to all the update arrows
- Generate all the intermediate states according to script
- [x] Design logged in state

## Practical examples

### Web app: Login

This could be the insurance form.

Events:

- User clicks "login"
- Request is made
- Request failed
- Login approved
- Login rejected

States:

- Requesting
- Retry (number)
- Disconnected
- Logged in
- Invalid credentials

Effects:

- Render
  - Invalid credentials
  - Logged in
  - Retrying
  - Disconnected
- HTTP Request (fetch)
  - POST /login

### Server side: shipping information for shopping cart

This is refurnishing the house.

Events:

- Add Item
- Remove Item

States:

- Order Id
- Items

Effects:

- Kafka push:
  - Shipping not available
  - Shipping available
  - Shipping free
  - Shipping price is standard rate

## Last slide

- Redux Heat

- Event Sourcing

- Martin Fowler’s [Memory Image](https://martinfowler.com/bliki/MemoryImage.html)
