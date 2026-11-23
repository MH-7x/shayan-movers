const PRODUCTION_URL = "https://shayanmovers.ae";

// A localhost APP_URL left over from development must never reach production
// canonicals, sitemaps or schema.
function resolveSiteUrl() {
  const url = (process.env.APP_URL || "").replace(/\/$/, "");
  if (!url) return PRODUCTION_URL;
  if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/.test(url)) {
    return PRODUCTION_URL;
  }
  return url;
}

export const APP = {
    name : "Shayan Movers and Packers",
    phone: "+971547326816",
    email: "shayanmovers.ae@gmail.com",
    url: resolveSiteUrl()
}