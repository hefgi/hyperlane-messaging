import { ethers } from "ethers";
import { getMailboxABI, getMailboxAddress } from "../utils/config.ts";
import { QueryAnswer } from "../models/choice.ts";

export async function query(answers: QueryAnswer): Promise<void> {
  try {
    const provider = new ethers.JsonRpcProvider(answers.rpc);
    const contract = new ethers.Contract(
      getMailboxAddress(answers.origin),
      getMailboxABI(),
      provider
    );
    // Querying logs for Dispatch events
    const logs = await provider.getLogs({
      address: getMailboxAddress(answers.origin),
      topics: [ethers.id("Dispatch(address,uint32,bytes32,bytes)")],
      fromBlock: "0x" + ((await provider.getBlockNumber()) - 2000).toString(16),
      toBlock: "latest",
    });

    for (const log of logs) {
      const { topics, data } = log;

      const result = contract.interface.parseLog({
        // Need to copy topics as bug with readonly string: https://github.com/ethers-io/ethers.js/issues/4029
        topics: [...topics],
        data: data,
      });

      if (!result) {
        console.error("error parsing log");
        continue;
      }

      const [sender, destination, recipient, message] = result.args;

      console.log({
        sender,
        destination,
        recipient,
        message,
      });
    }
  } catch (err) {
    console.error("Error dispatching message:", err);
  }
}
