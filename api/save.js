import { promises as fs } from "fs";
import path from "path";

export default async function handle(req, res) {
  const filePath = path.join(process.cwd(), "data.json");

  if (req.method === "POST") {
    try {
      const data await fs.readFile(filePath, "utf8");
      const jsonData = JSON.parse(data);

      jsonData.vendas.push(req.body);

      await fs.writefile(filePath, JSON.stringfy(jsonData, null, 2));

      return res.status(200).json({ message: "Venda salva com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao salvar venda." });
    }
  }
  return res.status(405).json({ error: "Metodo nao permitido." });
}
