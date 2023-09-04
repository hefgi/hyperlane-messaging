import { ethers } from "ethers";
import {
  getMailboxABI,
  getMailboxAddress,
  getDomain,
} from "../utils/config.ts";
import { SendAnswer } from "../models/choice.ts";

export async function sendMessage(answers: SendAnswer): Promise<void> {
  try {
    const provider = new ethers.JsonRpcProvider(answers.rpc);
    const wallet = new ethers.Wallet(answers.privateKey, provider);
    const contract = new ethers.Contract(
      getMailboxAddress(answers.origin),
      getMailboxABI(),
      wallet
    );
    const messageBytes = "0x" + Buffer.from(answers.message).toString("hex");

    console.log(`Message being dispatched... Please wait.`);

    const txResponse = await contract.dispatch(
      getDomain(answers.destination),
      answers.destinationAddress,
      messageBytes
    );
    const txReceipt = await txResponse.wait();

    console.log(`Message dispatched with tx hash: ${txReceipt.hash}`);

    console.log(
      `Check your message on our explorer: https://explorer.hyperlane.xyz/?search=${txReceipt.hash}`
    );
  } catch (err) {
    console.error("Error dispatching message:", err);
  }
}
