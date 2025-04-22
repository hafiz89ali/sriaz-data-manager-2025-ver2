**📘 SRIAZ Data Manager 2025 (v2)**

A data management system for students and staff at Sekolah Rendah Islam Az-Zahrah. Developed using Google Apps Script (standalone), HTML, CSS, and JavaScript. This project is designed for the administrative team to manage data centrally and efficiently.

---

**📁 Project Structure**

/SRIAZ Data Manager 2025 ver2
│
├── Code.js                  ← Entry point for Apps Script backend
├── clasp.json               ← CLASP configuration (deployment & sync)
├── appsscript.json          ← Apps Script project manifest
├── README.md                ← Basic documentation for the project
├── src
│   ├── html
│   │   ├── index.html       ← Main UI (includes base HTML shell)
│   │   ├── pages/           ← Modular pages (loaded dynamically)
│   │   │   ├── home.html
│   │   │   ├── pelajar.html
│   │   │   ├── senaraiPelajar.html
│   │   │   ├── daftarPelajar.html
│   │   │   ├── daftarPukalPelajar.html
│   │   │   ├── kemaskiniPelajar.html
│   │   │   ├── pelajarBerhenti.html
│   │   │   ├── staf.html
│   │   │   ├── senaraiStaf.html
│   │   │   ├── daftarStaf.html
│   │   │   ├── stafBerhenti.html
│   │   ├── scripts/
│   │   │   ├── main.js              ← Frontend JavaScript (event handler & loadPage)
│   │   │   ├── daftarPelajar.gs     ← Apps Script for student registration
│   │   ├── styles/
│   │   │   ├── style.css            ← General styling
│   │   │   ├── layout.css           ← Layout styling (grid/sidebar, etc.)
```

**⚙️ Technologies Used**

- **Google Apps Script** – Backend for managing data and spreadsheets
- **HTML/CSS/JS** – Responsive and modular user interface
- **CLASP** – For local development and deployment to Apps Script

---

**🖋️ How to Use the Project**

1. `clasp clone <scriptId>` – Clone project from Google Apps Script
2. Edit code in `src/html/`
3. `clasp push` – Deploy to Google Apps Script
4. Open Apps Script editor and run `doGet()` to view the initial interface

---

**📌 Additional Notes**

- The `index.html` file contains the main UI structure (including sidebar and wrapper)
- All other pages are located in `pages/` and dynamically loaded via JavaScript
- CSS is divided into two: `style.css` for general styles and `layout.css` for layout design

---

Prepared by: `github.com/hafiz89ali` 
