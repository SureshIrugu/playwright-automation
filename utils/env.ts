import "dotenv/config";

/**
 * Retrieves the value of an environment variable.
 * If the variable is not set or is empty, it returns the fallback value.
 * @param key - The name of the environment variable.
 * @param fallback - The fallback value to return if the environment variable is not set or is empty.
 * @returns The value of the environment variable or the fallback value.
 */
function getEnv(key: string, fallback?: any): any {
  const value = process.env[key];

  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  return value;
}

export const env = {
  BASE_URL: getEnv("BASE_URL", "https://www.otivo.com/cfs/retirementCalculato"),
};
