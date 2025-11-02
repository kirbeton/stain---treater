"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

export default function PayPalSimpleButton() {
  useEffect(() => {
    const clientId = "AVa9mIGKHScUngoAKFxYcYE0LNwkWJOb0ceQfAhBSbRNYtBfta6E4ZRQHH0_wCigAPi99kepQIUempce"; // שים כאן את ה-Live client id שלך

    if (document.getElementById("paypal-sdk")) return;

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=ILS`;
    script.async = true;

    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "Stain Treater - 59₪",
                    amount: {
                      value: "59.00",
                      currency_code: "ILS",
                    },
                  },
                ],
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                alert(`✅ תשלום הצליח! תודה ${details.payer.name.given_name} 🙏`);
              });
            },
            onError: (err: any) => {
              console.error("שגיאת PayPal:", err);
              alert("❌ שגיאת תשלום, נסה שוב.");
            },
          })
          .render("#paypal-button-container");
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div id="paypal-button-container" className="mt-4" />;
}
