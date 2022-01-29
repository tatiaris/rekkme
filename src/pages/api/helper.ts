export const getErrorStatusCode = (code) => {
  try {
    const status = parseInt(code);
    if (status) return status;
    else throw new Error('500');
  } catch (error) {
    return 500;
  }
};
