# TODO

- [ ] Replace gear with program in kafka introduction

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
