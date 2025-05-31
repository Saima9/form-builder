# Welcome to Remix!

- # 🛠️ Remix Form Builder

A fully functional, beautiful form builder built with *Remix, **React, and **Tailwind CSS*. This app allows users to visually build forms using drag-and-drop, customize fields, preview them in different device modes, generate shareable public form links, collect submissions — all in a sleek and intuitive UI.

---

## ✨ Features

- ⚡ Drag-and-drop field reordering
- 🧱 Add fields: text, email, number, textarea
- ✏️ Edit field properties (label, placeholder, validation)
- 📱 Real-time responsive preview: Desktop, Tablet, Mobile Enable ReadOnly mode- 💾 LocalStorage-powered Form Save FormPreview in LocalStorage and Create Contact Templates

- 🔗 Shareable form links with unique Form ID
- 🧾 Save and view form submissions
- ✅ Client-side validation (required, min/max length, pattern)

---

## 📁 Project Structure
app/
├── components/ # UI components like FieldList, FieldEditor, FormPreview
├── routes/ # Remix routes (index.tsx, $formId.tsx, etc.)
├── styles/ # Tailwind CSS setup
├── utils/ # LocalStorage and helper utilities
public/
├── favicon.svg
tailwind.config.js
remix.config.js
tsconfig.json
package.json

yaml
Copy
Edit

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
