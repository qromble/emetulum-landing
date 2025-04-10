
export default function Gracias() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f4f1ea] text-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Gracias por confiar en EMETulum!</h1>
      <p className="text-lg max-w-xl mb-8">
        Hemos recibido tus datos correctamente. Ahora puedes descargar tu guía exclusiva y, si deseas, hablar directamente con uno de nuestros asesores.
      </p>

      <div className="space-y-4">
        <a
          href="/GUIA_EMETulum_Playas_Estrategicas.pdf"
          download
          className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow-md hover:bg-green-800 transition"
        >
          Descargar Guía PDF
        </a>

        <a
          href="https://wa.me/529843675634?text=Hola!%20Acabo%20de%20descargar%20la%20Gu%C3%ADa%20EMETulum%20y%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white px-6 py-3 rounded shadow-md hover:bg-green-600 transition"
        >
          Hablar con un asesor por WhatsApp
        </a>
      </div>

      <footer className="mt-12 text-sm text-gray-600">
        EMETulum | Verdad. Movimiento. Experiencia. Tulum
      </footer>
    </div>
  );
}
