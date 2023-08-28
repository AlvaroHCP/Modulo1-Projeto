function StoredDrugsList(flag) {

    if (!localStorage.getItem('DrugsList')) {
        (flag == true || confirm('Deseja utilizar os dados de medicamentos já cadastrados?')) ?
            localStorage.setItem('DrugsList',
                JSON.stringify([{ "Descrição do Medicamento": "O Analgésico Dorflex com 50 comprimidos é indicado para o alívio de dores decorrentes de contraturas musculares, inclusive dor de cabeça tensional. É um medicamento, analgésico e relaxante muscular, que alivia os sintomas em 30 minutos após a ingestão e seu efeito permanece por cerca de 8 horas.", "Tipo de Medicamento": "Medicamento Comum", "Nome do Medicamento": "Dorflex", "Laboratório": "Sanofi", "Dosagem": "500mg", "Preço Unitário": "24,67" }, { "Descrição do Medicamento": "Loratamed 10mg Cimed 12 Comprimidos é indicado ao alívio dos sintomas associados com a rinite alérgica, seja coceira nasal, coriza, espirros, ardor e coceira nos olhos. É também indicado para o alívio dos sinais e sintomas da urticária e de outras alergias da pele. Loratamed Gotas 10mg Cimed 20ml pertence à classe de medicamentos conhecidos como anti-histamínicos, que ajudam a reduzir os sintomas da alergia e previnem os efeitos da histamina. A ação ocorre de forma rápida, porém não deve ser usado por pacientes com reações alérgicas a qualquer componente da fórmula.", "Tipo de Medicamento": "Medicamento Comum", "Nome do Medicamento": "Loratamed", "Laboratório": "Cimed", "Dosagem": "10mg", "Preço Unitário": "8,89" }, { "Descrição do Medicamento": "O Alprazolam 100mg Genérico Medley é indicado no tratamento dos sintomas dos transtornos de ansiedade, tais como: tensão, medo, apreensão, intranquilidade, dificuldades de concentração, irritabilidade, insônia, dentre outros. Comprado com apresentação de receita médica. Contém 30 comprimidos.", "Tipo de Medicamento": "Medicamento Controlado", "Nome do Medicamento": "Alprazolam", "Laboratório": "Medley", "Dosagem": "1mg", "Preço Unitário": "11,44" }, { "Descrição do Medicamento": "Venvanse de 70mg Shire é um medicamento indicado para o tratamento de transtorno do déficit de atenção e hiperatividade (TDAH). Sua ação melhora a capacidade de atenção, diminuindo a hiperatividade física e mental. Embalagem com 28 cápsulas. Venda com retenção da receita.", "Tipo de Medicamento": "Medicamento Controlado", "Nome do Medicamento": "Venvance", "Laboratório": "Shire", "Dosagem": "70mg", "Preço Unitário": "441,72" }])
            ) :
            localStorage
    }
}

export { StoredDrugsList }