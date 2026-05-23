/** Use CMS value when non-empty; otherwise keep site fallback. */
export function str(value: string | undefined | null, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export function num(value: number | undefined | null, fallback: number): number {
  return value != null && !Number.isNaN(value) ? value : fallback;
}

export function withFields<T extends Record<string, unknown>>(
  data: Partial<T> | null | undefined,
  defaults: T,
  stringKeys: (keyof T)[],
  optionalKeys: (keyof T)[] = []
): T {
  const merged = { ...defaults, ...(data ?? {}) } as T;
  for (const key of stringKeys) {
    const fallback = defaults[key];
    if (typeof fallback === 'string') {
      (merged as Record<string, unknown>)[key as string] = str(
        data?.[key] as string | undefined,
        fallback
      );
    }
  }
  for (const key of optionalKeys) {
    const val = data?.[key];
    if (val === undefined || val === null || val === '') {
      (merged as Record<string, unknown>)[key as string] = defaults[key];
    }
  }
  return merged;
}

export function withListDefaults<T extends Record<string, unknown>>(
  items: T[] | null | undefined,
  defaults: T[],
  stringKeys: (keyof T)[]
): T[] {
  if (!items?.length) return defaults.map((d) => ({ ...d }));

  if (items.length >= defaults.length) {
    return items.map((item, i) => {
      const base = defaults[i % defaults.length] ?? defaults[0];
      return mergeItem(item, base, stringKeys);
    });
  }

  return defaults.map((base, i) => {
    const item = items[i];
    return item ? mergeItem(item, base, stringKeys) : { ...base };
  });
}

function mergeItem<T extends Record<string, unknown>>(
  item: T,
  base: T,
  stringKeys: (keyof T)[]
): T {
  const merged = { ...base, ...item };
  for (const key of stringKeys) {
    const fallback = base[key];
    if (typeof fallback === 'string') {
      (merged as Record<string, unknown>)[key as string] = str(
        item[key] as string | undefined,
        fallback
      );
    }
  }
  if (typeof base.imageUrl === 'string') {
    (merged as Record<string, unknown>).imageUrl = str(
      item.imageUrl as string | undefined,
      base.imageUrl as string
    );
  }
  return merged;
}
