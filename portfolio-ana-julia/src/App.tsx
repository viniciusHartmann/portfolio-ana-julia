// import { Button, Typography } from 'antd';
import { useRef } from 'react';
import './App.css';

const { Title, Paragraph } = Typography;

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);

  // const scrollParaContato = () => {
  //   contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <section className="secao secao-principal">
        <div className="conteudo">
          <div className="quadrado" />
          <Title className='nomeProfissional' level={1}>Ana Julia Ferreira</Title>
          <Paragraph className='paragrafoMedica'>Médica Veterinária</Paragraph>
        </div>
      </section>
      {/*Quem sou eu*/}
      {/* <section className="secaoDois secundaria-quem-sou-eu">
        <div className="conteudoSessaoSecundaria">
          <div className="ladoEsquerdo">
            <div className="quadradoGrande">
              <div className="quadradoFoto">
                <img
                  src="/sua-foto.jpg"
                  alt="Foto de Ana Julia Ferreira"
                  className="fotoPerfil"
                />
              </div>
            </div>
          </div>

          <div className="ladoDireito">
            <Title className="quemSouEu" level={1}>
              Quem Sou Eu?
            </Title>
            <Paragraph className="paragrafoBiografia">
              Sou médica veterinária apaixonada por cuidar de animais. Com formação na universidade XYZ e experiência em clínicas, trabalho para promover saúde e bem-estar aos pets e suas famílias.
            </Paragraph>
            <Button type="primary" size="large" onClick={scrollParaContato}>
              Saiba mais
            </Button>
          </div>
        </div>
      </section> */}

      <section ref={contatoRef} className="secao" style={{ backgroundColor: '#ffe0e0' }}>
        <Title level={2}>Contato</Title>
        <Paragraph>Email: ana.julia@email.com</Paragraph>
      </section>
    </>
  );
}

export default App;
