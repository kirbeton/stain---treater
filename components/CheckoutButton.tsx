'use client';
import React from 'react';

type CheckoutButtonProps = {
  price?: number;
  productName?: string;
  className?: string;
};

export default function CheckoutButton({
  price = 59,
  productName = 'Stain Treater',
  className = '',
}: CheckoutButtonProps) {
  const goToCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ name: productName, price, quantity: 1 }],
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(data?.error || 'שגיאה ביצירת תשלום');
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert('לא התקבל קישור תשלום מ-Stripe');
      }
    } catch (err: any) {
      console.error('Network error:', err);
      alert('שגיאת רשת: ' + err.message);
    }
  };

  return (
    <button
      onClick={goToCheckout}
      className={`inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 shadow-md transition-all ${className}`}
    >
      לתשלום בכרטיס אשראי
    </button>
  );
}
