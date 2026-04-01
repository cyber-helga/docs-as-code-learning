---
sidebar_label: 'Workflow'
sidebar_position: 3
---
# Docs-as-code workflow
## How it works

1. Documentation is written in Markdown using Docusaurus.
2. Changes are tracked using Git.
3. The content is pushed to GitHub.
4. A deployment process builds the static website.
5. The site is published and accessible to users.

This diagram shows how documentation is written, versioned, and deployed using a modern docs-as-code approach.

```mermaid
graph TD
  subgraph Authoring
    A[Write docs in Markdown]
    B[Edit locally with Docusaurus]
  end

  subgraph Version_Control
    C[Commit changes with Git]
    D[Push to GitHub]
  end

  subgraph Deployment
    E[CI/CD Pipeline]
    F[Build static site]
    G[Deploy to GitHub Pages]
  end

  subgraph Users
    H[Users access documentation]
  end

  A --> B --> C --> D --> E --> F --> G --> H
```

:::tip
This workflow is used by many modern documentation teams to ensure version control, automation, and scalability.
:::