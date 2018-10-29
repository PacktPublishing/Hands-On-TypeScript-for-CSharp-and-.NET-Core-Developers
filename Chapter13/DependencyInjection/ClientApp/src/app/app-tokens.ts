import { InjectionToken } from '@angular/core';

export const INPUT_ERROR_MESSAGES =
  new InjectionToken<{ [key: string]: string }>
    ("Input error messages");
