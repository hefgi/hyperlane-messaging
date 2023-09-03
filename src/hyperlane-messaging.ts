import { displayHeader } from './utils/display.ts';
import { SendAnswer, WhatAnswer, WhatValue, QueryAnswer } from './models/choice.ts';
import { whatQuestion, sendQuestion, queryQuestion } from './questions/index.ts';
import { sendMessage } from './commands/send.ts';
import { query } from './commands/query.ts';

export async function HyperlaneMessaging(): Promise<any> {
    displayHeader();

    const whatAnswer: WhatAnswer = await whatQuestion();

    if (whatAnswer.what === WhatValue.SEND) {
        const sendAnswer: SendAnswer = await sendQuestion();
        return await sendMessage(sendAnswer);
    } else if (whatAnswer.what === WhatValue.SEARCH)  {
        const queryAnswer: QueryAnswer = await queryQuestion();
        return await query(queryAnswer);
    } 
}