# Editing the AGM 2026 Site — A Quick Guide

This is a guide for making **text / copy edits** to the AGM 2026 website.
No coding experience needed. Just follow the steps carefully.

**Live site:** https://everydayslang.github.io/AGM-2026/

> ⚠️ **Edits go live automatically.** When you save (commit) a change, it appears
> on the live site within about a minute. There is no separate "publish" button,
> so double-check your text before saving.

---

## The one golden rule

The text you want to edit is surrounded by code that looks like this:

```html
<h1 class="hero-title fit-width">When The Tide Settles</h1>
```

**Only change the words in the middle** (`When The Tide Settles`).
**Never** touch:
- anything inside the angle brackets `< >`
- anything inside quotation marks `" "`

If you change only the plain words, you can't break anything.

---

## How to edit (step by step)

1. Go to the repository: https://github.com/everydayslang/AGM-2026
2. Click the file you want to edit — for most copy that's **`index.html`**.
3. Click the **pencil icon** (✏️ "Edit this file") near the top right.
4. Find the text you want to change and edit just the words.
5. Scroll to the bottom, click the green **Commit changes** button.
   - Leave the default message, or write a short note like "Fixed typo in overview".
   - Keep "Commit directly to the `main` branch" selected.
6. Wait ~1 minute, then refresh the live site to see your change.

---

## What you CAN safely edit (all in `index.html`)

| Section | What's there |
|---|---|
| **Hero** | The big headline ("When The Tide Settles") and the sentence under it |
| **Overview** | The intro paragraph about the meeting's theme |
| **Location** | The venue description, address, and entry instructions |
| **Dates / times** | e.g. "September 24, 2026", "8:30 AM – 5:00 PM" |

There is also a second file, **`index-lp.html`**, which is a shorter "landing page"
version of the site. If you're asked to update that one too, the same rules apply.

---

## What NOT to touch (ask Stephen instead)

- **Speaker names, photos, and bios**
- **The agenda / schedule items**

These live in a code file called `scripts.js` and are easy to break. A single
missing comma there can take the whole site offline. For changes to speakers or
the agenda, send them to Stephen rather than editing directly.

---

## If something looks broken

Don't panic — nothing is permanent.

- Refresh the page first (sometimes it's just not updated yet).
- If the site looks wrong, message Stephen. Every previous version is saved and
  can be restored in seconds.
