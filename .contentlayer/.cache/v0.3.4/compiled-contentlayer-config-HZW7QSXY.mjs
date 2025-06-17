// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var Experiment = defineDocumentType(() => ({
  name: "Experiment",
  filePathPattern: `experiments/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    status: { type: "string" },
    repoUrl: { type: "string" },
    description: { type: "string" },
    image: { type: "string" },
    type: { type: "string" },
    demoUrl: { type: "string" },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Experiment],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]]
  }
});
export {
  Blog,
  Experiment,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HZW7QSXY.mjs.map
