const inputuser1 = document.querySelector(`.input-box.user1 input[type="text"]`);
const inputuser2 = document.querySelector(`.input-box.user2 input[type="text"]`);
const buttonuser1 = document.querySelector(`.input-box.user1 button`);
const buttonuser2 = document.querySelector(`.input-box.user2 button`);
const chatbox = document.querySelector(`.chat-box`);

function colocarmensaje (usuario,mensaje){
    const mensajehtml = `
    <div class="message ${usuario}">
    <p>${mensaje}</p>
    </div>
    `;
    chatbox.innerHTML += mensajehtml;
    chatbox.scrollTop = chatbox.scrollHeight; //scroll al final
}
buttonuser1.addEventListener(`click`, () => {
    const mensaje = inputuser1.value.trim();
    if (mensaje !== '') {
        colocarmensaje('message-user1', mensaje);
        inputuser1.value = ''; // limpiar input
    }
});
buttonuser2.addEventListener(`click`,() => {
    const mensaje = inputuser2.value.trim();
    if (mensaje !== ''){
        colocarmensaje('message-user2',mensaje)
        inputuser2.value='';//limpiar input
}
});
inputuser1.addEventListener('keypress', (e) => {
    if(e.key  === 'Enter'){
        buttonuser1.click();
}
});
inputuser2.addEventListener('keypress', (e) => {
    if(e.key  === 'Enter'){
        buttonuser2.click();
}
});


