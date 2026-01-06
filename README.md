# sutr-arr 🧵

> **Array logic and Date logic, written as Sutras.**  
> Short, powerful formulas for JavaScript — inspired by Indian *Sutra* philosophy.

`sutr-arr` is a lightweight, modern JavaScript utility library that transforms **array** and **date** operations into concise, reusable helpers.  
It is designed as a clean alternative to lodash’s array utilities and traditional date libraries, with a strong focus on **clarity**, **immutability**, and **developer ergonomics**.

Instead of long chains and configuration-heavy APIs, `sutr-arr` favors **intent-first functions** — one function for one clear idea.

---

## ✨ What it provides

### 🧮 Array Sutras
Clean helpers for common and advanced array operations, designed to be readable, composable, and immutable.

### 📅 Date Sutras
Human-friendly date utilities focused on real-world needs such as:
- Date shortcuts (`today`, `tomorrow`, `yesterday`)
- Business-day calculations
- Safe date comparisons
- Date ranges and age calculations

Unlike traditional date libraries, `sutr-arr` avoids heavy parsing, locale complexity, and chaining in favor of **predictable, explicit behavior**.

---

## 🕰️ Date input support

This library intentionally supports **only safe and unambiguous date inputs**:

- JavaScript `Date` objects
- ISO date strings (`YYYY-MM-DD`, `YYYY-MM-DDTHH:mm:ssZ`)
- Timestamps (milliseconds)

Locale-specific or free-text date strings are **not supported by design**, to prevent ambiguity and timezone-related bugs.

---

## 🎯 Design philosophy

- **Intent over configuration**
- **Immutability by default**
- **Readable, English-like APIs**
- **No guessing, no silent failures**

`sutr-arr` complements existing libraries by focusing on **what developers mean**, not just what JavaScript allows.

---

## 📦 Installation

```bash
npm install @nikunjjadav1234/sutr-arr

import { SUT_ } from 'sutr-arr'
