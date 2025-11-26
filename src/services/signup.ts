export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  acceptMarketing: boolean;
  recaptchaToken?: string;
}

declare global {
  interface Window {
    RevolveSignup?: { root?: string; nonce?: string };
  }
}

export async function createSignupUser(payload: SignupPayload) {
  if (process.env.USE_MOCK_DATA === "true") {
    console.log("[signup] USE_MOCK_DATA enabled, returning mock success.");
    return { success: true, userId: 0 };
  }

  // Prefer explicit API base from env, then any WP-localized root, then same-origin fallback.
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  console.log("[signup] origin:", origin);

  const rootFromWp =
    typeof window !== "undefined" ? window.RevolveSignup?.root : undefined;
  console.log("[signup] window.RevolveSignup?.root:", rootFromWp);

  const nonce =
    typeof window !== "undefined" ? window.RevolveSignup?.nonce : undefined;
  console.log("[signup] window.RevolveSignup?.nonce:", nonce);

  console.log("[signup] process.env.API_ROOT:", process.env.API_ROOT);

  const rawRoot =
    process.env.API_ROOT ??
    rootFromWp ??
    (origin
      ? `${origin.replace(/\/?$/, "")}/wp-json/revolve/v1/`
      : "/wp-json/revolve/v1/");
  console.log("[signup] rawRoot before trim:", rawRoot);

  const apiRoot = rawRoot.replace(/\/+$/, "");
  console.log("[signup] apiRoot after trim:", apiRoot);

  console.log("[signup] final URL:", `${apiRoot}/signup`);
  console.log("[signup] payload:", payload);

  const res = await fetch(`${apiRoot}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(nonce ? { "X-WP-Nonce": nonce } : {}),
    },
    body: JSON.stringify(payload),
  });
  console.log("[signup] response status:", res.status, res.statusText);

  const data = await res.json();
  console.log("[signup] response data:", data);

  if (!res.ok || (data && data.success === false)) {
    const message =
      (data && (data.message as string | undefined)) ||
      res.statusText ||
      "Signup failed";
    throw new Error(message);
  }

  return data as { success: boolean; userId?: number };
}
