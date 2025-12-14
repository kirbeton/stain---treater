# 🧴 Stain-Treater

**Stain-Treater** הוא אתר אינטראקטיבי שפותח באמצעות **Next.js, React ו-TypeScript**, ומשלב חוויית משתמש מודרנית עם רכיבים דינמיים וממשק צ׳אט.

הפרויקט נבנה כחלק מתיק עבודות, ומדגים ארכיטקטורה נקייה, חלוקה נכונה לקומפוננטות ושימוש ב-API פנימי של Next.js.

---

## 🧠 על הפרויקט

- מבנה רכיבים מודולרי עם **TypeScript**
- חלק ייעודי לשאלות ותשובות (**Chat Interface**)
- מסלול נגיש למפתחים שרוצים להרחיב את הפרויקט

הפרויקט מדגים שימוש ב:
- ✔ **Next.js + React**
- ✔ **TypeScript**
- ✔ רכיבים מותאמים אישית
- ✔ API בסיסי בתוך התיקייה `app/api`

---

## 🚀 תכונות עיקריות

### 🗂 חלוקה לקומפוננטות
הפיצ׳רים מחולקים לקבצים ברורים וממוינים לפי תפקיד:

- `components/BeforeAfterSlider.tsx` — סליידר אינטראקטיבי
- `components/ChatBot.tsx` — ממשק הצ׳אט
- `components/props.tsx` — ממשקים ומודלים (interfaces / props)

### 🚀 נתיב API מובנה
ב־Next.js נוצלה מערכת ה־API המובנית:

- `app/api/bot/route.ts` — מסלול API המטפל בבקשות הצ׳אט

---

## 📦 התקנה והרצה מקומית

כדי להפעיל את הפרויקט אצלך:

### התקנת התלויות
```bash
npm install

```

# 📁 מבנה התיקיות

stain-treater/
│
├─ app/
│   ├─ api/
│   │   └─ bot/
│   │       └─ route.ts   # API עבור הצ׳אט
│   └─ page.tsx          # דף הבית
│
├─ components/
│   ├─ BeforeAfterSlider.tsx
│   ├─ ChatBot.tsx
│   └─ props.tsx
│
├─ public/
│   └─ image/
│       └─ image-2.png   # תמונת הדגמה
│
├─ package.json
└─ README.md



טכנולוגיה	שימוש
Next.js	Framework מתקדם מבוסס React
React	בניית ממשק משתמש
TypeScript	טיפוסי קוד חזקים ותחזוקה
API Routes	יצירת נקודות API בתוך Next.js
🎯 מה למדתי בפרויקט הזה

✔ עבודה עם TypeScript ו־Next.js

✔ יצירת רכיבים אינטראקטיביים

✔ חלוקה נכונה לפי תפקידים

✔ הבנת זרימת נתונים בין UI ל־API

📌 לסיום

הפרויקט הזה הוא דוגמה ליכולות שלי כמתכנת Frontend / FullStack, המשתמש ב־React, Next.js ו-TypeScript, עם הבנה טובה בארכיטקטורת פרויקטים נקייה, מודולרית ומתוחזקת.
