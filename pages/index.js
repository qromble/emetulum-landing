
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/formulario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      router.push("/gracias");
    } else {
      alert("Error al enviar los datos");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">
        No importa con qué moneda se pague en el futuro…<br />
        tu propiedad siempre será tu moneda de cambio.
      </h1>
      <p className="mb-8 text-center">Descarga nuestra guía exclusiva de inversión frente al mar.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input type="text" placeholder="Nombre" required className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Correo electrónico" required className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="tel" placeholder="WhatsApp" required className="w-full border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Enviar</button>
      </form>
    </div>
  );
}
