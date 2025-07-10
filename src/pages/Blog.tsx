import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";

const Blog: React.FC = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/content/blog/index.md")
      .then((res) => res.text())
      .then((text) => {
        const { attributes, body } = fm<Record<string, unknown>>(text);
        setTitle((attributes.title as string) || "");
        setBody(body);
      });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      {title && <h1>{title}</h1>}
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default Blog; 