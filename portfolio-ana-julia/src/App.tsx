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

      {/* Frase de efeito */}
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
          <Title className='fraseEfeito' level={1} style={{ margin: '0px 0 -4px', fontSize: '-webkit-xxx-large' }}>O mundo é lindo, e os animais merecem ver cada detalhe</Title>
          <Button type="primary" size="large"
            style={{
              backgroundColor: '#d2d741',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              width: '400px',
              height: '50px',
              letterSpacing: '2px',
              fontSize: '20px',
            }} onClick={() => window.open('https://videos1.memedroid.com/videos/UPLOADED835/583a0d7eb8dc9.jpeg', '_blank')}>
            Entre em contato!
          </Button>
        </div>
      </Content>

      {/* Sobre mim */}
      <Content
        ref={contatoRef}
        className="secao"
        style={{
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundColor: '#fff',
          padding: '40px 20px',
        }}
      >
        {/* Títulos centralizados acima dos quadrados */}
        <Row gutter={[32, 16]} justify="center">
          <Col xs={24} md={10}>
            <Title level={2} style={{ textAlign: 'center', color: '#60051b' }}>Sobre mim:</Title>
          </Col>
          <Col xs={24} md={10}>
            <Title level={2} style={{ textAlign: 'center', color: '#60051b' }}>Desenvolvimento Profissional:</Title>
          </Col>
        </Row>

        {/* Linha com os dois quadrados grandes */}
        <Row gutter={[32, 16]} justify="center" style={{ marginTop: '20px' }}>
          <Col xs={24} md={10}>
            <div style={{
              backgroundColor: '#f8f5e6',
              borderRadius: '8px',
              padding: '20px',
              minHeight: '450px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}>
              <Paragraph>Eu estudei no ifc, lá em concórdia SC, conheci meu grande amor lá, no meio da roça e me apaixonei perdidamente, hoje, amém sou CASADA.</Paragraph>
            </div>
          </Col>
          <Col xs={24} md={10}>
            <div style={{
              backgroundColor: '#f8f5e6',
              borderRadius: '8px',
              padding: '20px',
              minHeight: '450px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}>
              <Paragraph>Eu sou muito boa com olhos, tenho uma boa experiência, fiz estágio atrás de estágio, me dediquei bastante pra chegar até aqui, agradeço a todos os envolvidos, agora estou em busca de ficar rica pra poder viajar bastante.</Paragraph>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
