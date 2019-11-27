/**
 * Throws error is condition is false.
 * @param {any} condition 
 * @param {string} message 
 */
export function invariant(condition, message) {
  let error
  if (message === undefined) {
    throw new Error('Invariant requires an error message argument.');
  }

  if (!condition) {
    error = new Error(
      message
    );
    error.name = 'Invariant Violation';

    throw error;
  }
}
