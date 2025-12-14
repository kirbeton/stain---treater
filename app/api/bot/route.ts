import { NextResponse } from "next/server";

// מאגר התשובות
const FAQ = [
  {
    keywords: ["כמה", "מחיר", "כמה זה עולה", "עלות"],
    answer: "המוצר עולה 59 ש״ח בלבד במבצע + משלוח מהיר! אם לא מרוצים – החזר מלא תוך 30 יום."
  },
  {
    keywords: ["איך", "משתמש", "שימוש"],
    answer: `כך משתמשים ב-Stain Treater:
1) מרססים ישירות על הכתם.
2) ממתינים 2–3 דקות.
3) שוטפים במים או מכבסים – והכתם נעלם!`
  },
  {
    keywords: ["דם", "שמן", "קפה", "דשא", "כתמי"],
    answer: "כן! המוצר עובד על כתמי שמן, דם, קפה, דשא, יין ועוד."
  },
  {
    keywords: ["בטוח", "ילדים", "תינוקות"],
    answer: "המוצר בטוח לילדים ולתינוקות, ידידותי לסביבה ולא רעיל."
  },
  {
    keywords: ["החזר", "החזרה", "כסף"],
    answer: "יש אחריות מלאה! אם לא מרוצים – החזר כספי מלא תוך 30 יום."
  }
];

// פונקציית חיפוש התשובה
function findAnswer(message: string) {
  const lower = message.toLowerCase();

  for (const item of FAQ) {
    for (const key of item.keywords) {
      if (lower.includes(key)) {
        return item.answer;
      }
    }
  }

  return "לא הצלחתי להבין… אפשר לנסח שוב?";
}

export async function POST(req: Request) {
  const { message } = await req.json();

  const reply = findAnswer(message);

  return NextResponse.json({ reply });
}
