---
title: 'Documentation audit'
sidebar_label: 'Documentation audit'
sidebar_position: 2
---
# Documentation audit: ChannelEngine Help Center

## Purpose
This document summarizes an audit of the current documentation and evaluates how well it serves key user personas. It identifies structural gaps and provides direction for improving usability and effectiveness.

---

# Current documentation structure

The Help Center is primarily organized by **features and system components**, such as:
- Getting started
- Product feeds & mapping
- Channel connections
- Orders
- Stock & pricing
- APIs
- Marketplace guides

### Key observation
The structure is:
> Feature → Explanation → Steps

However, users typically think in terms of:
> Problem → Cause → Solution

This mismatch creates friction across multiple user groups.

---

# Persona coverage overview

## Personas evaluated
- New customer (first-time user)
- Business user (e-commerce manager, non-technical)
- Technical user (developer / integrator)
- Operations / support user

---

## Coverage summary

| Persona | Current coverage | Key issue |
|--------|----------------|----------|
| New customer | Partial | No clear onboarding path |
| Business user | Weak | Lacks problem-based guidance |
| Technical user | Strong | Missing edge cases & clarity |
| Operations/support | Weak | No structured troubleshooting |

---

# Section-level findings

## Getting started

### Strengths
- Covers core setup concepts
- Includes glossary and foundational steps

### Gaps
- No clear “start here” journey
- No defined sequence of steps to go live
- Concepts introduced without context

### Missing
- Guided onboarding flow (e.g. “Go live in 5 steps”)
- Embedded explanations instead of separate glossary

---

## Product feeds & mapping

### Strengths
- Detailed configuration guidance
- Step-by-step instructions

### Gaps
- No clear explanation of *why* steps matter
- No visibility into consequences of misconfiguration
- Too tool-focused (UI-driven)

### Missing
- Mental model of how feeds, mapping, and channels connect
- Failure scenarios and their impact
- Outcome-based explanations

---

## Orders

### Strengths
- Covers order lifecycle and statuses
- Useful as a reference

### Gaps
- Not aligned with real user problems
- Lacks troubleshooting guidance
- High cognitive load before actionable steps

### Missing
- “Why is my order stuck?” type content
- Step-by-step troubleshooting flows

---

## APIs

### Strengths
- API references available
- Likely sufficient for experienced developers

### Gaps
- Lack of end-to-end integration flows
- Limited real-world usage scenarios

### Missing
- Full workflow examples (product → marketplace → order)
- Common integration pitfalls

---

## Marketplace guides

### Strengths
- Contextual per marketplace
- Relevant to real-world usage

### Gaps
- Too broad and not task-oriented
- Limited focus on common issues

### Missing
- Marketplace-specific troubleshooting
- Required attribute checklists
- Rejection/error explanations

---

## Troubleshooting content (cross-section)

### Strengths
- Some issue-specific articles exist

### Gaps (critical)
- Scattered and inconsistent
- No centralized “Problems” entry point
- No structured diagnostic flows

### Missing
- Decision trees
- Symptom-based navigation
- Consolidated troubleshooting hub

---

# Key structural gaps

## No onboarding journey (critical)
Users lack:
- A clear starting point
- A defined sequence of steps
- Confidence in setup order

---

## No problem-based navigation
Documentation is not aligned with user questions like:
- “Why are my products not live?”
- “Why are orders not syncing?”

---

##  Weak error and failure documentation
Current focus:
- How to configure

Missing:
- Why things fail
- How to diagnose issues

---

## Missing mental model
Users are not clearly guided through:
- How core system components connect
- How data flows through the platform

---

## Poor support optimization
Support users need:
- Fast answers
- Clear resolution paths

Current docs provide:
- Explanations instead of solutions

---

# Strategic insight

The documentation is:

- ✅ Strong as **reference documentation**
- ❌ Weak as **operational documentation**

---

# Recommended improvements

## Add “start here” experience
Create a guided onboarding entry point:
- “New to ChannelEngine? Start here”
- Step-by-step path to first success

---

## Introduce problem-based navigation
Add a dedicated section for common issues:
- Products not appearing
- Orders not syncing
- Feed errors

---

## Build troubleshooting flows
Replace static articles with:
- Decision trees
- Step-by-step diagnostics

---

## Provide mental model content
Explain:
- How the system works end-to-end
- Relationships between components

---

## Add task-oriented content layer
Complement existing docs with:
- Action-based guides
- Outcome-driven explanations

---

# Content strategy shift

## Current approach
Feature-based documentation

## Recommended approach
Dual-layer structure:

### Layer 1 (existing)
- Feature and reference documentation

### Layer 2 (new)
- Task-based content
- Problem-based guides
- Persona-oriented entry points

---

# High-impact next steps

1. Create a “start here” onboarding guide  
2. Develop 3–5 high-value troubleshooting articles  
3. Introduce problem-based navigation  
4. Redesign key articles to include:
   - context
   - failure scenarios
   - expected outcomes  

---

# Key takeaway

Improving this documentation is not about adding more content.

It is about:
> Aligning content with how users think, act, and solve problems.
