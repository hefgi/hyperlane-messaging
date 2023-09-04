import inquirer from "inquirer";

import { WhatAnswer, Choice, WhatValue } from "../models/choice.ts";

export async function whatQuestion(): Promise<WhatAnswer> {
  const whatChoices: Choice[] = [
    { name: WhatValue.SEND, value: WhatValue.SEND },
    { name: WhatValue.SEARCH, value: WhatValue.SEARCH },
  ];

  return await inquirer.prompt([
    {
      name: "what",
      type: "list",
      message: "Let's begin. What would you like to do?",
      choices: whatChoices,
    },
  ]);
}
