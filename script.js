const crimes = [
  // VIOLAÇÃO DE TRANSITO (1-11)
  {"article": 1, "title": "Estacionar em Zona de Taxi", "months": 1, "fine": 4000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 2, "title": "Estacionar na Contra Mão", "months": 1, "fine": 5000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 3, "title": "Estacionar em Local Proibido", "months": 1, "fine": 6000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 4, "title": "Atropelamento Culposo", "months": 10, "fine": 10000, "fiancaValor": 750000, "category": "1. Trânsito"},
  {"article": 5, "title": "Atropelamento Doloso", "months": 20, "fine": 20000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 6, "title": "Atropelamento Coletivo", "months": 35, "fine": 35000, "fiancaValor": 2625000, "category": "1. Trânsito"},
  {"article": 7, "title": "Andar com o Veiculo Avariado", "months": 1, "fine": 2000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 8, "title": "Abandono de Veiculo de Trabalho", "months": 10, "fine": 10000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 9, "title": "Cometer Crime.com Veiculo Público", "months": 40, "fine": 45000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 10, "title": "Poluição Sonora", "months": 10, "fine": 10000, "fiancaValor": 0, "category": "1. Trânsito"},
  {"article": 11, "title": "Direção Perigosa", "months": 15, "fine": 15000, "fiancaValor": 1125000, "category": "1. Trânsito"},

  // CRIMES CONTRA PESSOA GRAVE (12-33)
  {"article": 12, "title": "Tentativa de Homicídio", "months": 50, "fine": 10000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 13, "title": "Homicídio Doloso", "months": 60, "fine": 20000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 14, "title": "Homicídio Culposo", "months": 40, "fine": 5000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 15, "title": "Homicídio a Servidor Público", "months": 100, "fine": 50000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 16, "title": "Latrocínio", "months": 80, "fine": 50000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 17, "title": "Crimes de Agressão ou Lesão Corporal", "months": 15, "fine": 20000, "fiancaValor": 1500000, "category": "2. Contra a Pessoa"},
  {"article": 18, "title": "Causar Incêndio ou Explosão", "months": 30, "fine": 50000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 19, "title": "Tentativa de Sequestro", "months": 30, "fine": 5000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 20, "title": "Sequestro", "months": 50, "fine": 15000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 21, "title": "Violência contra Animais", "months": 15, "fine": 10000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 22, "title": "Omissão de Socorro", "months": 30, "fine": 20000, "fiancaValor": 1500000, "category": "2. Contra a Pessoa"},
  {"article": 23, "title": "Abandono de Incapaz", "months": 40, "fine": 50000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 24, "title": "Maus Tratos", "months": 40, "fine": 50000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},
  {"article": 25, "title": "Calúnia", "months": 20, "fine": 15000, "fiancaValor": 1125000, "category": "2. Contra a Pessoa"},
  {"article": 26, "title": "Difamação", "months": 20, "fine": 15000, "fiancaValor": 1125000, "category": "2. Contra a Pessoa"},
  {"article": 27, "title": "Injúria", "months": 20, "fine": 15000, "fiancaValor": 1125000, "category": "2. Contra a Pessoa"},
  {"article": 28, "title": "Injúria Real", "months": 40, "fine": 55000, "fiancaValor": 4125000, "category": "2. Contra a Pessoa"},
  {"article": 29, "title": "Atentado ao Pudor", "months": 20, "fine": 10000, "fiancaValor": 750000, "category": "2. Contra a Pessoa"},
  {"article": 30, "title": "Assédio", "months": 50, "fine": 50000, "fiancaValor": 3750000, "category": "2. Contra a Pessoa"},
  {"article": 31, "title": "Ameaça", "months": 25, "fine": 20000, "fiancaValor": 1500000, "category": "2. Contra a Pessoa"},
  {"article": 32, "title": "Uso Indevido da Imagem", "months": 15, "fine": 15000, "fiancaValor": 1125000, "category": "2. Contra a Pessoa"},
  {"article": 33, "title": "Injúria por Preconceito (características/crenças)", "months": 600, "fine": 1000000, "fiancaValor": 0, "category": "2. Contra a Pessoa"},

  // CRIMES CONTRA O PATRIMONIO (34-39)
  {"article": 34, "title": "Direitos Autorais", "months": 15, "fine": 30000, "fiancaValor": 2250000, "category": "3. Patrimônio"},
  {"article": 35, "title": "Furto", "months": 20, "fine": 15000, "fiancaValor": 1125000, "category": "3. Patrimônio"},
  {"article": 36, "title": "Roubo a Mão Armada", "months": 40, "fine": 40000, "fiancaValor": 0, "category": "3. Patrimônio"},
  {"article": 37, "title": "Roubo de Automotores", "months": 30, "fine": 30000, "fiancaValor": 0, "category": "3. Patrimônio"},
  {"article": 38, "title": "Extorsão", "months": 40, "fine": 55000, "fiancaValor": 4125000, "category": "3. Patrimônio"},
  {"article": 39, "title": "Dano ao Patrimônio Privado", "months": 10, "fine": 5000, "fiancaValor": 375000, "category": "3. Patrimônio"},

  // CRIMES ENVOLVENDO DROGAS E ARMAS (46-63)
  {"article": 46, "title": "Retenção de Drogas para uso", "months": 1, "fine": 3000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 47, "title": "Produção de Drogas", "months": 100, "fine": 50000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 48, "title": "Posse de drogas", "months": 10, "fine": 5000, "fiancaValor": 1500000, "category": "4. Drogas/Armas"},
  {"article": 49, "title": "Tráfico de drogas", "months": 30, "fine": 20000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 50, "title": "Posse Ilegal de munições leves", "months": 5, "fine": 3000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 51, "title": "Posse Ilegal de munições média", "months": 15, "fine": 5000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 52, "title": "Posse Ilegal de munições pesada", "months": 25, "fine": 10000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 53, "title": "Porte Ilegal de armas Leves", "months": 30, "fine": 10000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 54, "title": "Porte Ilegal de armas Medias", "months": 40, "fine": 20000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 55, "title": "Porte Ilegal de armas pesadas", "months": 50, "fine": 30000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 56, "title": "Tráfico de arma leve", "months": 25, "fine": 50000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 57, "title": "Tráfico de arma media", "months": 35, "fine": 70000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 58, "title": "Tráfico de arma pesada", "months": 45, "fine": 80000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 59, "title": "Tráfico ilegal de munições leves", "months": 10, "fine": 30000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 60, "title": "Tráfico Ilegal de munições media", "months": 20, "fine": 40000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 61, "title": "Tráfico Ilegal de munições pesada", "months": 40, "fine": 50000, "fiancaValor": 0, "category": "4. Drogas/Armas"},
  {"article": 62, "title": "Equipamento Balístico", "months": 15, "fine": 15000, "fiancaValor": 1125000, "category": "4. Drogas/Armas"},
  {"article": 63, "title": "Posse de Dinheiro Sujo", "months": 15, "fine": 15000, "fiancaValor": 1125000, "category": "4. Drogas/Armas"},

  // CRIMES DIVERSOS (VÁRIOS) (64-79)
  {"article": 64, "title": "Ocultação Facial", "months": 15, "fine": 5000, "fiancaValor": 375000, "category": "5. Vários"},
  {"article": 65, "title": "Obstrução Facial (somente mediante o devido processo legal, seja judicial ou administrativo)", "months": 35, "fine": 50000, "fiancaValor": 3750000, "category": "5. Vários"},
  {"article": 66, "title": "Posse de Coldre", "months": 15, "fine": 5000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 67, "title": "Algema", "months": 10, "fine": 5000, "fiancaValor": 375000, "category": "5. Vários"},
  {"article": 68, "title": "Logs/Keys de Banco", "months": 10, "fine": 5000, "fiancaValor": 375000, "category": "5. Vários"},
  {"article": 69, "title": "Lockpick", "months": 10, "fine": 5000, "fiancaValor": 375000, "category": "5. Vários"},
  {"article": 70, "title": "Capuz", "months": 10, "fine": 5000, "fiancaValor": 375000, "category": "5. Vários"},
  {"article": 71, "title": "Placa Clonada", "months": 10, "fine": 5000, "fiancaValor": 375000, "category": "5. Vários"},
  {"article": 72, "title": "Lavagem de Dinheiro (somente mediante o devido processo legal, seja judicial ou administrativo)", "months": 100, "fine": 100000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 73, "title": "Posse de Subprodutos ilícitos", "months": 10, "fine": 5000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 74, "title": "Posse de Pólvora", "months": 15, "fine": 5000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 75, "title": "Posse de C4", "months": 20, "fine": 10000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 76, "title": "Uso indevido do Porte de Arma", "months": 15, "fine": 15000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 77, "title": "Uso indevido de Arma de Choque ou Branca", "months": 10, "fine": 10000, "fiancaValor": 750000, "category": "5. Vários"},
  {"article": 78, "title": "Fuga da Abordagem", "months": 10, "fine": 10000, "fiancaValor": 0, "category": "5. Vários"},
  {"article": 79, "title": "Perturbação da Ordem Pública", "months": 10, "fine": 15000, "fiancaValor": 0, "category": "5. Vários"},

  // CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA (80-95)
  {"article": 80, "title": "Falsidade Ideológica", "months": 25, "fine": 15000, "fiancaValor": 1125000, "category": "6. Adm. Pública"},
  {"article": 81, "title": "Exercício ilegal da profissão", "months": 20, "fine": 15000, "fiancaValor": 1125000, "category": "6. Adm. Pública"},
  {"article": 82, "title": "Exercer atividade da qual está proibido", "months": 40, "fine": 35000, "fiancaValor": 2625000, "category": "6. Adm. Pública"},
  {"article": 83, "title": "Abandono de Função", "months": 30, "fine": 40000, "fiancaValor": 3000000, "category": "6. Adm. Pública"},
  {"article": 84, "title": "Desobediência a autoridade", "months": 15, "fine": 10000, "fiancaValor": 750000, "category": "6. Adm. Pública"},
  {"article": 85, "title": "Desacato", "months": 50, "fine": 15000, "fiancaValor": 1125000, "category": "6. Adm. Pública"},
  {"article": 86, "title": "Tentativa de Suborno", "months": 45, "fine": 35000, "fiancaValor": 2625000, "category": "6. Adm. Pública"},
  {"article": 87, "title": "Corrupção", "months": 400, "fine": 250000, "fiancaValor": 0, "category": "6. Adm. Pública"},
  {"article": 88, "title": "Suborno", "months": 55, "fine": 70000, "fiancaValor": 5250000, "category": "6. Adm. Pública"},
  {"article": 89, "title": "Fraudar Informações", "months": 45, "fine": 50000, "fiancaValor": 0, "category": "6. Adm. Pública"},
  {"article": 90, "title": "Prevaricação", "months": 50, "fine": 40000, "fiancaValor": 0, "category": "6. Adm. Pública"},
  {"article": 91, "title": "Obstrução da Justiça", "months": 50, "fine": 35000, "fiancaValor": 0, "category": "6. Adm. Pública"},
  {"article": 92, "title": "Abuso de Autoridade", "months": 50, "fine": 50000, "fiancaValor": 0, "category": "6. Adm. Pública"},
  {"article": 93, "title": "Perjúrio, Falso Testemunho, negar a verdade ou omitir informações", "months": 30, "fine": 30000, "fiancaValor": 3750000, "category": "6. Adm. Pública"},
  {"article": 94, "title": "Iniciar investigação em um individuo sabendo que o mesmo é inocente.", "months": 25, "fine": 20000, "fiancaValor": 0, "category": "6. Adm. Pública"},
  {"article": 95, "title": "Denunciação Caluniosa", "months": 55, "fine": 60000, "fiancaValor": 0, "category": "6. Adm. Pública"},

  // CRIMES CONTRA A PROPRIEDADE PÚBLICA E SUA ECONOMIA (96-106)
  {"article": 96, "title": "Banco Central", "months": 100, "fine": 80000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 97, "title": "Joalheria", "months": 70, "fine": 50000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 98, "title": "Banco Fleeca", "months": 80, "fine": 60000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 99, "title": "Banco Paleto", "months": 100, "fine": 80000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 100, "title": "Nióbio", "months": 120, "fine": 80000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 101, "title": "Açougue", "months": 50, "fine": 50000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 102, "title": "Galinheiro", "months": 50, "fine": 50000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 103, "title": "Caixas Registradoras", "months": 10, "fine": 5000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 104, "title": "Loja de departamento", "months": 30, "fine": 20000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 105, "title": "Loja de armas (Ammunation)", "months": 20, "fine": 15000, "fiancaValor": 0, "category": "7. Prop. Pública"},
  {"article": 106, "title": "Caixa Eletrônico (ATM)", "months": 20, "fine": 10000, "fiancaValor": 0, "category": "7. Prop. Pública"}
];

function numberBR(n){ return 'R$ '+(n/100).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }

function renderCrimeList(){
  const container = document.getElementById('crimeContainer');
  container.innerHTML = '';
  const categories = {};
  const search = document.getElementById('search') ? document.getElementById('search').value.toLowerCase() : '';
  
  // 1. Agrupar e filtrar crimes por categoria
  crimes.filter(c => 
    !search || 
    c.title.toLowerCase().includes(search) || 
    String(c.article).includes(search)
  ).forEach(c => {
    if(!categories[c.category]) categories[c.category] = [];
    categories[c.category].push(c);
  });
  
  // 2. Iterar sobre as categorias (ordenadas pelo prefixo numérico, ex: "1. Trânsito")
  Object.keys(categories).sort().forEach(cat => {
    const catDiv = document.createElement('div'); 
    catDiv.className = 'category';
    
    // Remover o prefixo numérico para o título da categoria (ex: "1. Trânsito" vira "Trânsito")
    const displayCat = cat.replace(/^\d+\.\s*/, '');
    const h3 = document.createElement('h3'); 
    h3.textContent = displayCat;
    catDiv.appendChild(h3);
    
    // 3. Ordenar os crimes dentro da categoria por número do artigo e renderizar
    categories[cat].sort((a, b) => a.article - b.article).forEach(c => {
      const el = document.createElement('label'); 
      el.className = 'crime-item';
      
      const fiancaText = c.fiancaValor > 0 ? numberBR(c.fiancaValor) : "Não";
      
      el.innerHTML = `<input type="checkbox" data-article="${c.article}" onchange="updateSummary()">
        <div style="flex:1">
          <div style="font-weight:700">${c.article} — ${c.title}</div>
          <div class="crime-meta">Pena: ${c.months} meses · Multa: ${numberBR(c.fine)} · Fiança: ${fiancaText}</div>
        </div>`;

      catDiv.appendChild(el);
    });
    container.appendChild(catDiv);
  });
}

function getSelected(){ 
  return Array.from(document.querySelectorAll('#crimeContainer input[type=checkbox]'))
    .filter(i=>i.checked)
    .map(i=>{ 
      const art = Number(i.dataset.article); 
      return crimes.find(c=>c.article===art); 
    }); 
}

function updateSummary(){
  const name = document.getElementById('nome').value || '—';
  const doc = document.getElementById('passport').value || '—';
  document.getElementById('sName').textContent = name;
  document.getElementById('sDoc').textContent = doc;
  
  const selected = getSelected();
  document.getElementById('sCount').textContent = selected.length;
  
  let baseMonths = selected.reduce((s,c)=>s + (c.months||0),0);
  let baseFine = selected.reduce((s,c)=>s + (c.fine||0),0);
  let totalFianca = selected.reduce((s,c)=>s + (c.fiancaValor||0),0);
  
  const anyInaf = selected.some(c=>c.fiancaValor===0);
  
  // Atualiza o resumo da fiança para mostrar o valor total se for afiançável, ou a mensagem de inafiançável
  if (selected.length === 0) {
      document.getElementById('sFiança').textContent = '—';
  } else {
      document.getElementById('sFiança').textContent = anyInaf 
          ? 'Não (Algum crime é inafiançável)' 
          : numberBR(totalFianca);
  }

  // CÁLCULO DE ATENUANTES/AGRAVANTES
  if(document.getElementById('reincidente').checked){ baseMonths *= 1.10; baseFine *= 1.10; }
  
  let at = 0;
  if(document.getElementById('attorney').checked) at += 25;
  if(document.getElementById('confession').checked) at += 30;
  if(document.getElementById('primario').checked) at += 20;
  if(document.getElementById('collab').checked) at += 10;
  if(document.getElementById('delacao').checked) at += 50;
  if(at>90) at = 90;
  
  const finalMonths = Math.ceil(baseMonths * (1 - at/100));
  const finalFine = Math.ceil(baseFine * (1 - at/100));
  
  document.getElementById('sMonths').textContent = Math.max(0, finalMonths) + ' meses';
  document.getElementById('sFine').textContent = numberBR(finalFine);
  
  const listEl = document.getElementById('sList');
  listEl.innerHTML = '';
  
  if(selected.length===0) { 
    listEl.innerHTML = '<div class="muted">Nenhum crime selecionado.</div>'; 
  } else {
    selected.forEach(c=>{
      const div = document.createElement('div'); div.style.padding='6px 0';
      const fiancaText = c.fiancaValor > 0 ? numberBR(c.fiancaValor) : "Não";
      div.innerHTML = `<div style="font-weight:700">${c.article} — ${c.title}</div><div class="muted">${c.months} meses · Multa: ${numberBR(c.fine)} · Fiança: ${fiancaText}</div>`;
      listEl.appendChild(div);
    });
  }
}

function checkAll(v){ 
  document.querySelectorAll('#crimeContainer input[type=checkbox]').forEach(i=>i.checked=v); 
  updateSummary(); 
}

function exportJSON(){ 
  const data = {
    nome:document.getElementById('nome').value, 
    doc:document.getElementById('passport').value, 
    date:document.getElementById('date').value, 
    selected:getSelected()
  }; 
  const txt = JSON.stringify(data, null, 2); 
  const a = document.createElement('a'); 
  a.href = 'data:application/json;charset=utf-8,'+encodeURIComponent(txt); 
  a.download='ficha.json'; 
  a.click(); 
}

function downloadSummaryPNG(){ 
  if(!window.html2canvas){ 
    const s = document.createElement('script'); 
    s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'; 
    s.onload = renderAndDownload; 
    document.body.appendChild(s);
  } else { 
    renderAndDownload(); 
  } 
}

function renderAndDownload(){ 
  const node = document.getElementById('summaryCard'); 
  // Ocultar a lista de crimes no resumo antes de capturar a imagem
  const sList = document.getElementById('sList');
  const originalHeight = sList.style.maxHeight;
  const originalOverflow = sList.style.overflow;
  sList.style.maxHeight = 'none';
  sList.style.overflow = 'visible';

  html2canvas(node, {
    scale:2, 
    backgroundColor:'#161e1a'
  }).then(canvas=>{ 
    const a = document.createElement('a'); 
    a.href = canvas.toDataURL('image/png'); 
    a.download = 'ficha_resumo_lado_leste.png'; 
    a.click(); 
    
    // Restaurar a altura da lista
    sList.style.maxHeight = originalHeight;
    sList.style.overflow = originalOverflow;
  }); 
}

function previewPhoto() {
  const fileInput = document.getElementById('photoUpload');
  const file = fileInput.files[0];
  const previewContainer = document.getElementById('photoPreviewContainer');
  const summaryHeader = document.querySelector('.summary-header');
  
  // Remove qualquer imagem ou ícone anterior
  const existingIcon = summaryHeader.querySelector('.summary-icon');
  const existingPhoto = summaryHeader.querySelector('.summary-photo');
  if (existingIcon) existingIcon.remove();
  if (existingPhoto) existingPhoto.remove();
  previewContainer.innerHTML = '';
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // 1. Preview na área de upload
      const img = document.createElement('img');
      img.src = e.target.result;
      previewContainer.appendChild(img);
      
      // 2. Imagem no Resumo
      const summaryPhoto = document.createElement('img');
      summaryPhoto.id = 'sPhoto';
      summaryPhoto.className = 'summary-photo';
      summaryPhoto.src = e.target.result;

      // Insere a foto no início do summary-header (antes do nome/doc)
      summaryHeader.prepend(summaryPhoto); 
    };
    reader.readAsDataURL(file);
  } else {
    // Se nenhum arquivo for selecionado, restaura o ícone "CP"
    const defaultIcon = document.createElement('div');
    defaultIcon.className = 'summary-icon';
    defaultIcon.textContent = 'CP';
    summaryHeader.prepend(defaultIcon);
    
    previewContainer.innerHTML = '<p id="photoHint">Clique aqui para carregar a imagem</p>';
  }
}

document.addEventListener('DOMContentLoaded', ()=>{ 
  renderCrimeList(); 
  document.getElementById('date').value = new Date().toISOString().slice(0,10); 
  updateSummary();
  
  // Novo: Adicionar ouvinte para clicar na div de preview e abrir o file input
  document.getElementById('photoPreviewContainer').addEventListener('click', function() {
      document.getElementById('photoUpload').click();
  });
  
  // Novo: Inicializa o ícone "CP" na primeira carga
  const summaryHeader = document.querySelector('.summary-header');
  const defaultIcon = document.createElement('div');
  defaultIcon.className = 'summary-icon';
  defaultIcon.textContent = 'CP';
  summaryHeader.prepend(defaultIcon);
});

