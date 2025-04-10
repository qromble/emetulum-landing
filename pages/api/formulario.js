
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body;
    console.log("Nuevo lead recibido:", { name, email, phone });
    return res.status(200).json({ success: true, message: "Datos recibidos correctamente." });
  } else {
    return res.status(405).json({ error: "Método no permitido" });
  }
}
