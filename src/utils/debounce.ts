export function debounce<F extends (...args: unknown[]) => unknown>(
  fn: F,
  wait = 0,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
