import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["public/content"],
      models: [
        {
          name: "Services",
          type: "page",
          urlPath: "/services",
          filePath: "public/content/services.json",
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
          filePath: "public/content/projects.json",
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
          filePath: "public/content/blog/{slug}.json",
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