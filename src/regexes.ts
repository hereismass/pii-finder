const emailRe = new RegExp(
  /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/
);
const ipv4Re = new RegExp(
  /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/
);
const ipv6Re = new RegExp(
  /(fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|2[0-4][0-9]|1{0,1}[0-9]{0,1}[0-9])\.{3,3})(25[0-5]|2[0-4][0-9]|1{0,1}[0-9]{0,1}[0-9])|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|2[0-4][0-9]|1{0,1}[0-9]{0,1}[0-9])\.{3,3})(25[0-5]|2[0-4][0-9]|1{0,1}[0-9]{0,1}[0-9])|:((:[0-9a-fA-F]{1,4}){1,7}|:))/
);

const emailReGlobal = new RegExp(emailRe.source, 'g');
const ipv4ReGlobal = new RegExp(ipv4Re.source, 'g');
const ipv6ReGlobal = new RegExp(ipv6Re.source, 'g');

export const hasEmail = (text: string): boolean => {
  return text.indexOf('@') > -1 && emailRe.test(text);
};

export const hasIpv4 = (text: string): boolean => {
  return ipv4Re.test(text);
};

export const hasIpv6 = (text: string): boolean => {
  return ipv6Re.test(text);
};

export const replaceEmail = (text: string): string => {
  return text.replace(emailReGlobal, '***email***');
};

export const replaceIpv4 = (text: string): string => {
  return text.replace(ipv4ReGlobal, '***ip address***');
};

export const replaceIpv6 = (text: string): string => {
  return text.replace(ipv6ReGlobal, '***ip address***');
};
