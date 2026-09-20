const onlyDigits = (value) => value.replace(/\D/g, '');

const formatValue = (input, format) => {
  input.addEventListener('input', () => {
    input.value = format(onlyDigits(input.value));
  });
};

formatValue(document.querySelector('#cpf'), (value) => value
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})$/, '$1-$2'));

formatValue(document.querySelector('#telefone'), (value) => value
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(\d{4})(\d)/, '$1-$2'));

formatValue(document.querySelector('#cep'), (value) => value.replace(/(\d{5})(\d)/, '$1-$2'));

const form = document.querySelector('#volunteer-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const availability = form.querySelectorAll('input[name="disponibilidade"]:checked');

  if (!form.checkValidity() || availability.length === 0) {
    message.textContent = 'Revise os campos obrigatórios e escolha ao menos uma disponibilidade.';
    message.style.color = 'var(--coral)';
    form.reportValidity();
    return;
  }

  message.textContent = 'Cadastro recebido. Obrigado por escolher fazer parte dessa mudança!';
  message.style.color = 'var(--ink)';
  form.reset();
});
