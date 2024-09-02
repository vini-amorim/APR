const questions_llpp = [{
    'Segurança Externa':[{
        question: 'Há residências abandonadas nos fundos ou nas laterais?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Os muros e afins, apresentam altura mínima de 3 mts, na área do perímetro entorno da loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '2',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Há Cerca Elétrica, Concertina ou afins sobre a área murada da Loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Há CFTV de monitoramento da área perimetral externa da Loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '4',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    }, {
        question: 'No caso de estacionamento privativo da Loja, há controle de acesso de veículos?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '5',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    }, {
        question: 'Há Sensor de Presença (IVA/IVP) / Sensor de Perímetro junto a proteção perimetral da Loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '6',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Há VH, portões, cancelas, e/ou qualquer sistema de segurança complementando a Segurança Perimetral da Loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '7',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'A Iluminação na área perimetral externa da Loja é eficiente?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '8',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'Há Porta externa e janelas com reforço de segurança contra arrombamentos ou acesso indevido?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '9',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'As grades, portas de acesso ao interior da loja e fechaduras estão em bom estado?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '10',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Existe mais de 01 acesso (porta fundos) ou acesso compartilhado que tragam riscos de intrusões, arrombamentos ou acesso indevido na loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '11',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Existem sensores de alarme de piso (Contato magnético potência) nas portas externas da loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '12',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'A porta de acesso ao interior da loja (porta de enrolar) possui portinhola de emergência? Se sim, as fechaduras são do tipo tetra?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '13',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'As portas internas (maciça - 6 mm) e as de aço pantográfica (abertura lateral) estão em bom estado?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '14',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'O vidro frontal da loja está em bom estado?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '15',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Há registro de ocorrências de assalto ou invasão no comercio local nos últimos 3 anos?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '16',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'Foi identificado registro de assalto ou latrocínio a transeuntes, nas imediações da loja, nos últimos 3 anos?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '17',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 0,
    }],
    'Segurança Corporativa Recursos Internos':[{
        question: 'Existe Sistema de CFTV em quantidade suficiente e com recursos adequados para monitoramento interno e externo da planta, com modelos como, por exemplo, PTZ, Dome 360, Night Shot ou afins devidamente instaladas, testadas e com angulação adequada e imagens nítidas?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Foi constatado que a Gravação das Imagens são de boa qualidade, com armazenamento local e backup externo (Nuvem e afins), a serem preservados por prazo não inferior a 90 dias?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }, {
        question: 'Existe Sistema de Alarme de intrusão combinado com Sensor de Presença - IVA / IVP - combinado com Sensor magnético de Portas, Sirene e CFTV para controle e monitoramento de acesso a ambientes internos e externos da Loja para 24 horas/dia?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'O sistema de CFTV está operante e possui nobreak?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '4',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'Todas as câmeras possuem infravermelho (IR)?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '5',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'O sistema de alarme de intrusão está 100% operante e possui nobreak?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '6',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'Senha de arme e desarme do sistema de alarme é de uso individual e é trocada periodicamente? (Informe o período no campo comentários)',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '7',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'O Gerente possui senha de anti-coação no sistema de alarme de intrusão, para comunicado com a Central de Monitoramento, caso exista alarme de intrusão?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '8',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: ['oem'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'As vitrines e expositores fechados com vidro, estão em bom estado?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '9',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'As vitrines e expositores fechados com vidro, possuem sensores de alarme?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '10',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Existem botões de pânico na loja e estão funcionando? Se sim, quantos?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '12',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    },  {
        question: 'Existe sistema de alarme com proteção em todos os aparelhos expostos nos balcões de degustação e está operante?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '13',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Existem mercadorias expostas no atendimento sem proteção de alarme?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '14',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'A Rotatividade de funcionários terceiros (empresa de limpeza e vigilância) é Baixo na loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '15',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    },  {
        question: 'Existe controle de acesso eletrônico e alarme de Porta Emergencial para áreas restritas/críticas da Loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '16',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'No procedimento denominado "Dedo de Coação", o gerente e o analista têm sua biometria cadastrada?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '17',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'Procedimento de senha e contrassenha é de conhecimento do gerente da loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '18',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'O gerente da loja possui o contato com a Central de Monitoramento e Controle (CMC)?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '19',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'O Estoque está devidamente sinalizado e monitorado por meio de CFTV com Processos e Procedimentos Seguros desenvolvidos formalmente para Carga/Descarga de produtos/materiais Vivo?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '20',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'A porta do estoque é blindada?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '21',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'O Estoque é construído em alvenaria e laje de concreto com reforço de malha de aço?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '22',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'O buzzer do estoque está operante?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '23',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'Materiais de escritório e outros materiais que eventualmente são armazenados no estoque de mercadorias são organizados em prateleiras separadas das mercadorias?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '24',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    },  {
        question: 'No caso de Estoque em piso superior, existem aparelhos mantidos em armários com chaves em poder do gerente na área de vendas?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '25',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Ambas',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Os aparelhos são armazenados em prateleiras de madeira?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '26',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Existem mercadorias armazenadas fora do estoque? Se sim, em qual local?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '27',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Existe cofre eletrônico para armazenagem de aparelhos de gama alta? Se sim, está em bom estado?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '28',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Existe cofre para armazenamento de dinheiro (Boca de lobo) e o mesmo se encontra no estoque? Está em funcionamento?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '29',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    },  {
        question: 'Quanto ao ambiente da loja, foi identificado rachaduras ou infiltrações nas paredes ou teto?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '30',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    },  {
        question: 'No QDG (Quadro de Distribuição Geral) da loja, está identificado o disjuntor que energiza o sistema de segurança?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '31',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    },  {
        question: 'A automação do sistema de Iluminação está operante?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '32',
        area: 'Segurança Corporativa Recursos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 3,
    }],
    'Segurança Corporativa Processos ou Procedimentos Internos':[{
        question: 'Existe Relatório com Índice de Ocorrências de Incidentes de Segurança do Local?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'Existe Cadastramento de todos os eventos de sinistros com registro dos nomes e RG de todos os colaboradores internos e externos envolvidos no processo, com guarda dos dados por pelo menos 03 (três) anos?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '2',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'Existe Treinamento Operacional de Segurança para equipe local?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'Procedimento de Uso de crachá obrigatório em toda a Loja é efetivo?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '4',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'O lote recebido é lançado no sistema SAP e os itens divergentes são movimentados para depósito RPAR?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '5',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    }, {
        question: 'A devolução dos itens divergentes, as divergências são relacionadas pelo Gerente da Loja no sistema SAP, os números da Nota Fiscal de Transferência e do romaneio são mencionados de acordo com o processo?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '6',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'No caso de Estoque em piso superior, existem aparelhos mantidos em armários com chaves em poder do gerente na área de vendas?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '7',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 2,
    }, {
        question: 'A planilha/livro de Registro de Ocorrências da Loja esta sendo utilizado?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '8',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }, {
        question: 'Existem IT`s (Instruções de Trabalho) documentadas para as diversas funções da loja?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '9',
        area: 'Segurança Corporativa Processos ou Procedimentos Internos',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 1,
    }]
}]

export default questions_llpp;