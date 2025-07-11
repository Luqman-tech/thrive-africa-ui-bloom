import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Services",
          type: "page",
          urlPath: "/services",
          filePath: "content/services.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "body", type: "markdown" }
          ]
        },
        {
          name: "Projects",
          type: "page",
          urlPath: "/projects",
          filePath: "content/projects.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "body", type: "markdown" }
          ]
        },
        {
          name: "BlogPost",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "content/blog/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "date" },
            { name: "description", type: "string" },
            { name: "body", type: "markdown" }
          ]
        }
      ]
    })
  ]
}); 