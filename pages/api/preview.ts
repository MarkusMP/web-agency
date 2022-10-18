export default function preview(req: any, res: any) {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: "No secret token" });
  }

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid secret token" });
  }

  if (!req.query.slug && !req.query._id) {
    return res.status(401).json({ message: "No slug or _id" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  if (req?.query?.slug) {
    res.writeHead(307, { Location: req?.query?.slug ?? `/` });
  } else if (req?.query?._id === "home") {
    res.writeHead(307, { Location: `/` });
  } else if (req?.query?._id === "notFound") {
    res.writeHead(307, { Location: `/notFound` });
  } else {
    res.writeHead(307, { Location: `/` });
  }
  return res.end();
}
