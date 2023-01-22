const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//adicionar funcionalidade ao botão
button.addEventListener('click', add)
form.addEventListener("change", save)

//adicionar registro
function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //adiciona o dia de hoje e altera para o padrão BR com dia/mês
  const dayExists = nlwSetup.dayExists('01/01')
  //verificar existencia do dia
  if (dayExists){
    alert("Dia já incluso")
    return
  }
  //adicionar dia
  nlwSetup.addDay("01/01")
}

//Salvar dados
function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //funcao para salvar dados como string
}

//funcao para ler os dados como string e transformar em número
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()