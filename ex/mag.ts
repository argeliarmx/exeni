function errorMsg(message: string): never {
  throw new Error(message);
}

// Usage
errorMsg("This should not happen");
