/* ==========================================================================
   Mascaras e Bloqueio de Teclas - ONG Conexao Solidaria
   Impede a digitacao de letras em CPF, Telefone e CEP
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("cpf");
  const telInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  // Funcao que bloqueia fisicamente a digitacao de qualquer tecla que nao seja numero
  function bloquearLetras(elemento) {
    if (!elemento) return;

    elemento.addEventListener("keydown", (e) => {
      // Permite teclas de navegacao e atalhos (Backspace, Tab, Delete, Setas, Ctrl/Cmd)
      const teclasPermitidas = [
        "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"
      ];
      if (teclasPermitidas.includes(e.key) || e.ctrlKey || e.metaKey) {
        return;
      }

      // Bloqueia qualquer caractere que nao seja numero de 0 a 9
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // Sanitiza contra colagens de texto com letras (Ctrl+V)
    elemento.addEventListener("paste", (e) => {
      e.preventDefault();
      const textoColado = (e.clipboardData || window.clipboardData).getData("text");
      const apenasNumeros = textoColado.replace(/\D/g, "");
      document.execCommand("insertText", false, apenasNumeros);
    });
  }

  // Aplica o bloqueio estrito de letras
  bloquearLetras(cpfInput);
  bloquearLetras(telInput);
  bloquearLetras(cepInput);

  // 1. Mascara de CPF: 000.000.000-00
  if (cpfInput) {
    cpfInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = v;
    });
  }

  // 2. Mascara de Telefone: (00) 00000-0000 ou (00) 0000-0000
  if (telInput) {
    telInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (v.length > 5) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      }
      e.target.value = v;
    });
  }

  // 3. Mascara de CEP: 00000-000
  if (cepInput) {
    cepInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 8) v = v.slice(0, 8);
      v = v.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
      e.target.value = v;
    });
  }
});
