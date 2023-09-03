import { Interface, InterfaceAbi } from 'ethers';
import fs from 'fs';
import path from 'path';

const CHAINS_PATH = path.join(process.cwd(), './src/config/chains/');
const ABI_PATH = path.join(process.cwd(), './src/config/abis/');

export function getDomain(chain: string): string {
    const chainConfig = JSON.parse(fs.readFileSync(CHAINS_PATH + chain + '.json', 'utf-8'));
    return chainConfig['domain'];
}

export function getMailboxAddress(chain: string): string {
    const chainConfig = JSON.parse(fs.readFileSync(CHAINS_PATH + chain + '.json', 'utf-8'));
    return chainConfig['mailbox'];
}

export function getMailboxABI(): InterfaceAbi {
    const mailboxABI = JSON.parse(fs.readFileSync(ABI_PATH + 'mailbox.json', 'utf-8'));
    return mailboxABI;
}