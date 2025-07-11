import React, { useEffect, useState } from "react";

const Services: React.FC = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/content/services.json")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || "");
        setBody(data.body || "");
      });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      {title && <h1>{title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default Services; 