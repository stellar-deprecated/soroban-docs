import lodashEscape from "lodash/escape";

export type Children = string | undefined | (string | string[] | undefined)[];

export type Props = Record<string, any> & { children?: Children };

export function create(tag: string, props: Props): string {
  const { children, ...rest } = props;

  let propString = "";
  for (const [key, value] of Object.entries(rest)) {
    propString += ` ${key}={${JSON.stringify(value)}}`;
  }

  return `<${tag}${propString}>${render(children)}</${tag}>`;
}

export function guard<T>(
  value: T | undefined,
  cb: (value: T) => Children
): string {
  if (value) {
    const children = cb(value);
    return render(children);
  }
  return "";
}

export function render(children: Children): string {
  if (Array.isArray(children)) {
    const filteredChildren = children.filter((c) => c !== undefined);
    return filteredChildren
      .map((i: any) => (Array.isArray(i) ? i.join("") : i))
      .join("");
  }
  return children ?? "";
}

export function escape() {
  return function (text: string, render: (text: string) => string) {
    return lodashEscape(render(text));
  };
}

export function stringify() {
  return function (text: string, render: (text: string) => string) {
    return JSON.stringify(render(text));
  };
}
