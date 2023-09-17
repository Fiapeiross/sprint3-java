import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
  return (
    <main className="container-custom mb-4 bg-light">
      <article className="row p-5 d-flex align-items-center">
        <section className="col-md-6 my-3">
          <h1 className="display-4 text-success">Cidade Sustentável</h1>
          <h2 className="text-secondary"><b>Um futuro mais verde e sustentável</b></h2>
          <a href="#" className="btn btn-outline-primary btn-sm">Conheça nossa solução
            <i className="bi bi-arrow-down-circle ms-1 icon-position"></i>
          </a>
        </section>

        <figure className="col-md-6 my-3">
          <img src="./images/cidade-sustentavel.png" alt="Imagem de uma cidade sustentável"
            className="img-fluid" style={{ maxWidth: '90%' }} />
        </figure>
      </article>

      {/* Adicione o conteúdo sobre Vantagens aqui */}
      <section className="container-custom my-4 p-3 bg-light">
        <h4 className="text-center text-success my-4">Vantagens de uma Cidade Sustentável</h4>
        <div className="row my-2">
          {/* Vantagem 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="bi bi-tree h1 text-success"></i>
                <h5 className="card-title mt-3">Preservação Ambiental</h5>
                <p className="card-text">Redução da poluição do ar e da água, preservação de áreas verdes e da
                  biodiversidade.</p>
              </div>
            </div>
          </div>
          {/* Vantagem 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="bi bi-lightbulb h1 text-success"></i>
                <h5 className="card-title mt-3">Eficiência Energética</h5>
                <p className="card-text">Uso racional de energia, adoção de fontes limpas e renováveis, redução de
                  desperdício.</p>
              </div>
            </div>
          </div>
          {/* Vantagem 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="bi bi-globe h1 text-success"></i>
                <h5 className="card-title mt-3">Qualidade de Vida</h5>
                <p className="card-text">Promoção de saúde, espaços públicos de qualidade, mobilidade sustentável.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adicione o conteúdo sobre Soluções aqui */}
      <section className="container-custom my-4 p-3 bg-light">
        <h4 className="text-center text-success my-4">Soluções para uma Cidade Sustentável</h4>
        <div className="row my-4">
          {/* Solução 1 */}
          <div className="col-12">
            <h5 className="text-success">1. Energias Renováveis</h5>
            <div className="card border-0">
              <div className="card-body">
                <p>
                  Uma das principais soluções para uma cidade sustentável é o investimento em fontes de
                  energia renovável, como a energia solar e eólica. A instalação de painéis solares em
                  edifícios públicos e privados e a utilização de turbinas eólicas podem reduzir
                  significativamente a pegada de carbono da cidade, diminuindo a dependência de combustíveis
                  fósseis.
                </p>
              </div>
            </div>
          </div>
          {/* Solução 2 */}
          <div className="col-12">
            <h5 className="text-success">2. Transporte Público Eficiente</h5>
            <div className="card border-0">
              <div className="card-body">
                <p>
                  Um sistema de transporte público eficiente e acessível é essencial para uma cidade
                  sustentável. Investir em redes de metrô, ônibus e trilhos leves, juntamente com
                  infraestrutura para ciclistas e pedestres, reduz a necessidade de carros particulares,
                  aliviando o tráfego e a poluição do ar.
                </p>
              </div>
            </div>
          </div>
          {/* Solução 3 */}
          <div className="col-12">
            <h5 className="text-success">3. Gestão de Resíduos</h5>
            <div className="card border-0">
              <div className="card-body">
                <p>
                  Uma cidade sustentável implementa políticas de gestão de resíduos sólidos, incentivando a
                  reciclagem, compostagem e a redução do desperdício. Programas de coleta seletiva e a
                  conscientização da população são essenciais para diminuir a quantidade de resíduos enviados
                  para aterros sanitários.
                </p>
              </div>
            </div>
          </div>
          {/* Solução 4 */}
          <div className="col-12">
            <h5 className="text-success">4. Planejamento Urbano Sustentável</h5>
            <div className="card border-0">
              <div className="card-body">
                <p>
                  O planejamento urbano desempenha um papel crucial em uma cidade sustentável. Isso inclui o
                  desenvolvimento de espaços verdes, parques, áreas de lazer e a preservação de áreas naturais.
                  Um planejamento cuidadoso garante que a cidade seja habitável, promove a biodiversidade
                  urbana e reduz o impacto ambiental.
                </p>
              </div>
            </div>
          </div>
          {/* Solução 5 */}
          <div className="col-12">
            <h5 className="text-success">5. Inclusão Social</h5>
            <div className="card border-0">
              <div className="card-body">
                <p>
                  Uma cidade sustentável é inclusiva e equitativa. Isso envolve a garantia de acesso à moradia
                  digna para todos, educação de qualidade, assistência médica acessível e oportunidades
                  econômicas para todos os cidadãos. A igualdade de gênero e a promoção de direitos humanos
                  são pilares fundamentais para uma cidade verdadeiramente sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adicione o conteúdo sobre Problemas aqui */}
      <section className="container-custom my-4 p-3 bg-light">
        <h4 className="text-center text-success my-4">Problemas de uma Cidade Sustentável</h4>
        <div className="row my-4">
          {/* Problema 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card border-danger">
              <div className="card-body">
                <i className="bi bi-cloud h3 text-success mb-3"></i>
                <h5 className="card-title">Poluição Atmosférica</h5>
                <p className="card-text">Embora as cidades sustentáveis busquem reduzir a poluição do ar,
                  muitas ainda enfrentam desafios significativos. Emissões de veículos, indústrias e outras
                  fontes podem afetar negativamente a qualidade do ar, causando problemas de saúde para os
                  habitantes urbanos.</p>
              </div>
            </div>
          </div>
          {/* Problema 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card border-danger">
              <div className="card-body">
                <i className="bi bi-patch-check h3 text-success mb-3"></i>
                <h5 className="card-title">Desigualdade Socioeconômica</h5>
                <p className="card-text">Mesmo em cidades sustentáveis, a desigualdade socioeconômica pode
                  persistir. A falta de acesso a moradias acessíveis, educação de qualidade e oportunidades
                  econômicas equitativas pode deixar alguns grupos da população em desvantagem.</p>
              </div>
            </div>
          </div>
          {/* Problema 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card border-danger">
              <div className="card-body">
                <i className="bi bi-trash h3 text-success mb-3"></i>
                <h5 className="card-title">Gestão de Resíduos Desafiadora</h5>
                <p className="card-text">Embora a gestão de resíduos seja uma solução importante, pode ser
                  desafiadora em uma cidade sustentável. A coleta seletiva, reciclagem e compostagem
                  requerem infraestrutura e educação adequadas, que podem estar ausentes em algumas áreas
                  urbanas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Renderize o componente no elemento com o ID "root"
ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;
