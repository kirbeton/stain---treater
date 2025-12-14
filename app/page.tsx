import CheckoutButton from '../components/CheckoutButton';
import PayPalSimpleButton from "@/components/PayPalSimpleButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import props from "@/components/props";
import ChatBot from "@/components/ChatBot";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* בוט שירות לקוחות */}
      <ChatBot />
      {/* עליון */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-xl">STAIN TREATER</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="hover:underline">יתרונות</a>
            <a href="#how" className="hover:underline">איך זה עובד</a>
            <a href="#reviews" className="hover:underline">חוות דעת</a>
            <a href="#faq" className="hover:underline">שאלות</a>
          </nav>
          <a
            href="#buy"
            className="font-semibold inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            קנה עכשיו
          </a>
        </div>
      </header>

      {/* הירו */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            אומרים שלום לכתמים. <span className="text-blue-600">Stain Treater</span> מחזיר לבגדים חיים!
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            פורמולה חכמה שמפרקת כתמי שמן, קפה, דם, דשא ועוד — במהירות, בלי לפגוע בבד ובלי ריחות קשים.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 shadow-md transition-all"
            >
              הזמנה מהירה
            </a>
            <a href="#how" className="px-4 py-2 rounded-md border border-slate-300 hover:bg-white">
              איך משתמשים?
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-600">
            <li>✔ מתאים לכל סוגי הבדים</li>
            <li>✔ בטוח לילדים ותינוקות</li>
            <li>✔ ידידותי לסביבה</li>
            <li>✔ תוצאות בדקות</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/image/image-1.png"
    alt="תמונת מוצר לפני ואחרי"
    className="object-cover w-full h-full"
  />
</div>



      </section>

      {/* יתרונות */}
      <section id="features" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          {[
            { t: 'פירוק כתמים חכם', d: 'ממיס מולקולות של שמנים, פיגמנטים וחלבונים.' },
            { t: 'עדין לבד', d: 'ללא אקונומיקה, ללא פרבנים — בטוח לכותנה, צמר וסינתטי.' },
            { t: 'חוסך זמן', d: "מרססים, ממתינים 2-3 דק' ושוטפים. זהו." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-lg mb-2">{f.t}</h3>
              <p className="text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* איך זה עובד */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold mb-6">איך משתמשים?</h2>
        <ol className="space-y-4 text-slate-700">
          <li>1) מרססים ישירות על הכתם.</li>
          <li>2) ממתינים 2-3 דקות (לכתמים קשים אפשר לשפשף בעדינות).</li>
          <li>3) שוטפים במים או מכניסים למכונה — והבגד כמו חדש.</li>
        </ol>
      </section>

      {/* חוות דעת */}
      <section id="reviews" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          {[
            { n: 'דנה', t: 'הציל לי שמלה לבנה עם כתם יין — נעלם לגמרי!' },
            { n: 'אבי', t: 'עובד מעולה על חולצות עבודה מלאות שמן.' },
            { n: 'מור', t: 'בלי ריח חריף כמו מסירי כתמים אחרים. ממליצה!' },
          ].map((r) => (
            <blockquote key={r.n} className="rounded-xl border border-slate-200 p-5 bg-slate-50">
              <p className="text-slate-700">“{r.t}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {r.n}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* שאלות נפוצות */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold mb-6">שאלות נפוצות</h2>
        <div className="space-y-3">
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold">האם זה מתאים לבגדי תינוקות?</summary>
            <p className="mt-2 text-slate-600">כן. הפורמולה עדינה וללא אקונומיקה או פרבנים.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold">עובד גם על כתמי דם/דשא?</summary>
            <p className="mt-2 text-slate-600">בהחלט. הם אפילו ברשימת הכתמים המומלצים לטיפול.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold">אפשר להשתמש על צמר/משי?</summary>
            <p className="mt-2 text-slate-600">כן, רצוי לבדוק נקודה נסתרת קודם כנהוג.</p>
          </details>
        </div>
      </section>

      {/* קנייה */}
      <section id="buy" className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-[2fr,1fr] gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">הזמנה מהירה</h2>
            <p className="mt-3 text-white/90">
              בקבוק 300 מ״ל + משלוח מהיר. אם לא מרוצים — החזר כספי מלא תוך 30 יום.
            </p>
          </div>

          <div className="rounded-2xl bg-white text-slate-900 p-6 shadow-lg">
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-extrabold">₪59</div>
              <div className="text-slate-500 line-through">₪79</div>
            </div>
            <p className="mt-2 text-sm text-slate-600">מבצע השקה • מלאי מוגבל</p>

            {/* כפתורים */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CheckoutButton />
              <div className="sm:ms-3">
                <PayPalSimpleButton amount={59} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* פוטר */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} STAIN TREATER</span>
          <div className="flex gap-4">
            <a href="#faq" className="hover:underline">מדיניות החזרים</a>
            <a href="#contact" className="hover:underline">צור קשר</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
