function StoredDrugStores(flag) {


    if (!localStorage.getItem('DrugStores')) {
        (flag == true || confirm('Deseja utilizar os dados de farmácias já cadastrados?')) ?
            localStorage.setItem('DrugStores',
                JSON.stringify([{ "Razão Social": "Legitimas Ideias Licenciadora Ltda", "CNPJ": "13545427000117", "Nome Fantasia": "Drogaria Legítima", "E-mail": "comercial@drogariaslegitima.com.br", "Telefone": "22816780", "Celular": "000000000", "CEP": "20780190", "Logradouro": "Rua Capitão Resende", "Número": "403", "Bairro": "Cachambi", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "Complemento", "Latitude": "-22.89612", "Longitude": "-43.27288" }, { "Razão Social": "Raia Drogasil SA", "CNPJ": "61585865024093", "Nome Fantasia": "Droga Raia", "E-mail": "rac@drogaraia.com.br", "Telefone": "", "Celular": "000000000", "CEP": "20775090", "Logradouro": "Rua Aristides Caire", "Número": "299", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "", "Latitude": "-22.89533", "Longitude": "-43.27418" }, { "Razão Social": "Drogaria Nova da Piedade LTDA", "CNPJ": "30673654000147", "Nome Fantasia": "Drogarias Mais Oferta", "E-mail": "novapiedade@novapiedade.com", "Telefone": "", "Celular": "987601031", "CEP": "20775090", "Logradouro": "Rua Aristides Caire", "Número": "102", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "", "Latitude": "-22.89855", "Longitude": "-43.27746" }, { "Razão Social": "Empreendimentos Pague Menos S/A", "CNPJ": "06626253000151", "Nome Fantasia": "Farmácia Pague Menos", "E-mail": "sac@pmenos.com.br", "Telefone": "", "Celular": "984815204", "CEP": "20720011", "Logradouro": "Rua Dias da Cruz", "Número": "491", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "de 475 ao fim - lado ímpar", "Latitude": "-22.90509", "Longitude": "-43.28926" }, { "Razão Social": "Empreendimentos Pague Menos S/A", "CNPJ": "06626253000151", "Nome Fantasia": "Farmácia Pague Menos", "E-mail": "sac@pmenos.com.br", "Telefone": "", "Celular": "000000000", "CEP": "20720010", "Logradouro": "Rua Dias da Cruz", "Número": "47", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "", "Latitude": "-22.90209", "Longitude": "-43.27897" }])
            ) :
            localStorage
    }

}

export { StoredDrugStores }
