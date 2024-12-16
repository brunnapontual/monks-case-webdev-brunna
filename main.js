const getRandom = () => Math.floor(Math.random() * 700) + 100;
    const [num1, num2] = [getRandom(), getRandom()];
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;

    function checkVerification() {
      const userResult = +document.getElementById('result').value;
      const correctResult = num1 + num2;
      const respostaElement = document.getElementById('resposta');
    
      if (userResult === correctResult) {
        respostaElement.textContent = 'Verificação bem-sucedida!';
        respostaElement.style.color = '#7D26C9';
      } else {
        respostaElement.textContent = 'Verificação falhou. Tente novamente!';
        respostaElement.style.color = '#e76868';
      }
    }        