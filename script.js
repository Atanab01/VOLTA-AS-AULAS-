[10:24, 7/24/2024] Erik Albert: // Mensagem de boss-vindas ao clicar no botão document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('button');
    
    button.addEventListener('click', () => {
    
    alert('Estamos animados para começar o ano com vocês!');
    
    });
    
    // Contador de dias para o início das aulas
    [10:25, 7/24/2024] Erik Albert: const startDate=new Date('2024-08-01);// Defina a data de inicio das nutas
    
    const today new Date();
    
    const timeDiff startDate-today;
    
    const daysLeftMath.ceil(time Diff/(1000-60*60*24));
    
    const countdown Element = document.createElement('p');
    
    countdownElement.textContent = Faltam ${daysLeft) dias para o início das aulas!": document.querySelector('.card").appendChild(countdownElement);
    
    // Alterar a imagem ao clicar
    
    const image = document.querySelector('img'); image.addEventListener('click', () => { image.src=voltaaulas.jpg; });
    
    // Mostrar uma mensagem de boas-vindas com animação
    
    const card document.querySelector('.card');
    
    card.style.opacity
    
    card.style.transition = 'opacity 2s';
    
    setTimeout(() => {
    
    card.style.opacity= 1; ), 100);
    
    });