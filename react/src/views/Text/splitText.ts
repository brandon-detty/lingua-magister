const splitText = (s: string): string[] => s.match(/\w+|\s+|[^\s\w]+/g) ?? [];

export default splitText;
