// Plain JavaScript doesn't let us take advantage of Interfaces or static types.
// This function just gives us a way to explicitely defend against invalid apis.
export function validateApi(api, method) {
  if (!api || !api[method]) {
    throw new TypeError(`Invalid api! Expected object with method, ${method} `);
  }
}
