export const isText = (v) => {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof v.id === "number" &&
        "title" in v &&
        typeof v.title === "string" &&
        "body" in v &&
        typeof v.body === "string");
};
