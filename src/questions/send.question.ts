import inquirer from 'inquirer';

import { SendAnswer, Choice, ChainValue } from '../models/choice.ts';

export async function sendQuestion(): Promise<SendAnswer> {

    const chainChoices: Choice[] = [
        {name: ChainValue.ETHEREUM.valueOf(), value: ChainValue.ETHEREUM},
        {name: ChainValue.GOERLI.valueOf(), value: ChainValue.GOERLI},
        {name: ChainValue.SEPOLIA.valueOf(), value: ChainValue.SEPOLIA},
    ];

    return await inquirer.prompt([{
        name: 'privateKey',
        message: 'First, let\'s connect to your wallet. Enter your private key:',
    },
    {
        name: 'rpc',
        message: 'Second, Enter your RPC URL:',
    },    
    {
        name: 'origin',
        type: 'list',
        message: 'Choose your origin chain',
        choices: chainChoices,
    },
    {
        name: 'destination',
        type: 'list',
        message: 'Choose your destination chain',
        choices: chainChoices,
    },
    {
        name: 'destinationAddress',
        message: 'Enter your destination address:',
    },
    {
        name: 'message',
        message: 'Enter your message:',
    },
    ]);
}