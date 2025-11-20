type ClassDictionary = Record<string, boolean>;

type ClassValue = ClassDictionary | string;

function classValueToArray(value: ClassValue) {
  if (typeof value === "string") return [value];
  return Object.keys(value).reduce((acc, key) => {
    if (value[key]) acc.push(key);
    return acc;
  }, [] as string[]);
}

export function clsx(...classes: ClassValue[]) {
  return classes.map(classValueToArray).flat().join(" ");
}
