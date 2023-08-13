import { getTimes } from "@api/services/time/getTimes";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug = req.query;
  const { page, token, userId } = slug;

  try {
    const data = await getTimes({
      userId: String(userId),
      token: String(token),
      queryParams: { page: Number(page) ? Number(page) : 1 },
    });
    res.json(data);
    res.statusCode = 302;
    res.end();
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
