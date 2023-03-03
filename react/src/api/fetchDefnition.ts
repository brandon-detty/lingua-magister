import makeRequest from "./makeRequest";

const fetchDefinition = (w: string) => makeRequest(`translation/${w}`);

export default fetchDefinition;
