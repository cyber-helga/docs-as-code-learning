---
title: 'User personas'
sidebar_label: 'User personas'
sidebar_position: 1
---

Most documentation fails because it assumes “the user” is one person.

In reality, you likely have three to four distinct personas. 

## Business user (non-technical)
Ecommerce manager
* Goal: get products live and selling on marketplaces without relying on tech teams.
* Definition of success: products visible on marketplaces; no errors blocking sales; stable daily operations.
* Pain: lack of cause-effect clarity ("I changed something, why did it break?"); fear of invisible consequences (Will this setting affect my products?); error messages that don’t translate to action.
* Questions they actually ask: “Why are my products not live on Amazon?”; “What does this error mean for my sales?”; “Did I configure something wrong—or is this a system issue?”; “What’s the safest way to fix this?”
* Content they need: action-oriented guides ("How to fix missing product attributes"); safety cues (“This change affects all products”; “Safe to test on one product first”); visuals and clear examples (screenshots of correct vs. incorrect), error-first documentation ("Why your product is not live").
:::tip
They don’t want to understand the system, they want to **trust their actions won’t hurt revenue**.
:::
## Technical user
Developer / solution engineer
* Goal: build a reliable, scalable integration with ChannelEngine, which automates ecommerce opetations.
* Pain: missing details (implicit behavior not documented), edge cases discovered too late, trial-and-error debugging, docs that assume too much or too little.
* Questions they actually ask: “What exactly triggers this API behavior?”; “What happens if data is missing or malformed?”; “Is this process synchronous or async?”; “What are the rate limits and failure modes?”.
* Content they need: truthful system behavior docs (not marketing-level explanations; real constraints, limits, quirks); edge case documentation (“What happens if X is null?”; “What happens if mapping fails?”); end-to-end flows (from product → feed → marketplace → order → return); debugging guides “How to trace a failed product sync”.
:::tip
They don’t mind complexity. They mind **ambiguity**.
:::
## Operations/Support
Handles orders, returns, errors
* Goal: resolve issues fast, often under pressure.
* Pain: time pressure and unclear paths, searching for the information instead of solving, docs that explain, but don't guide.
* Questions they actually ask: “Why did this order fail?”; “Why is this return not syncing?”; “Where do I even start debugging this?”
* Content they need: troubleshooting flows (“If this → check this → then do this”); symptom-based entry points ("orders not syncing"; "products rejected by the marketplace"); fast answers (short, scannable); clear resolution steps first.
:::tip
They don’t want to read. They want to **resolve and move on**.
:::
##  New customer (critical)
First-time user. This one is important for onboarding success.
* Goal: get first success quickly (“time to value”)
* Pain: no mental model of how things connect; too many unknown terms; unclear starting point; fear of doing things in the wrong order.
* Questions they actually ask: “Where do I even begin?”; “What are the minimum steps to go live?”; “What is a ‘channel’ vs ‘feed’ vs ‘mapping’?”; “What can I skip for now?”.
* Content they need: a clear starting path; mental model first (simple explanation of how ChannelEngine works: Products → channel → mapping → debugging); progressive disclosure (don't dump everything at once); quick wins (“Get 1 product live first”).
:::tip
They don’t need full documentation. They need a **guided path to confidence**.
:::
# Content types mapped to personas

| Content type | Serves which persona |
| ----------- | ----------- |
| Getting started | New customer |
| Conceptual guides | New customer + business user |
| Step-by-step setup | Technical user + operations |
| API docs | Technical user |
| Error explanations | Business user + support |
| Troubleshooting flows | Support + business user|
| Use cases | Business + decision-makers|