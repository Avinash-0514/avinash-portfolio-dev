import type { CSSProperties, ReactNode } from "react";

type MarkdownNodeProps = {
  children?: ReactNode;
};

export const blogContentStyle: CSSProperties = {
  lineHeight: 1.8,
  color: "#374151",
  fontSize: "18px",
};

export const markdownComponents = {
  h1: ({ children }: MarkdownNodeProps) => (
    <h1
      style={{
        fontSize: "40px",
        lineHeight: 1.2,
        marginTop: 0,
        marginBottom: "24px",
        color: "#111827",
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: MarkdownNodeProps) => (
    <h2
      style={{
        fontSize: "28px",
        lineHeight: 1.3,
        marginTop: "40px",
        marginBottom: "16px",
        color: "#111827",
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: MarkdownNodeProps) => (
    <h3
      style={{
        fontSize: "22px",
        lineHeight: 1.4,
        marginTop: "32px",
        marginBottom: "12px",
        color: "#111827",
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }: MarkdownNodeProps) => (
    <p
      style={{
        marginBottom: "18px",
        color: "#374151",
      }}
    >
      {children}
    </p>
  ),
  ul: ({ children }: MarkdownNodeProps) => (
    <ul
      style={{
        paddingLeft: "24px",
        marginBottom: "20px",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }: MarkdownNodeProps) => (
    <ol
      style={{
        paddingLeft: "24px",
        marginBottom: "20px",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }: MarkdownNodeProps) => (
    <li
      style={{
        marginBottom: "8px",
        color: "#374151",
      }}
    >
      {children}
    </li>
  ),
  code: ({ children }: MarkdownNodeProps) => (
    <code
      style={{
        backgroundColor: "#f3f4f6",
        padding: "2px 6px",
        borderRadius: "6px",
        fontSize: "15px",
      }}
    >
      {children}
    </code>
  ),
};