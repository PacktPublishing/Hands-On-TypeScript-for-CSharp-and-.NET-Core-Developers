import { INPUT_ERROR_MESSAGES } from "../app/app-tokens"
import { inputErrorMessages } from "../app/en-US/input-error-messages";
export const environment = {
  production: true,
  rootProviders: [
    {
      provide: INPUT_ERROR_MESSAGES,
      useFactory: () => inputErrorMessages
    }
  ]
};
