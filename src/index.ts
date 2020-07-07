import { hasEmail } from './regexes';

export const containsPII = (text: string) => {
  return hasEmail(text);
};
