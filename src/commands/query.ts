import { ethers, AbiCoder } from 'ethers';
import { getMailboxABI, getMailboxAddress, getDomain } from '../utils/config.ts';
import { QueryAnswer } from '../models/choice.ts';
import { log } from 'console';

export async function query(answers: QueryAnswer) {
    try {
        const provider = new ethers.JsonRpcProvider(answers.rpc);
        const contract = new ethers.Contract(getMailboxAddress(answers.origin), getMailboxABI(), provider);
        // Querying logs for Dispatch events
        const logs = await provider.getLogs({
            address: getMailboxAddress(answers.origin),
            topics: [ethers.id('Dispatch(address,uint32,bytes32,bytes)')],
            fromBlock: '0x' + (await provider.getBlockNumber() - 2000).toString(16),
            toBlock: 'latest'
        });

        for (let log of logs) {
            const topicstest: Array<string> = Array.from(log.topics); // weird fix because of 'Problem with typings' with ethers v6 https://github.com/ethers-io/ethers.js/issues/4029
            const logtest: { topics: string[]; data: string; } = {topics: topicstest, data: log.data}
            const result = contract.interface.parseLog(logtest);

            console.log({
                sender: result?.args[0],
                destination: result?.args[1],
                recipient: result?.args[2],
                message: result?.args[3]
            });

        }
    } catch (err) {
        console.error('Error dispatching message:', err);
    }
}