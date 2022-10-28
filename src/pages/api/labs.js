import clientPromise from "@lib/mongodb.js";

export default async function handler(req, res) {
  try {
    const { search, limit = 0 } = req?.query;

    if (!Boolean(search)) {
      return res.status(400).json({
        error: "Error getting data",
        cause: "Search value cannot be empty",
      });
    }

    const client = await clientPromise;
    const db = client.db("cic");

    const labs = await db
      .collection("labs")
      .find({
        $or: [
          { nombre_prueba: { $regex: search, $options: "i" } },
          { codigo_cups: { $regex: search, $options: "i" } },
        ],
      })
      .sort({ nombre_prueba: -1 })
      .limit(Number(limit))
      .toArray();

    res.json(labs);
  } catch (e) {
    res
      .status(500)
      .json({ error: "Error getting data from server", cause: e.name });
  }
}
