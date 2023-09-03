import inquirer from 'inquirer';

import { QueryAnswer, Choice, ChainValue } from '../models/choice.ts';

export async function queryQuestion(): Promise<QueryAnswer> {

    const chainChoices: Choice[] = [
        {name: ChainValue.ETHEREUM.valueOf(), value: ChainValue.ETHEREUM},
        {name: ChainValue.GOERLI.valueOf(), value: ChainValue.GOERLI},
        {name: ChainValue.SEPOLIA.valueOf(), value: ChainValue.SEPOLIA},
    ];

    return await inquirer.prompt([{
        name: 'rpc',
        message: 'Enter your RPC URL:',
    }, 
    { 
        name: 'origin',
        type: 'list',
        message: 'Choose your origin chain',
        choices: chainChoices,
    }
    ]);
}