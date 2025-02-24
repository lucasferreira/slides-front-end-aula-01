import {
  Appear,
  Deck,
  Heading,
  Image,
  Slide,
  CodePane,
  Text,
  UnorderedList,
  ListItem,
  FlexBox,
  FullScreen,
  Progress,
  Box,
} from "spectacle";

import Age from "./Age";

import calcMyAge from "./assets/calcMyAge.js.example?raw";

import goodWork from "./assets/good-work.gif";
import bg from "./assets/bg.jpg";
import bgCapa from "./assets/bg_capa.jpg";
import bgBurn from "./assets/bg_burn.jpg";
import bgMM from "./assets/mm.jpg";
import engSimbWhite from "./assets/eng_simb_white.png";
import wait from "./assets/wait.gif";
import confusedThickAmerican from "./assets/ConfusedThickAmerican.gif";
import fds from "./assets/fuuucckkdaaaammmsshiiitt.gif";
import welcomeInternet from "./assets/welcome_internet.gif";
import navMosaic from "./assets/navegadores/NCSA-Mosaic.png";
import navNetscape from "./assets/navegadores/netscape.jpg";
import navIe from "./assets/navegadores/ie2.png";
import navFF from "./assets/navegadores/firefox.png";
import navChrome from "./assets/navegadores/Google-Chrome.png";
import empMicrosoft from "./assets/sites/microsoft.png";
import empYahoo from "./assets/sites/yahoo.png";
import empGoogle from "./assets/sites/google.png";
import empApple from "./assets/sites/apple.png";
import empPancho from "./assets/sites/panchohp.png";
import theProj from "./assets/sites/theproject.png";
import flashLogo from "./assets/flash-logo.png";
import imgGmail from "./assets/sites/gmail.jpg";
import launchIphone from "./assets/launch-iphone.jpg";

const defaultTheme = {
  colors: {
    primary: "white",
    secondary: "#002f81",
    tertiary: "#035bbf",
    quaternary: "#A9A9A9",
    default: "#333",
  },
  fonts: {
    header: "Open Sans",
    secondary: "Anton",
    default: "Anton",
  },
  fontSizes: {
    h1: "72px",
    h2: "64px",
    h3: "48px",
    text: "28px",
    listItem: "18px",
  },
  space: ["8px 24px", "39px 24px 9px", "38px 44px", "6px 6px 18px"],
};

const HeadingTitle = ({ children, ...props }) => (
  <Heading textAlign="left" fontFamily="secondary" color="secondary" {...props}>
    {children}
  </Heading>
);

const List = ({ children, ...props }) => (
  <UnorderedList fontSize="listItem" {...props}>
    {children}
  </UnorderedList>
);

function renderSlideTitulo(title) {
  return (
    <Slide backgroundColor="secondary">
      <FlexBox flexDirection="column" style={{ height: "100%" }}>
        <Image src={engSimbWhite} width={253} />
        <Heading
          fontFamily="secondary"
          lineHeight={1}
          color="primary"
          fontWeight={400}
          style={{ textTransform: "uppercase" }}>
          {title}
        </Heading>
      </FlexBox>
    </Slide>
  );
}
function renderSlideTituloImagem(title, img = null) {
  return (
    <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
      <FlexBox flexDirection="column" style={{ height: "100%" }}>
        <HeadingTitle textAlign="center">{title}</HeadingTitle>
        {!!img && <Image src={img} width={600} margin="60px auto 0" />}
      </FlexBox>
    </Slide>
  );
}

function App() {
  return (
    <Deck
      theme={defaultTheme}
      template={() => (
        <>
          <Box padding="0 1em" style={{ position: "absolute", bottom: 24, left: 20 }}>
            <Progress color="#002f81" />
          </Box>
          <Box padding="0 1em" style={{ position: "absolute", bottom: 16, right: 2 }}>
            <FullScreen size={52} color="#999" />
          </Box>
        </>
      )}>
      <Slide backgroundImage={`url(${bgCapa})`}>
        <FlexBox margin="285px 0 0 520px">
          <Heading fontFamily="secondary" lineHeight={1} color="secondary" style={{ textTransform: "uppercase" }}>
            Front-end
          </Heading>
        </FlexBox>
        <Heading
          fontFamily="secondary"
          fontSize={54}
          style={{ position: "absolute", bottom: 90, right: 50 }}
          color="tertiary">
          Prof. Lucas Ferreira
        </Heading>
      </Slide>
      {renderSlideTitulo("Apresentação da Disciplina")}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Missão da UniSATC</HeadingTitle>
        <Text color="default" textAlign="left">
          Transformar pessoas e organizações, por meio da educação e de tecnologias inovadoras de qualidade,
          contribuindo para o crescimento sustentável.
        </Text>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Objetivos do Curso</HeadingTitle>
        <Text color="default" textAlign="left">
          O objetivo do curso de Engenharia de Software, em consonância com a Resolução nº 5, de 16 de Novembro de 2016
          e com o Plano Pedagógico do Curso, é capacitar os estudantes para atuarem na criação de sistemas de software
          de alta qualidade de forma sistemática, controlada, eficaz e eficiente. Isso implica em uma sólida formação
          nas áreas de Engenharia de Requisitos, Desenvolvimento de Software, Arquitetura de Software e Arquitetura de
          Testes de Software. Os egressos devem ser capazes de criar soluções para problemas complexos, considerando
          relações entre diferentes domínios de conhecimento e aplicação, enquanto compreendem o impacto social, ético,
          legal e econômico de seus projetos de software. Além disso, devem estar preparados para agir de forma
          reflexiva e responsável, reconhecendo a importância da inovação, criatividade e compreensão das perspectivas
          de negócios e oportunidades relevantes na área de Engenharia de Software.
        </Text>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Ementa</HeadingTitle>
        <Text color="default" textAlign="left">
          Conceitos sobre aplicações Web (front-end). Desenvolvimento de aplicações Web. Desenvolvimento de interfaces
          de usuários utilizando programação orientada a objetos. Estudo e implementação de novas tecnologias de WEB.
        </Text>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Objetivos de Aprendizagem</HeadingTitle>
        <Text color="default" textAlign="left">
          Objetiva-se que o acadêmico ao final desta disciplina seja capaz de compreender conceitos fundamentais para o
          desenvolvimento de aplicações web baseadas em padrões dinâmicos. Delinear, especificar e projetar necessidades
          acerca das tecnologias mais adequadas para cada projeto e suas respectivas finalidades. Desenvolver e otimizar
          aplicações interativas por meio de ferramentas e linguagens ricas focadas na experiência do usuário através da
          camada vinculada front-end da aplicação/site.
        </Text>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Metodologia de Ensino</HeadingTitle>
        <Appear>
          <Text textAlign="left" color="default">
            Aula expositiva por meio de slides e vídeos demonstrando teoria, casos de uso e códigos comuns, dando ênfase
            a Aprendizagem Baseada em Problemas e Sala de Aula Invertida
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Aula em laboratório, com finalidade prática para que o aluno possa desenvolver e testar seus próprios
            códigos e projetos WEB
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Exercícios práticos em sala ou para fazer em casa com postagem no ambiente virtual da UniSATC
          </Text>
        </Appear>
      </Slide>
      {renderSlideTitulo("@lucasferreira")}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <FlexBox flexDirection="column" style={{ height: "100%" }}>
          <Heading color="white" fontSize="h3" backgroundColor="#000000" padding="9px 20px" margin="0">
            github.com/lucasferreira
          </Heading>
          <Heading color="white" fontSize="h3" backgroundColor="#3366AA" padding="9px 20px" margin="0">
            linkedin.com/in/lucasferreira
          </Heading>
          <Heading color="white" fontSize="h3" backgroundColor="#d82b7d" padding="9px 20px" margin="0">
            instagram.com/lucasferreira
          </Heading>
          <Heading color="white" fontSize="h3" backgroundColor="#1da1f2" padding="9px 20px" margin="0">
            x.com/lucasferreira
          </Heading>
          <Heading color="secondary" fontSize="h3" backgroundColor="#E9E9E9" padding="9px 20px" margin="0">
            www.lucasferreira.com
          </Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="#fff">
        <Age />
        <Appear>
          <FlexBox margin="40px auto 0">
            <Image src={wait} width={575} />
          </FlexBox>
        </Appear>
      </Slide>
      <Slide backgroundColor="#fff">
        <CodePane
          language="javascript"
          highlightRanges={[
            [0, 4],
            [10, 45],
            [11, 13],
            [14, 23],
            [17, 18],
            [5, 9],
            [24, 36],
            [37, 44],
          ]}>
          {calcMyAge}
        </CodePane>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Momento Linkedinho</HeadingTitle>
        <Appear>
          <Text textAlign="left" color="default">
            Programador de Profissão e Paixão
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Há mais de 20 anos na "indústria vital da rede mundial de computadores"
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Especialista em Sistemas Web e Dispositivos Móveis
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Desenvolvimento de Apps, HTML(5), CSS(3), Javascript, React, PHP e MySQL
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Diretor de Desenvolvimento e sócio-fundador da Burn web.studio
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            CTO na MaisMei
          </Text>
        </Appear>
      </Slide>
      <Slide backgroundImage={`url(${bgBurn})`}>
        <FlexBox flexDirection="column" style={{ height: "100%", paddingTop: "164px" }}>
          <Text fontSize={30} textAlign="center" color="white">
            A <strong>Burn web.studio</strong> está presente no mercado há quase de 20 anos.
            <br />É uma empresa de Comunicação Interativa com foco no Desenvolvimento de Web Sites e Aplicativos,
            empresariais e pessoais.
          </Text>
          <Text
            style={{ display: "inline-block", padding: "8px 10px", borderRadius: 8 }}
            textAlign="center"
            color="default"
            backgroundColor="white">
            www.burnweb.com.br
          </Text>
        </FlexBox>
      </Slide>
      <Slide backgroundImage={`url(${bgMM})`} backgroundPosition="top center">
        <FlexBox flexDirection="column" style={{ height: "100%", paddingTop: "164px" }}></FlexBox>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <FlexBox flexDirection="column" style={{ height: "100%" }}>
          <HeadingTitle textAlign="center">E vocês, quem são?</HeadingTitle>
          <Image src={confusedThickAmerican} width={500} margin="60px auto 0" />
        </FlexBox>
      </Slide>
      {renderSlideTitulo("Conteúdo Programático")}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Conteúdo Programático</HeadingTitle>
        <Text color="default" textAlign="left">
          Para visualizar o conteúdo das aulas e o descritivo de quais temas serão abordados em cada um dos 20
          encontros, vamos verificar o PDF do Plano de Ensino que encontra-se no portal do aluno.
        </Text>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Metodologia de Avaliação</HeadingTitle>
        <Text color="default" textAlign="left">
          Avaliações
          <br />
          N1 (N-1) N1 (10,0)
          <br />
          N2 (N-1) N2 (10,0)
          <br />
          N3 - Exercícios ao longo do semestre (10,0)
          <br />
          Projeto 3,0 + 2,0 + 5,0
          <br />
          <strong>Média (N1 + N2 + N3 + Projeto)/4</strong>
        </Text>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle textAlign="center">O Projeto!</HeadingTitle>
        <FlexBox>
          <Image src={fds} width={400} margin="60px auto 0" textAlign="center" />
        </FlexBox>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>ABP</HeadingTitle>
        <Appear>
          <Text textAlign="left" color="default">
            Equipes com + ou - 4/5 alunos <em>(temos que aguardar as definições de matrícula)</em>
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Temas de cunho relevante, visando utilização no mundo real e sem ter cara de{" "}
            <em>"tutorial da Rocketseat"</em>
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Desenvolvimento durante todo o semestre
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Primeira Entrega na <strong>entre a aula 10 e 12</strong>{" "}
            <em>(depende do andamento do conteúdo da disciplina)</em>
          </Text>
        </Appear>
        <Appear>
          <Text textAlign="left" color="default">
            Última Entrega na <strong>penúltima aula</strong> <em>(antes da N-1)</em> -{" "}
            <em>Projeto Concluído e 100% Funcional (+ Demonstração)</em>
          </Text>
        </Appear>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle textAlign="center">Mas e essa tal de Internet?</HeadingTitle>
        <FlexBox>
          <Image src={welcomeInternet} width={500} margin="60px auto 0" />
        </FlexBox>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>Breve História da Internet</HeadingTitle>
        <List>
          <Appear>
            <ListItem color="default" margin={3}>
              A internet foi criada em 1969, nos Estados Unidos (Governo). Chamada de ARPANET, tinha como função
              interligar laboratórios de pesquisa
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Naquele ano, um professor da Universidade da Califórnia passou para um amigo em Stanford o primeiro e-mail
              da história
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              A partir de 1982, o uso da ARPANET tornou-se maior no âmbito acadêmico{" "}
              <em>(por quase duas décadas, apenas os meios acadêmico e científico usaram)</em>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              No Brasil, os primeiros embriões de rede surgiram em 1988 e ligavam universidades do Brasil a instituições
              nos Estados Unidos
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Em março de 1989, Tim Berners-Lee escreveu uma proposta de gerenciamento de informação e descrevia um
              sistema de informação mais elaborado que seria a primeira proposta da World Wide Web (WWW)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Em dezembro de 1990, com a ajuda de Robert Cailliau, um jovem estudante do CERN, Tim Berners-Lee
              implementou a primeira comunicação bem-sucedida entre um cliente HTTP e o servidor através da internet
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Em 1992, começaram a surgir diversas empresas provedoras de acesso à internet
            </ListItem>
          </Appear>
        </List>
      </Slide>
      {renderSlideTitulo("A Internet como nós conhecemos")}
      {renderSlideTituloImagem("NCSA Mosaic (1993)", navMosaic)}
      {renderSlideTituloImagem("Netscape (1994)", navNetscape)}
      {renderSlideTituloImagem("Internet Explorer (1995)", navIe)}
      {renderSlideTituloImagem("Mozilla Firefox (2004)", navFF)}
      {renderSlideTituloImagem("Google Chrome (2008)", navChrome)}
      {renderSlideTitulo("Evolução dos Sites")}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <FlexBox flexDirection="column">
          <HeadingTitle textAlign="center">The Project</HeadingTitle>
          <Text textAlign="center">
            <a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank" rel="noopener noreferrer">
              http://info.cern.ch/hypertext/WWW/TheProject.html
            </a>
          </Text>
          <Image src={theProj} width={600} margin="60px auto 0" />
        </FlexBox>
      </Slide>
      {renderSlideTituloImagem("Microsoft (1994)", empMicrosoft)}
      {renderSlideTituloImagem("Yahoo (1994)", empYahoo)}
      {renderSlideTituloImagem("Google (1996)", empGoogle)}
      {renderSlideTituloImagem("Apple (1997)", empApple)}
      {renderSlideTituloImagem("Pancho HP (2000)", empPancho)}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle textAlign="center" margin="0 auto 26px">
          Sites em Flash
        </HeadingTitle>
        <FlexBox>
          <Image src={flashLogo} width={379} margin="60px auto 0" />
        </FlexBox>
      </Slide>
      {renderSlideTituloImagem("Lançamento do iPhone", launchIphone)}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>WEB 2.0</HeadingTitle>
        <List>
          <Appear>
            <ListItem color="default" margin={3}>
              E considerada a segunda geração de comunidades e serviços, tendo como conceito a "Web enquanto
              plataforma", envolvendo wikis, aplicativos baseados em folksonomia, redes sociais, blogs e Tecnologia da
              Informação.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Embora o termo tenha uma conotação de uma nova versão para a Web, ele não se refere à atualização nas suas
              especificações técnicas, mas a uma mudança na forma como ela é encarada por usuários e desenvolvedores, ou
              seja, o ambiente de interação e participação que hoje engloba inúmeras linguagens e motivações.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Começaram a desenvolver softwares que são usados pela Internet e vendidos não em pacotes, mas como
              serviços, pagos mensalmente como uma conta de água.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Além disso, mudou-se a forma de fazer softwares. Para que tudo funcionasse bem na Internet, foi necessária
              a união de várias tecnologias (como AJAX) que tornassem a experiência do usuário mais rica, com interfaces
              rápidas e muito fáceis de usar.
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>WEB 2.0</HeadingTitle>
        <List>
          <Appear>
            <ListItem color="default" margin={3}>
              Aplicações de Internet Rica (RIA)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Conteúdos produzido pelo próprios internautas, maior interatividade online através de Blogs e sites como o
              Youtube, Flickr, etc.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              GMAIL (2004)
              <FlexBox>
                <Image src={imgGmail} width={480} margin="30px auto 0" />
              </FlexBox>
            </ListItem>
          </Appear>
        </List>
      </Slide>
      {renderSlideTitulo("E o futuro?")}
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <HeadingTitle>WEB 3.0 (?)</HeadingTitle>
        <List>
          <Appear>
            <ListItem color="default" margin={3}>
              Web 3.0 <em>(ou apenas Web3, hiper-personalização, IA, blockchain (eth), descentralização)</em>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              IA, LLM, GPT-3, OpenAI e etc
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              IoT e realidade virtual (Quest, Apple Vision e etc)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              Assistentes de Pessoais e de Voz (Alexa, Siri e etc)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem color="default" margin={3}>
              ... e a sua geladeira com internet!
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide backgroundImage={`url(${bg})`} backgroundPosition="top left">
        <FlexBox flexDirection="column">
          <HeadingTitle textAlign="center">Obrigado!</HeadingTitle>
          <Image src={goodWork} width={500} margin="60px auto 0" />
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
