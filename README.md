## Practical examples

### Web app: Login

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
