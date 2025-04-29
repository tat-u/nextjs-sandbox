import { CSSProperties } from "react";

export const toKebabCase = (str: string) => {
  // 大文字を含む文字列をケバブケースに直す
  // toKebabCase("toKebabCase") => "to-kebab-case"

  const regex = new RegExp(/[A-Z]/g);
  return str.replace(regex, (v) => `-${v.toLowerCase()}`);
};

export const cssPropsToKebebCase = (cssProps: CSSProperties) => {
  return Object.keys(cssProps).reduce((acc, key) => {
    const cssKey = toKebabCase(key);
    // NOTE: string でない可能性があるため、ここのエラーが出たときは対策を考える
    let cssValue = cssProps[key as keyof CSSProperties] as string;
    cssValue = cssValue.replace("'", "");
    return `${acc}${cssKey}: ${cssValue};\n`;
  }, "");
};
