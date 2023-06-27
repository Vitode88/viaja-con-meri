function isEmailAddress(text) {
  // Regular expression to validate an email address
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(text);
}

function hasNoSpecialCharacters(text) {
  // Regular expression to match any special characters
  const pattern = /[^\w\s]/;

  return !pattern.test(text);
}

export { isEmailAddress, hasNoSpecialCharacters };
