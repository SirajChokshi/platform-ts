export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function timer<T>(
  promise: Promise<T>,
  ms: number
): Promise<T | void> {
  const res = await Promise.race([promise, sleep(ms)]);

  return res;
}
