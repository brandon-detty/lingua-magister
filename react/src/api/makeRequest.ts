const makeRequest = async (relPath: string, method: string = "GET") => {
  const res = await fetch(`http://localhost:8042/${relPath}`);
  return res.json();
};

export default makeRequest;
