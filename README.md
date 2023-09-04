# Hyperlane Messaging CLI Tool

Hyperlane-Messaging is a command-line tool that enables users to send and query messages via Hyperlane using Ethereum-based operations.

![alt text](https://github.com/hefgi/hyperlane-messaging/blob/main/screenshot.png?raw=true)

## Table of Contents
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
  - [Send Message](#send-message)
  - [Search Messages](#search-messages)
- [Error Handling](#error-handling)
- [Troubleshooting & Hints](#troubleshooting--hints)
- [Contributions](#contributions)
- [License](#license)

## Features

1. Send a message via Hyperlane.
2. Query for messages sent from a specified chain.

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/hefgi/hyperlane-messaging.git
cd hyperlane-messaging
```

2. Install the required packages:

```bash
npm install
```

3. Ensure the index.ts includes execution permission.

```bash
chmod u+x ./src/index.ts
```

The file (CLI) can now be executed directly as if it was a binary.
```bash
npm run start
```

4. Optional: Making the Command Available Globally

```bash
npm install -g
hyperlane-messaging-cli
```

## Usage

*Important: Only Ethereum, Sepolia and Goerli are supported in this version. You can add more chains by modifying the [configuration files](#troubleshooting--hints).*

### Send Message

To send a message, you will need the following:
```typescript
    privateKey: string;
    rpc: string;
    origin: ChainValue;
    destination: ChainValue;
    destinationAddress: string;
    message: string;
```

You will get as a result a `txHash` and a link to [Hyperlane explorer](https://explorer.hyperlane.xyz/)

### Search Messages

To search for messages, you will need the following:

```typescript
    rpc: string;
    origin: ChainValue;
```

The search is limited to the last 2000 blocks.

## Error Handling

Our CLI tool is designed to provide descriptive error messages to help identify issues. Always check the output for any error messages before troubleshooting.

## Troubleshooting & Hints

1. **Missing Chains:** Always ensure that your configuration file inside `config/chains` is present and contains the correct chain configurations. For more information check https://docs.hyperlane.xyz/docs/resources/addresses
2. **Invalid Command:** If you encounter an "Unsupported command" error, double-check the command syntax in the [Usage](#usage) section.

## Contributions

Feel free to fork this project and submit your PRs for any improvements or bug fixes. We appreciate all the help we can get!

## License

MIT License. See [LICENSE](LICENSE) for more information.
