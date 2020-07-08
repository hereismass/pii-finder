import { hasEmail, hasIpv4, hasIpv6 } from './regexes';

type PIIType = 'email' | 'ipv4' | 'ipv6';

let handledPII: any = {
  email: true,
  ipv4: true,
  ipv6: true,
};

const setHandledPII = (piiArray: Array<PIIType>) => {
  handledPII = {};
  piiArray.forEach((pii: PIIType) => {
    handledPII[pii] = true;
  });
};

const containsPII = (text: string) => {
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

export { setHandledPII, containsPII };
