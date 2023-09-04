import { displayHeader } from "./utils/display.ts";
import { WhatValue } from "./models/choice.ts";
import {
  whatQuestion,
  sendQuestion,
  queryQuestion,
} from "./questions/index.ts";
import { sendMessage } from "./commands/send.ts";
import { query } from "./commands/query.ts";

export async function HyperlaneMessaging(): Promise<void> {
  displayHeader();

  const { what } = await whatQuestion();

  if (what === WhatValue.SEND) {
    const sendAnswer = await sendQuestion();
    await sendMessage(sendAnswer);
  } else if (what === WhatValue.SEARCH) {
    const queryAnswer = await queryQuestion();
    await query(queryAnswer);
  }
}
