export default function exit(req: any, res: any) {
  res.clearPreviewData();

  if (req?.query?.slug) {
    res.writeHead(307, { Location: req?.query?.slug ?? `/` });
  } else {
    res.writeHead(307, { Location: `/` });
  }
}
