interface Text {
    id: number;
    title: string;
    body: string;
}
export declare const isText: (v: Text | Exclude<unknown, Text>) => v is Text;
export default Text;
