import { Typography, Layout, Button, Row, Col } from 'antd';
import { useRef } from 'react';
import './App.css';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);

  const scrollParaContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Content className="secao secao-principal" style={{
        background: '#f8f5e6',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="conteudo" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div className="quadrado" style={{
            width: '100px',
            height: '100px',
            background: '#60051b',
            borderRadius: '8px',
            margin: 0,
          }} />
          <Title className='nomeProfissional' level={1} style={{ margin: '0px 0 -4px', fontSize: '-webkit-xxx-large' }}>Ana Júlia Ferreira</Title>
          <Paragraph className='paragrafoMedica' style={{ margin: '-4px 0 0', fontSize: 'x-large' }}>Médica Veterinária</Paragraph>
        </div>
      </Content>

      {/* Quem sou eu */}
      <Content className="secao secundaria-quem-sou-eu" style={{
        background: 'red',
        minHeight: '100vh',
        minWidth: '100vw',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Row gutter={[10, 32]} align="middle">
          {/* Coluna da Foto */}
          <Col xs={24} md={12}>
            <div className="quadradoGrande" style={{
              width: '500px',
              height: '320px',
              background: '#60051b',
              borderRadius: '8px',
              margin: 0,
              position: 'relative',
            }}>
              <div className="quadradoFoto" style={{
                position: 'absolute',
                bottom: -17,
                left: -8,
              }}>
                <img
                  src="./../public/images/eu de frente.jpeg"
                  alt="Foto de Ana Julia Ferreira"
                  className="fotoPerfil"
                  style={{ width: '90%', borderRadius: '8px' }}
                />
              </div>
            </div>
          </Col>

          {/* Coluna do Texto */}
          <Col xs={24} md={12}>
            <Title className="quemSouEu" level={1} style={{ fontSize: '-webkit-xxx-large' }}>
              Quem Sou Eu?
            </Title>
            <Paragraph className="paragrafoBiografia" style={{ fontSize: 'x-large' }}>
              Sou médica veterinária apaixonada por cuidar de animais. Com formação na universidade XYZ e experiência em clínicas, trabalho para promover saúde e bem-estar aos pets e suas famílias.
            </Paragraph>
            <Button type="primary" size="large" onClick={scrollParaContato}>
              Saiba mais
            </Button>
          </Col>
        </Row>
      </Content>

      <Content ref={contatoRef} className="secao" style={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: '#ffe0e0',
        padding: '40px 20px',
      }}>
        <Title level={2}>Contato</Title>
        <Paragraph>Email: ana.julia@email.com</Paragraph>
      </Content>
    </Layout>
  );
}

export default App;
