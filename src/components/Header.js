import React from 'react';
import './Header.css';
import FormularioOrcamento from './FormularioOrcamento'; 
import WhatsappButton from './WhatsappButton';// Supondo que o arquivo do formulário esteja no mesmo diretório

const Header = () => {
    return (
        <header>
            <section className='Inicio'>
                <h1 className='Sucesso'>Meu Sucesso Digital</h1>

                <div className="logo-container">
                <img className='img-left' src="/FUNDOLOGO.png" alt="Logo de Fundo" width="200" height="auto" />
                <img className='img-right' src="/ASTRONAUTA.png" alt="Logo de Fundo" width="200" height="auto" />
                </div>

                <div className="colunas">

                    <div className="coluna" onClick={() => document.getElementById('social-media-section').scrollIntoView({ behavior: 'smooth' })}>
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                        </svg>
                        <h2>Social Mídia</h2>
                        <p>Social Mídia é o conjunto de ações e estratégias utilizadas nas redes sociais para conectar marcas ao seu público, criando engajamento e visibilidade</p>
                    </div>
                    <div className="coluna"  onClick={() => document.getElementById('criacao-de-sites-section').scrollIntoView({ behavior: 'smooth' })}>
                     
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 4.984375 5 C 3.347656 5 2 6.347656 2 7.984375 L 2 42.015625 C 2 43.652344 3.347656 45 4.984375 45 L 45.015625 45 C 46.652344 45 48 43.652344 48 42.015625 L 48 7.984375 C 48 6.347656 46.652344 5 45.015625 5 Z M 4.984375 7 L 45.015625 7 C 45.570313 7 46 7.429688 46 7.984375 L 46 11 L 4 11 L 4 7.984375 C 4 7.429688 4.429688 7 4.984375 7 Z M 7 8 C 6.449219 8 6 8.449219 6 9 C 6 9.550781 6.449219 10 7 10 C 7.550781 10 8 9.550781 8 9 C 8 8.449219 7.550781 8 7 8 Z M 10 8 C 9.449219 8 9 8.449219 9 9 C 9 9.550781 9.449219 10 10 10 C 10.550781 10 11 9.550781 11 9 C 11 8.449219 10.550781 8 10 8 Z M 4 13 L 46 13 L 46 27 L 4 27 Z M 4 29 L 24 29 L 24 43 L 4.984375 43 C 4.429688 43 4 42.570313 4 42.015625 Z M 26 29 L 46 29 L 46 42.015625 C 46 42.570313 45.570313 43 45.015625 43 L 26 43 Z M 6 31 L 6 33 L 22 33 L 22 31 Z M 6 35 L 6 37 L 22 37 L 22 35 Z M 6 39 L 6 41 L 15 41 L 15 39 Z"></path>
                        </svg>
                        <h2>Criacao de Sites</h2>
                        <p>A Criação de Sites envolve o desenvolvimento de plataformas digitais funcionais e esteticamente atraentes, visando a melhor experiência do usuário</p>
                    </div>
                </div>
                <div className="colunas">

                    <div className="coluna"
                        onClick={() => document.getElementById('social-media-section').scrollIntoView({ behavior: 'smooth' })}>
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                        </svg>
                        <h2>Identidade Visual</h2>
                       <p> A Identidade Visual é a representação gráfica da marca, que inclui logotipo, cores, tipografia e elementos visuais que comunicam seus valores.</p>
                    </div>
                    <button className="coluna"
                        onClick={() => document.getElementById('social-media-section').scrollIntoView({ behavior: 'smooth' })}>
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                        </svg>
                        <h2>Registros de Marca</h2>
                        <p>O Registro de Marca garante a proteção legal do nome, logo e outros elementos identificadores, evitando que terceiros usem sem permissão</p>
                    </button>
                </div>

                <div className="colunas">
                    <button className="coluna"
                        onClick={() => document.getElementById('social-media-section').scrollIntoView({ behavior: 'smooth' })}>
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                        </svg>
                        <h2>Produção Audiovisual</h2>
                        <p>A Produção Audiovisual engloba a criação de vídeos, animações e conteúdos visuais para promover a marca de forma criativa e impactante</p>
                    </button>
                    <button className="coluna"
                        onClick={() => document.getElementById('social-media-section').scrollIntoView({ behavior: 'smooth' })}>
                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                        </svg>
                        <h2>Trafeco Pago</h2>
                        <p>Tráfego Pago refere-se ao investimento em anúncios nas plataformas digitais para aumentar a visibilidade e atrair mais visitantes para um site ou redes sociais.</p>
                    </button>
                </div>
            </section>



            <section className='Cardes'>
                <div className="card-container">
                    {/* Card Social Mídia */}
                    <div className="card">
                        <h3>Transforme Seu Negócio com Consultoria Personalizada</h3>
                        <p>Oferecemos estratégias de marketing digital feitas sob medida para o seu negócio. Vamos ajudar a alcançar seus objetivos de forma rápida e eficaz.</p>
                        <button>Agende Sua Consultoria</button>
                    </div>

                    {/* Card de Social Mídia com link para a seção */}
                    <div className="card">
                        <h3>Aumente Seu Engajamento nas Redes Sociais</h3>
                        <p>Cuidamos da presença digital da sua marca com conteúdos criativos e estratégias de engajamento nas principais plataformas sociais.</p>
                        <a href="#social-media-section">
                            <button>Saiba Mais</button>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <h3>Maximize Seus Resultados com Anúncios Digitais</h3>
                        <p>Criação e gestão de campanhas pagas para gerar tráfego qualificado e aumentar suas conversões.</p>
                        <button>Comece Agora</button>
                    </div>
                </div>
            </section>

            {/* Seções */}
            <section id="social-media-section">
                <div className="social-media">
                    <h2>Social Mídia</h2>
                    <p>Conteúdo detalhado sobre os serviços de Social Mídia que oferecemos. Aqui falamos sobre como podemos ajudar a aumentar o engajamento da sua marca nas redes sociais e gerar resultados reais para o seu negócio.</p>
                </div>
            </section>

            <section id="criacao-de-sites-section">
                <div className="criacao-de-sites">
                    <h2>Criação de Sites</h2>
                    <p>Oferecemos serviços de desenvolvimento de sites personalizados para o seu negócio, com foco em funcionalidade e design de alto nível.</p>
                </div>
            </section>

            <section id="identidade-visual-section">
                <div className="identidade-visual">
                    <h2>Identidade Visual</h2>
                    <p>Ajudamos a criar uma identidade visual sólida para a sua marca, incluindo logotipos, paleta de cores e elementos gráficos que destacam seu negócio.</p>
                </div>
            </section>

            <section id="registros-de-marca-section">
                <div className="registros-de-marca">
                    <h2>Registros de Marca</h2>
                    <p>Oferecemos serviços especializados para garantir que a sua marca seja registrada corretamente, protegendo a identidade da sua empresa.</p>
                </div>
            </section>

            <section id="producoes-audiovisuais-section">
                <div className="producoes-audiovisuais">
                    <h2>Produção Audiovisual</h2>
                    <p>Criação de conteúdo audiovisual de alta qualidade para campanhas publicitárias, vídeos institucionais e outros materiais visuais para a sua marca.</p>
                </div>
            </section>
      {/* Outros conteúdos da página */}
      <WhatsappButton />


      <section className="formulario-orcamento">
                <FormularioOrcamento />
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <h2>Fale Conosco</h2>
                        <p>Tem dúvidas ou deseja saber mais sobre nossos serviços? Entre em contato!</p>
                        <div className="footer-buttons">
                            <a href="mailto:contato@sucessodigital.com" className="footer-button">Enviar E-mail</a>
                            <a href="/contato" className="footer-button">Fale Conosco</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Meu Sucesso Digital. Todos os direitos reservados.</p>
                </div>
            </footer>
        </header>
    );
};

export default Header;
