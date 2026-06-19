function avaliarSenha() {
  const senha = document.getElementById("senha").value;
  const resultado = document.getElementById("resultadoSenha");

  let pontos = 0;

  // lógica matemática simples de segurança
  if (senha.length >= 8) pontos += 2;
  if (/[A-Z]/.test(senha)) pontos += 1;
  if (/[a-z]/.test(senha)) pontos += 1;
  if (/[0-9]/.test(senha)) pontos += 1;
  if (/[^A-Za-z0-9]/.test(senha)) pontos += 2;

  if (pontos <= 2) {
    resultado.textContent = "❌ Senha fraca";
  } else if (pontos <= 4) {
    resultado.textContent = "⚠️ Senha média";
  } else {
    resultado.textContent = "✅ Senha forte";
  }
}

function compararSites() {
  const resultado = document.getElementById("resultadoSites");

  // exemplo educativo de análise crítica
  const siteA = {
    https: true,
    anuncios: false,
    tempoCarregamento: "rápido"
  };

  const siteB = {
    https: false,
    anuncios: true,
    tempoCarregamento: "lento"
  };

  let conclusao = "";

  if (siteA.https && !siteA.anuncios) {
    conclusao += "Site A é mais seguro. ";
  }

  if (!siteB.https || siteB.anuncios) {
    conclusao += "Site B apresenta riscos. ";
  }

  resultado.textContent = conclusao;
}