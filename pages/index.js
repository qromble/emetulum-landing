
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function EMETulumLanding() {
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
    <div className="scroll-smooth font-sans text-white bg-black">
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="/playa-video.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl leading-tight"
          >
            No importa con qué moneda se pague en el futuro…
            <br />
            <span className="text-green-400">Tu propiedad será tu moneda de cambio.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl max-w-xl bg-black bg-opacity-50 px-4 py-2 rounded"
          >
            Descubre zonas frente al mar donde lujo y rentabilidad convergen.
          </motion.p>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center bg-[#f7f5f1] text-gray-900"
      >
        <h2 className="text-3xl font-semibold mb-4">¿Despertar frente al mar?</h2>
        <p className="max-w-3xl mx-auto text-lg">
          No es solo una inversión. Es una elección de vida. En EMETulum elegimos playas
          donde la naturaleza y el retorno se alinean.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white text-gray-900 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Solicita la Guía EMETulum</h3>
        <p className="mb-8 text-lg">Déjanos tus datos para descubrir tu próxima inversión frente al mar.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Nombre" required className="w-full border px-4 py-2 rounded" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" placeholder="Correo electrónico" required className="w-full border px-4 py-2 rounded" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="tel" placeholder="WhatsApp" required className="w-full border px-4 py-2 rounded" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <button type="submit" className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition">Enviar y descargar</button>
        </form>
      </motion.section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        EMETulum | Verdad. Movimiento. Experiencia. Tulum
      </footer>
    </div>
  );
}
