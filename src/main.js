const piece = document.getElementById("piece");
const piece1 = document.getElementById("piece1");
const piece2 = document.getElementById("piece2");
const piece3 = document.getElementById("piece3");
const statusText = document.getElementById("status");
const startButton = document.getElementById("start");

// Função para atualizar o status
function updateStatus(message) {
  statusText.textContent = `Status: ${message}`;
}

// Função para mover a peça
function movePiece(newTop, newLeft, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      piece.style.top = `${newTop}px`;
      piece.style.left = `${newLeft}px`;
      resolve();
    }, delay);
  });
}
function movePiece1(newTop, newLeft, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      piece1.style.top = `${newTop}px`;
      piece1.style.left = `${newLeft}px`;
      resolve();
    }, delay);
  });
}
function movePiece2(newTop, newLeft, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      piece2.style.top = `${newTop}px`;
      piece2.style.left = `${newLeft}px`;
      resolve();
    }, delay);
  });
}
function movePiece3(newTop, newLeft, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      piece3.style.top = `${newTop}px`;
      piece3.style.left = `${newLeft}px`;
      resolve();
    }, delay);
  });
}

// Função para ativar sensores
function activateSensor(sensorId) {
  const sensor = document.getElementById(sensorId);
  if (sensor) {
    sensor.classList.add("active");
  }
}

// Função para desativar sensores
function deactivateSensor(sensorId) {
  const sensor = document.getElementById(sensorId);
  if (sensor) {
    sensor.classList.remove("active");
  }
}

// Função principal do processo
async function startProcess() {
  updateStatus("Iniciando processo...");

  // Passo 1: Cilindro 1 recua
  updateStatus("Cilindro 1: Inserindo peça...");
  activateSensor("sensor1");
  await movePiece(230, 275, 2000);

  // Passo 2: Cilindro 2 prensa
  updateStatus("Cilindro 2: Estampando...");
  await movePiece(250, 275, 2000);

  // Passo 3: Cilindro 3 extrai
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece(230, 275, 2000);
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece(230, 395, 1000);

  // Passo 4: Sopro e transporte
  updateStatus("Sopro de ar ativado...");
  await movePiece(299, 395, 1000);
  // outra peça 
  // Passo 1: Cilindro 1 recua
  updateStatus("Cilindro 1: Inserindo peça...");
  await movePiece1(230, 120, 1000);

  updateStatus("Cilindro 1: Inserindo peça...");
  await movePiece1(230, 275, 2000);

  // Passo 2: Cilindro 2 prensa
  updateStatus("Cilindro 2: Estampando...");
  await movePiece1(250, 275, 2000);

  // Passo 3: Cilindro 3 extrai
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece1(230, 275, 2000);
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece1(230, 395, 1000);

  // Passo 4: Sopro e transporte
  updateStatus("Sopro de ar ativado...");
  await movePiece1(279, 395, 1000);
  // outra peça 2
  // Passo 1: Cilindro 1 recua
  updateStatus("Cilindro 1: Inserindo peça...");
  await movePiece2(230, 120, 1000);

  updateStatus("Cilindro 1: Inserindo peça...");
  await movePiece2(230, 275, 2000);

  // Passo 2: Cilindro 2 prensa
  updateStatus("Cilindro 2: Estampando...");
  await movePiece2(250, 275, 2000);

  // Passo 3: Cilindro 3 extrai
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece2(230, 275, 2000);
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece2(230, 395, 1000);

  // Passo 4: Sopro e transporte
  updateStatus("Sopro de ar ativado...");
  await movePiece2(259, 395, 1000);
  // outra peça 3
  // Passo 1: Cilindro 1 recua
  updateStatus("Cilindro 1: Inserindo peça...");
  await movePiece3(230, 120, 1000);

  updateStatus("Cilindro 1: Inserindo peça...");
  await movePiece3(230, 275, 2000);

  // Passo 2: Cilindro 2 prensa
  updateStatus("Cilindro 2: Estampando...");
  await movePiece3(250, 275, 2000);

  // Passo 3: Cilindro 3 extrai
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece3(230, 275, 2000);
  updateStatus("Cilindro 3: Retirando peça...");
  await movePiece3(230, 395, 1000);

  // Passo 4: Sopro e transporte
  updateStatus("Sopro de ar ativado...");
  await movePiece3(239, 395, 1000);

  // Fim
  updateStatus("Ciclo concluído. Aguardando próximo comando.");
}

// Evento para iniciar o processo
startButton.addEventListener("click", startProcess);
