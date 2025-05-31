# Welcome to Remix!

- # 🛠️ Remix Form Builder

A fully functional, beautiful form builder built with **Remix**, **React**, and **Tailwind CSS**. This app allows users to visually build forms using drag-and-drop, customize fields, preview them in different device modes, generate shareable public form links, collect submissions — all in a sleek and intuitive UI.

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
├── routes/ # Remix routes (index.tsx, etc.)  
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

---

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Saima9/form-builder
cd form-builder
```

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

## 🧪 Usage Guide  
➕ Build Your Form  
Use the Field List to add fields to your form.

Click on a field in the preview to edit it.

Drag and drop fields to reorder them.

## 🔍 Preview Responsively
Switch between Desktop, Tablet, and Mobile preview modes.

Toggle between interactive and read-only mode.

## 📎 Share Your Form
Click “Generate Shareable Link” to get a public URL with a Form ID.

Share this URL so users can fill out your form.

## 📨 View Submissions
When someone fills your form, the response is saved locally.

Navigate to /submissions/[formId] to view all form responses.

## 📦 Tech Stack
Remix  

React  

Tailwind CSS  

LocalStorage (for temporary form & submission storage)
