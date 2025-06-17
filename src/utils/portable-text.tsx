import { ReactNode } from "react";

export interface PortableTextMark {
  _type: string;
  text: string;
  marks: string[];
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: PortableTextMark[];
}

export const renderMarks = (text: string, marks: string[]): ReactNode => {
  if (!marks.length) return text;

  return marks.reduce<ReactNode>((content, mark) => {
    switch (mark) {
      case "strong":
        return <strong key={mark}>{content}</strong>;
      case "em":
        return <em key={mark}>{content}</em>;
      case "code":
        return <code key={mark}>{content}</code>;
      case "underline":
        return <u key={mark}>{content}</u>;
      default:
        return content;
    }
  }, text);
};

export const renderBlock = (block: PortableTextBlock) => {
  const { style, children, _type } = block;

  if (_type === "block") {
    const content = children.map((child: PortableTextMark) =>
      renderMarks(child.text, child.marks || []),
    );

    switch (style) {
      case "h1":
        return (
          <h1 key={block._key} className="mb-4 text-4xl font-bold">
            {content}
          </h1>
        );
      case "h2":
        return (
          <h2 key={block._key} className="mb-3 text-3xl font-bold">
            {content}
          </h2>
        );
      case "h3":
        return (
          <h3 key={block._key} className="mt-12 mb-2 text-2xl font-bold">
            {content}
          </h3>
        );
      case "h4":
        return (
          <h4 key={block._key} className="mb-2 text-xl font-bold">
            {content}
          </h4>
        );
      case "blockquote":
        return (
          <blockquote
            key={block._key}
            className="border-primary my-4 border-l-4 pl-4 italic"
          >
            {content}
          </blockquote>
        );
      case "normal":
      default:
        return (
          <p key={block._key} className="mb-4">
            {content}
          </p>
        );
    }
  }

  return null;
};
