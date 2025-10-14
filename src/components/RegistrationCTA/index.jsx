const RegistrationCTA = ({ openRegistrationModal }) => {
  return (
    <section 
      id="cadastro" 
      className="py-16 px-4 relative"
      style={{
        backgroundImage: 'url("/images/Professional_artistic_sketch_of_a_luxurious_modern_.png")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-title">
          Faça parte do IMAD
        </h2>
        <p className="text-gray-700 mb-8 text-lg font-body">
          Seja um associado deste movimento
        </p>
        <button
          onClick={openRegistrationModal}
          className="bg-institutional text-white px-8 py-4 font-semibold text-lg hover:bg-institutional/90 transition border-2 border-institutional hover:border-institutional/90"
        >
          REGISTRAR-SE AGORA
        </button>
      </div>
    </section>
  );
};

export default RegistrationCTA;