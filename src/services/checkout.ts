export interface CheckoutPayload {
  bundle: "bundle1" | "bundle2";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  recaptchaToken?: string;
}

declare global {
  interface Window {
    RevolveCheckout?: { root?: string; nonce?: string };
  }
}

export async function createCheckoutOrder(payload: CheckoutPayload) {
  if (process.env.USE_MOCK_DATA === "true") {
    console.log("[checkout] USE_MOCK_DATA enabled, returning mock success.");
    return {
      success: true,
      checkoutUrl: "https://revolveresearch.com/checkout/",
    };
  }

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  console.log("[checkout] origin:", origin);

  const rootFromWp =
    typeof window !== "undefined" ? window.RevolveCheckout?.root : undefined;
  console.log("[checkout] window.RevolveCheckout?.root:", rootFromWp);

  const nonce =
    typeof window !== "undefined" ? window.RevolveCheckout?.nonce : undefined;
  console.log("[checkout] window.RevolveCheckout?.nonce:", nonce);

  console.log("[checkout] process.env.API_ROOT:", process.env.API_ROOT);

  const rawRoot =
    process.env.API_ROOT ??
    rootFromWp ??
    (origin
      ? `${origin.replace(/\/?$/, "")}/wp-json/revolve/v1/`
      : "/wp-json/revolve/v1/");
  console.log("[checkout] rawRoot before trim:", rawRoot);

  const apiRoot = rawRoot.replace(/\/+$/, "");
  console.log("[checkout] apiRoot after trim:", apiRoot);

  const url = `${apiRoot}/checkout`;
  console.log("[checkout] final URL:", url);
  console.log("[checkout] payload:", payload);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(nonce ? { "X-WP-Nonce": nonce } : {}),
    },
    body: JSON.stringify(payload),
  });
  console.log("[checkout] response status:", res.status, res.statusText);

  const data = await res.json();
  console.log("[checkout] response data:", data);

  if (!res.ok || (data && data.success === false)) {
    const message =
      (data && (data.message as string | undefined)) ||
      res.statusText ||
      "Checkout failed";
    throw new Error(message);
  }

  return data as { success: boolean; checkoutUrl?: string };
}
