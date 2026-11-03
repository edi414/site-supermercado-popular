/* Supermercado Popular · site
   Selo "Aberto agora" e destaque do dia no horário, sempre no fuso de Recife. */
(function () {
  // 0 = domingo. Horários em minutos desde 00:00.
  var HORARIO = {
    0: [6 * 60 + 30, 13 * 60],
    1: [6 * 60 + 30, 19 * 60], 2: [6 * 60 + 30, 19 * 60], 3: [6 * 60 + 30, 19 * 60],
    4: [6 * 60 + 30, 19 * 60], 5: [6 * 60 + 30, 19 * 60], 6: [6 * 60 + 30, 19 * 60]
  };
  var DIAS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function agoraEmRecife() {
    var partes = {};
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Recife', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(new Date()).forEach(function (p) { partes[p.type] = p.value; });
    return { dia: DIAS[partes.weekday], min: Number(partes.hour) * 60 + Number(partes.minute) };
  }

  function hhmm(min) {
    return String(Math.floor(min / 60)).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
  }

  function atualizar() {
    var agora = agoraEmRecife();
    var hoje = HORARIO[agora.dia];
    var aberto = agora.min >= hoje[0] && agora.min < hoje[1];
    var texto;

    if (aberto) {
      var faltam = hoje[1] - agora.min;
      texto = faltam <= 60 ? 'Aberto agora · fecha em ' + faltam + ' min' : 'Aberto agora · fecha às ' + hhmm(hoje[1]);
    } else if (agora.min < hoje[0]) {
      texto = 'Fechado agora · abre hoje às ' + hhmm(hoje[0]);
    } else {
      texto = 'Fechado agora · abre amanhã às ' + hhmm(HORARIO[(agora.dia + 1) % 7][0]);
    }

    document.querySelectorAll('[data-status]').forEach(function (el) {
      el.classList.toggle('is-aberto', aberto);
      el.classList.toggle('is-fechado', !aberto);
      el.querySelector('.status__texto').textContent = texto;
    });

    document.querySelectorAll('.horario__linha[data-dias]').forEach(function (linha) {
      var d = linha.dataset.dias;
      var eHoje = d === '1-6' ? agora.dia >= 1 && agora.dia <= 6 : Number(d) === agora.dia;
      linha.classList.toggle('is-hoje', eHoje);
    });
  }

  atualizar();
  setInterval(atualizar, 60 * 1000);

  document.querySelectorAll('[data-ano]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
