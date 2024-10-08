const questions_predio_core = [{
    'Segurança Perimetral': [{
        question: 'O prédio avaliado é técnico? (Descreva os demais andares no caso de ambiente ADM)',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Ambas',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 0,
    }, {
        question: 'Foi identificado a presença de cerca Elétrica, Concertina ou outros tipos de proteção, instalados sobre a área cercada do perímetro?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '2',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Os muros de alvenaria e/ou alambrados, que cercam o perímetro, têm a altura mínima de 3,50m em conjunto com a proteção instalada sobre a edificação (concertina, arame farpado e/ou outro tipo de proteção)?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Foi identificada avarias nos muros ou alambrados?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '4',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem','patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'O portão do estacionamento e o de pedestres é confeccionado em chapa galvanizada ou alambrado? (Descrever o tipo no campo “comentários”)',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '5',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'O portão do estacionamento e o de pedestres é dotado de fechamento eletrônico?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '6',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Foi identificada avarias no portão do estacionamento e/ou de pedestres?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '7',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem','patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Os portões possuem algum tipo de fechadura/cadeado eletrônico, instalado em proteção tipo boca de lobo? (Descreva o tipo de fechadura/cadeado)',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '8',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Caso a fechadura/cadeado seja de responsabilidade da operação Vivo, ao realizar teste junto a CMC, foi constatado o trancamento operante?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '9',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Foi identificada avarias no portão do estacionamento e/ou de pedestres?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '10',
        area: 'Segurança Perimetral',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel:['oem','patrimonial'],
        critical: ['Baixo', 'Médio', 'Alto'],
        peso: 4,
    }],
    'Segurança Externa': [{
        question: 'Há portaria externas, portões, cancelas, eclusas, garras de tigres e/ou sistemas similares de segurança complementando o conjunto de segurança perimetral? (Descreva o tipo de estrutura encontrada)',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Externa',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem'],
        critical: ['Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Há estacionamento privativo?',
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
        openPA: false,
        areaResposavel: [''],
        critical: ['Médio', 'Alto'],
        peso: 2,
    }, {
        question: 'O controle de estacionamento de veículos no local é dotado de dispositivos de segurança (Portaria com Sistema Automático, Cancela e/ou Monitoramento na entrada do Veículo por CFTV)?',
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
        openPA: false,
        areaResposavel: [''],
        critical: ['Médio', 'Alto'],
        peso: 2,
    }, {
        question: 'O sistema de iluminação é eficiente na área perimetral externa?',
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
        openPA: false,
        areaResposavel: ['oem','patrimonial'],
        critical: ['Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Foi identificado a presença de sensor de Presença (IVA/IVP) / Sensor de Perímetro ou outros tipos de dispositivos instalado(s), junto a proteção perimetral? (Descrever o tipo e quantidade no campo “comentários” quantidade necessária para implantação)',
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
        openPA: true,
        areaResposavel: [''],
        critical: ['Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Há câmera de Segurança na parte externa do prédio, focadas para os principais acessos? (Caso haja necessidade de implantação, fotografar cada ponto e descrever a quantidade no campo “comentários”)',
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
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'Ao executar teste com a CMC as câmeras estão operantes?',
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
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Médio', 'Alto'],
        peso: 4,
    }, {
        question: 'As janelas de ventilação ou iluminação são gradeadas?',
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
        openPA: true,
        areaResposavel: ['oem'],
        critical: ['Médio', 'Alto'],
        peso: 4,
    }],
    'Segurança Interna': [{
        question: 'Foi identificada avarias na porta de acesso ao prédio?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: ['oem','patrimonial'],
        openPA: true,
        areaResposavel: ['oem','patrimonial'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'A Portaria/Recepção principal de acesso possui serviço de VH? (Descrever o tipo de serviço, portaria/vigilância nos comentários)',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '2',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Alto'],
        peso: 1,
    }, {
        question: 'No caso de presença de VH, o profissional está ciente das normas e procedimentos de segurança para a proteção do prédio, ao qual foi designado (Acessos de visitantes, saída de material etc.)?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Alto'],
        peso: 2,
    }, {
        question: 'No caso de presença de portaria/vigilância, ele tem algum alarme sistêmico de alerta em caso de sinistro (Ex: Botão de pânico conectado a CMC)?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '4',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Alto'],
        peso: 2,
    }, {
        question: 'Quanto as áreas comuns, as chaves são controladas pelo VH?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '5',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Alto'],
        peso: 0,
    }, {
        question: 'Ao acessar o prédio, independente da presença de VH, há algum controle de acesso sistêmico (Catracas, Leitores Biométricos etc.)?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '6',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: [],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'As portas de acesso as áreas restritas, são dotadas de CA`s? (Caso haja necessidade de implantação, fotografar cada ambiente, informando a área, localização no prédio e tipo de porta (Folha simples ou dupla), no campo “comentários” com quantidade necessária para implantação).',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '7',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: ['patrimonial'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'Foi identificado avarias nas portas internas de acesso a áreas restritas ou comuns?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '8',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem','patrimonial'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'Os CA`s estão sendo reportados a CMC?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '9',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'Há câmera de Segurança nos acessos aos ambientes críticos? (Caso haja necessidade de implantação, fotografar cada ambiente, localização no prédio e quantidade no campo “comentários”).',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '10',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'Há necessidade câmeras focadas nos racks de maior valor agregado, dentro dos ambientes críticos? – Considerar que utilizaremos câmeras ocultas (pinhole). (Caso haja necessidade de implantação, fotografar cada ponto, informando a localização no prédio e quantidade no campo “comentários”).',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '11',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Alto'],
        peso: 1,
    }, {
        question: 'O sistema de CFTV, ao executar testes com a CMC, foi identificado que todas as câmeras estão operantes?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '12',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['patrimonial'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'Os equipamentos das salas de transmissão e comutação tem algum tipo de proteção?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '13',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem'],
        critical: ['Alto'],
        peso: 4,
    }, {
        question: 'Foi identificado a presença de sensor de porta nos gabinetes e bastidores?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '14',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: ['oem'],
        critical: ['Alto'],
        peso: 0,
    }, {
        question: 'Caso haja sensor de porta, foi identificado sinais de vandalismo?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '15',
        area: 'Segurança Interna',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: false,
        areaResposavel: ['oem'],
        critical: ['Alto'],
        peso: 0,
    }],
    'Segurança Estrutural': [{
        question: 'Foi identificada luminárias soltas, forros de teto, ou outra instalação superior que possa trazer risco ao patrimônio ou aos usuários do prédio?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '1',
        area: 'Segurança Estrutural',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem','patrimonial'],
        critical: ['Alto'],
        peso: 0,
    }, {
        question: 'Foram identificadas nas paredes e teto, trincas, rachaduras, infiltrações, etc?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '2',
        area: 'Segurança Estrutural',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem','patrimonial'],
        critical: ['Alto'],
        peso: 0,
    }, {
        question: 'No caso de piso elevado, foram identificados, pisos soltos/quebrados, que apresentam risco em geral?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '3',
        area: 'Segurança Estrutural',
        resp: '',
        respTextArea: '',
        respGabarito: 'Não',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem','patrimonial'],
        critical: ['Alto'],
        peso: 0,
    }, {
        question: 'Foi identificado no banco de baterias algum vazamento?',
        answers: ["Sim", "Não"],
        textarea: true,
        selectOptions: true,
        inputImages: true,
        questionId: '4',
        area: 'Segurança Estrutural',
        resp: '',
        respTextArea: '',
        respGabarito: 'Sim',
        images: [],
        plano_acao: [],
        openPA: true,
        areaResposavel: ['oem'],
        critical: ['Alto'],
        peso: 0,
    }]
}]

export default questions_predio_core;