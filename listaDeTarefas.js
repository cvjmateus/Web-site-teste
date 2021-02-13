
( ()=>{
    const criarTarefa = (evento)=>{
    evento.preventDefault();

    const list =document.querySelector('[data-list]');
    const cap = document.querySelector('[data-form-input]');
    const valor = cap.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

   
    const conteudo = `<p class="content">${valor}</p> `;

    tarefa.innerHTML =  conteudo;

    tarefa.appendChild(Botaoconclui());
    tarefa.appendChild(BotaoDeleta());
    list.appendChild(tarefa);

    
    cap.value = "";


}





const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa)

const Botaoconclui = ()=>{
    const botaoconclui = document.createElement('button');

    botaoconclui.classList.add('check-button');
    botaoconclui.innerText = 'Concluir';

     botaoconclui.addEventListener('click', concluirTarefa)

     return botaoconclui;
}



const concluirTarefa = (evento)=>{

    const botaoconclui = evento.target;
    const tarefaCompleta = botaoconclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

 const BotaoDeleta = ()=>{
        const botaoDeleta = document.createElement('button');
        botaoDeleta.innerText = 'Deletar';
         botaoDeleta.addEventListener('click', deletaTarefa);

         return botaoDeleta;
    }

    const deletaTarefa = (evento) => {
        const botaoDeleta = evento.target;
        
        const tarefaCompleta = botaoDeleta.parentElement;

        tarefaCompleta.remove();

        return botaoDeleta;
    }

})()