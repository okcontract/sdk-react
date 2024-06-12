# OKcontract SDK for React

## Overview

The OKcontract SDK for React and Interactions Hub are designed to streamline
the process of creating and managing smart contract interactions. Our tools
provide developers with a platform to browse smart contracts, view smart
contract ABIs, select methods, create and customize interactions, set
parameters, and manage interactions lifecycle, including ownership and
attestations.

## OKcontract Interactions Hub

To create a smart contract interaction, head to
[OKcontract Interactions Hub](https://app.okcontract.com). You can browse
smart contracts, view their ABIs, and choose methods and parameters to create
your interactions on the hub. For testing purposes, you can use one of the
existing interactions.

### InteractionID

Each interaction has its `interactionID` that is automatically generated and
is displayed on the interaction page, e.g. `AbX2IbtBDbgJdkAXucGu`.

### Customization

The OKcontract Hub allows additional customization of interactions:

- Add a title and information text
- Set allowances, pre-conditions, and slippage
- Customize the action button text, and more.

## OKcontract SDK

The OKcontract SDK allows you to integrate smart contract interactions into
your applications dynamically. The SDK connects your frontend applications
with smart contracts and helps in building contract interactions on the client
side.

### Getting Started

This package is designed to provide the OKcontract SDK for the apps using
React.

#### Installation

To install the OKcontract SDK, run the following command:

```sh
  npm i --save @okcontract/sdk-react
```

#### Initialization

Initialize the SDK in your project by importing `OKContract`, `OKInstance` and
`OKInteraction` into your app.

```tsx
import { OKContract, OKInstance, OKInteraction } from "@okcontract/sdk-react";
```

#### Use Interactions

Declare `interactionID` and pass it as a parameter of `OKInteraction`.

```tsx
const interactionID = "AbX2IbtBDbgJdkAXucGu";
...
<OKContract>
    <OKInstance>
        <OKInteraction id={interactionID}>
            <App />
        </OKInteraction>
    </OKInstance>
</OKContract>
```

### Demo

See the [demo app](https://github.com/okcontract/sdk-demo) to learn how to get
started with basic features:

- Wallet connection
- Interaction (Uniswap v3)
- Information display
- Waiting for block mining

#### Methods & Properties

The exhaustive list of methods and properties can be found here:
[docs.okcontract.com/sdk](https://docs.okcontract.com/sdk)

## Key Features

- **Reduced Amount of Code:** OKcontract Interactions significantly reduce the
  amount of work required to integrate the smart contract interactions into
  your frontends.
- **Transaction Computation:** The OKcontract SDK computes dynamically
  transactions from high-level inputs, including slippage, off-chain data,
  clear gas estimation, and more.
- **Wallet Connection:** Establishes a secure connection to access the user's
  public wallet, initiates transactions, and reads the wallet's balance.
- **Onchain and Off-chain Data:** Provides access to verifiable transaction
  data and synchronizes all required on-chain and off-chain data for
  transactions automatically.
- **Event Listening:** Listens to events emitted by smart contracts and
  updates the dApp UI in real-time to reflect changes in state or the outcome
  of transactions.
- **Error Handling:** Provides feedback and error messages to the user in case
  of failed transactions or issues during data fetching.
- **Support of Multiple Chains:** The SDK supports major EVM-compatible
  blockchains, ensuring broad compatibility for your projects.

## Design & Philosophy

The OKcontract SDK and Interactions Hub provide powerful tools for developers
to create and manage smart contract interactions efficiently.

The idea behind the OKcontract SDK is to operate a permissionless SDK that
doesn't require an API key, making it much easier for developers to kickstart
smart contract integration into their frontends.

## Documentation

For more details, documentation, and examples visit
[docs.okcontract.com/sdk](https://docs.okcontract.com/sdk).

## License

The OKcontract SDK for React is developed by
[OKcontract](https://okcontract.com) and is released under the Apache license.
