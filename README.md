# Persistent Shopping Cart

This is basic example of a shopping cart built with [Nextjs](https://nextjs.org/) and [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction), a state management tool as an alternative to React Redux.

The data stored in the cart is persistent through page refreshing and browser session ended. This functionality is achieved thanks to the [**persist**](https://docs.pmnd.rs/zustand/integrations/persisting-store-data) middleware that's built into the library. Zustand have many others middlewares and third-party libraries created and maintained by the community that extends the capabilities and functionalities of a minimal solution to manage state.

#### Some thoughts!

In this demo I've tried to implement two patterns for managing the state. In the first one I've used a redux-like pattern splitting the store into slices and in the second one I've used two individual stores that are co-dependent.

Keeping in mind this is a demo for studying and learn the details of this tool I didn't stoof quite faithfull to the initial concept LOL. I will be updating and enhancing this demo in some near future, for sure.

## Project setup

1. Clone the repo
2. Install the necessary dependencies

```bash
  npm install
```

3. Run the development server

```bash
  npm run dev
```
