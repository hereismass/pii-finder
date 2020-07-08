const emailRe = /[^@\s]+@[^@\s]+\.[^@\s]+/;
const ipv4Re = /(?:\d{1,3}\.){3}\d{1,3}/;
const ipv6Re = /(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/;

export const hasEmail = (text: string) => {
  return text.indexOf('@') > -1 && emailRe.test(text);
};

export const hasIpv4 = (text: string) => {
  return ipv4Re.test(text);
};

export const hasIpv6 = (text: string) => {
  return ipv6Re.test(text);
};
