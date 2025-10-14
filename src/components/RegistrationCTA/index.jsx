import Button from '../Button';

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
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-family-title">
          Faça parte do IMAD
        </h2>
        <p className="mb-8 text-lg font-family-body font-semibold">
          Seja um associado deste movimento
        </p>
        <Button
          onClick={openRegistrationModal}
          variant="primary"
          size="lg"
          rounded
        >
          REGISTRAR-SE AGORA
        </Button>
      </div>
    </section>
  );
};

export default RegistrationCTA;