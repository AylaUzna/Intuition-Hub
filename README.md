# 🌐 Intuition Hub

**Intuition Hub** is a simple, community-driven website that showcases all the projects launched during the **Builders Epoch** on the Intuition blockchain.
The goal is to provide a **central place** where anyone can explore, search, and interact with dApps created by community builders.

---

## 🚀 Features

* 🧭 **Navigation Bar** – Logo, menu links, and a wallet connect button (UI only).
* 🌌 **Hero Section** – Bold title, description, and call-to-action buttons.
* ✨ **Dark Starry Background** – A modern look inspired by Web3 apps.
* 📦 **dApp Cards** – Each project is displayed in a responsive card layout.
* 🔎 **Search & Filter** – Quickly find projects by name or category.
* 📱 **Responsive Design** – Works across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

This is a **pure frontend project** – no backend required.

* **HTML5** → structure of the site
* **CSS3** → layout, styling, and responsive design
* **JavaScript (ES6)** → search/filter functionality, card rendering
* **Optional** → lightweight images/icons for project logos

---

## 📂 Project Structure

```bash
intuition-hub/
│── index.html       # Main page structure
│── style.css        # Styling and layout
│── script.js        # JavaScript for interactivity
│── /images          # (Optional) logos/screenshots for dApps
│── README.md        # Project documentation
```

---

## ⚡ Getting Started

Follow these steps to set up and view the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/intuition-hub.git
   ```

2. **Navigate into the project folder**

   ```bash
   cd intuition-hub
   ```

3. **Open `index.html` in your browser**

   * Double-click the file, or
   * Right-click → “Open With” → Choose your browser

No additional setup or server is required since this is a static site. 🎉

---

## 🔧 How to Add New Projects

All project data is stored inside `script.js`.
Find the array called `projects` and add a new entry in this format:

```js
{
  name: "My dApp",
  description: "Short description of the project.",
  category: "DeFi", // Example: DeFi, NFT, Social, Tool, etc.
  link: "https://mydapp.com",
  image: "images/mydapp.png" // optional logo/screenshot
}
```

Save the file → refresh the page → your project appears instantly.

---

## 🎨 Future Improvements

* Add wallet integration (e.g., MetaMask button)
* Enable community submissions through a form
* Starry background animation with canvas
* Light/Dark mode toggle

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-project`)
3. Commit your changes (`git commit -m "Add new project"`)
4. Push to your branch (`git push origin feature/new-project`)
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

✨ Built with ❤️ for the **Intuition community**

---

Would you like me to also **add markdown screenshots** (like your app UI or hero section) inside this `README.md` so your GitHub page looks visually appealing?
