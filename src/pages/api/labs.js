import clientPromise from "@lib/mongodb.js";

export default async function handler(req, res) {
  try {
    const { search, limit = 0 } = req?.query;

    const client = await clientPromise;
    const db = client.db("cic");

    const labs = await db
      .collection("labs")
      .find({
        nombre_prueba: { $regex: search, $options: "i" },
      })
      .sort({ nombre_prueba: -1 })
      .limit(Number(limit))
      .toArray();

    res.json(labs);
  } catch (e) {
    console.error(e);
  }
}
