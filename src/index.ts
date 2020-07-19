import {
  hasEmail,
  hasIpv4,
  hasIpv6,
  replaceEmail,
  replaceIpv4,
  replaceIpv6,
} from './regexes';

type PIIType = 'email' | 'ipv4' | 'ipv6';

let handledPII: { [key: string]: boolean } = {
  email: true,
  ipv4: true,
  ipv6: true,
};

const setHandledPII = (piiArray: Array<PIIType>): void => {
  handledPII = {};
  piiArray.forEach((pii: PIIType) => {
    handledPII[pii] = true;
  });
};

const getHandledPII = (): Array<string> => {
  const piiArray = [];
  for (const pii in handledPII) {
    if (handledPII[pii]) {
      piiArray.push(pii);
    }
  }

  return piiArray;
};

const containsPII = (text: string): boolean => {
  // handle bad argument
  if (!text || typeof text !== 'string') {
    return false;
  }

  return (
    (handledPII.email && hasEmail(text)) ||
    (handledPII.ipv4 && hasIpv4(text)) ||
    (handledPII.ipv6 && hasIpv6(text))
  );
};

const anonymizePII = (text: string): string => {
  // handle bad argument
  if (!text || typeof text !== 'string') {
    return text;
  }
  let anonymizedText = text;

  if (handledPII.email) {
    anonymizedText = replaceEmail(anonymizedText);
  }
  if (handledPII.ipv4) {
    anonymizedText = replaceIpv4(anonymizedText);
  }
  if (handledPII.ipv6) {
    anonymizedText = replaceIpv6(anonymizedText);
  }

  return anonymizedText;
};

export { setHandledPII, getHandledPII, containsPII, anonymizePII };
