const axios = require('axios')
const cheerio = require('cheerio')
const url = 'https://ge.globo.com/futebol/brasileirao-serie-a/'


axios(url).then(response => {
  // captura o html
  const html = response.data
// cheerio extrai o html do site
  const $ = cheerio.load(html)
  const tabelaStatus = $('.ranking-item-wrapper')
  const tabelaJogador = []

  tabelaStatus.each(function () {
    const nomeJogador = $(this).find('.jogador-nome').text()
    const imagem = $(this).find('.jogador > .jogador-escudo > img').text()
    const gols = $(this).find('.jogador-gols').text()
    tabelaJogador.push({
      nomeJogador,
      imagem,
      gols
    })
  })
  console.log(tabelaJogador)
}).catch(console.error)