function validateKeys() {
  // Read keys from .env file with another project that is using this npm package for validation
  const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;
  const sdkKey = process.env.REACT_APP_LAYER_SDK_KEY;

  if (
    !apiKey ||
    !sdkKey ||
    apiKey !== "AB12C3D4-E5FG-67H8-91J0-KLMN120P3Q45" ||
    sdkKey !== "sk_live_51Jx6f7gh8iL9a1b2c3d4e5F"
  ) {
    return {
      error: true
    };
  }

  return {
    error: false,
  };
}

export default validateKeys;
