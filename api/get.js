import {promises as fs} from "fs";
import path from "path";

export default async function handler(req, res){
  const filePath = path.join(process.cwd(), "data.json");

  try {
    const data = await fs.readFile(filePath, "utf8");
    return res.status(200).json(JSON.parse(data));
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter os dados." });
  }
}
