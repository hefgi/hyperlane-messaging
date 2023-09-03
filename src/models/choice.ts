export interface WhatAnswer {
    what: WhatValue;
}

export interface SendAnswer {
    privateKey: string;
    rpc: string;
    origin: ChainValue;
    destination: ChainValue;
    destinationAddress: string;
    message: string;
}

export interface QueryAnswer {
    rpc: string;
    origin: ChainValue;
}

export interface Choice {
    name: string;
    value: WhatValue | ChainValue;
}

export enum WhatValue {
    SEND = 'Send a message',
    SEARCH = 'Search for messages'
}

export enum ChainValue {
    ETHEREUM = 'ethereum',
    GOERLI = 'goerli',
    SEPOLIA = 'sepolia'
}