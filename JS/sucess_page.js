function get_information(){
    var dados_arquivados = JSON.parse(sessionStorage.getItem('chave'))
    const paragrafh = document.getElementsByTagName('p')[0]
    paragrafh.innerHTML = `A confirmation email has been sent to ${dados_arquivados}. 
    Please open it and click the button inside to confirm your subscription.`
    console.log(dados_arquivados)
}