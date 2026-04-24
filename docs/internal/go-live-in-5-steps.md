---

title: 'Go live in five steps'
sidebar_label: 'Go live in five steps'
sidebar_position: 3
-------------------

# Go live in five steps

## About this guide

This guide walks you through the fastest path to getting your first products live on a marketplace using ChannelEngine.

It’s designed for new users who want a clear, end-to-end overview of the onboarding process—from product import to publication.

---

## Before you start

To avoid delays, make sure you have the following ready:

* Product data (from your PIM, ERP, or a file export)
* An active marketplace account (e.g. Amazon, bol)
* Access to your ChannelEngine environment

> 💡 The quality of your product data directly impacts how quickly you can go live.

---

## Step 1 — Import your products

Before you can sell, your product data must be available in ChannelEngine.

There are two main ways to import your data:

### Option A: Product feed (recommended for quick setup)

A product feed is the fastest way to get started.

* You provide a URL to your product data (e.g. XML or CSV)
* ChannelEngine retrieves and processes the file on a schedule
* Your products become available for mapping and validation

👉 Best for:

* Quick onboarding
* Non-technical users

---

### Option B: API integration (recommended for scalability)

With an API connection:

* Your system (e.g. PIM) connects directly to ChannelEngine
* Product updates are near real-time
* You have more control and flexibility

👉 Best for:

* Larger catalogs
* Automated workflows

> ⚠️ Requires development effort and technical support.

---

## Step 2 — Connect to a marketplace

Next, add the marketplace (called a *channel* in ChannelEngine).

* Go to the Dashboard
* Add a new channel (e.g. Amazon, bol)
* Follow the authorization steps

Each marketplace has its own requirements, so the setup flow may differ slightly.

---

## Step 3 — Map categories and attributes

Marketplaces expect product data in a specific structure.

Your task is to **translate your data into the marketplace format**.

### What you need to map:

* Categories (where your products appear)
* Attributes (e.g. title, description, price, brand)

### Example:

| Your system   | Marketplace        |
| ------------- | ------------------ |
| `title`       | `Product_name`     |
| `description` | `Long_description` |

Mapping ensures that:

* The marketplace understands your data
* Required fields are filled
* Validation can succeed

> 💡 This is one of the most critical steps—incorrect mapping leads to most errors later.

---

## Step 4 — Validate and fix errors

Once your data is submitted, the marketplace validates it.

This includes checks like:

* Required attributes are present
* Formatting is correct (e.g. HTML where required)
* Field lengths are within limits
* Category rules are followed

### What to expect

* Validation can take time (minutes to days)
* Some marketplaces include manual review

### How to fix errors

* Go to the **Validation and feedback** tab of your channel
* Review errors per product
* Update your mapping or source data accordingly

> 💡 First-time integrations almost always require several iterations—this is normal.

---

## Step 5 — Activate and publish

Once validation passes:

* Activate the channel
* Enable product listings
* Push your products live

🎉 Your products are now available on the marketplace.

---

## What’s next?

After going live, you typically move on to:

* Managing orders and shipments
* Monitoring synchronization and errors
* Optimizing product data and pricing

---

## Troubleshooting tips

* If products are not visible → check validation status
* If attributes are missing → review mapping
* If updates don’t sync → verify your feed or API connection

---

## Summary

To go live with ChannelEngine:

1. Import your product data
2. Connect a marketplace
3. Map categories and attributes
4. Validate and fix errors
5. Activate and publish

Focus on data quality and correct mapping—these have the biggest impact on your success.
