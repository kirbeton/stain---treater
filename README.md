# 🧴 Stain-Treater

**Stain-Treater** הוא אתר אינטראקטיבי שפותח באמצעות **Next.js, React ו-TypeScript**, ומשלב חוויית משתמש מודרנית עם רכיבים דינמיים וממשק צ׳אט.

הפרויקט נבנה כחלק מתיק עבודות, ומדגים ארכיטקטורה נקייה, חלוקה נכונה לקומפוננטות ושימוש ב-API פנימי של Next.js.

---

## 🚀 תכונות עיקריות

- ממשק משתמש מודרני ורספונסיבי  
- רכיב צ׳אט אינטראקטיבי  
- סליידר Before / After להמחשה ויזואלית  
- שימוש ב-API Routes של Next.js  
- קוד כתוב ב-TypeScript עם מבנה ברור וקריא  

---

## 🧠 טכנולוגיות

- **Next.js** – Framework מבוסס React
- **React** – בניית ממשק משתמש
- **TypeScript** – טיפוסים ויציבות קוד
- **API Routes** – תקשורת בין Frontend ל-Backend
- **CSS Modules / Styling מודרני**

---

## 📁 מבנה הפרויקט

stain-treater/
│
├─ app/
│ ├─ api/
│ │ └─ bot/
│ │ └─ route.ts # API עבור הצ׳אט
│ └─ page.tsx # דף הבית
│
├─ components/
│ ├─ BeforeAfterSlider.tsx
│ ├─ ChatBot.tsx
│ └─ props.tsx
│
├─ public/
│ └─ image/
│ └─ image-2.png
│
├─ package.json
└─ README.md



---

## ▶️ הרצה מקומית

1. התקנת התלויות:
```bash
npm install

npm run dev
