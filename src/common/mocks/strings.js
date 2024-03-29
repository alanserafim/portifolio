import { skills_en, skills_pt } from "./skills";
import { experiences_en, experiences_pt } from "./experiences";
import { projects_en, projects_pt } from "./projects";

export const pt = {
    navbar: {
        about: 'Sobre mim',
        experience: 'Experiência',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato',
        resume: 'Currículo'
    },
    title: 'Desenvolvedor FullStack',
    subtitle:
        <>
            <span>React -- React Native -- Angular -- Spring -- Node.js</span> <br />
            <span>Transformando ideias em soluções digitais completas.</span>
        </>,
    experience_title: 'experiência e educação',
    experiences: experiences_pt,
    journey_title: 'Minha jornada até agora',
    journey:
        <>
            <p>Apaixonado por tecnologia e inovação, no trabalho ou na vida pessoal, sempre fui a pessoa que <strong>desenvolvia soluções</strong> baseadas nas tecnologias e equipamentos que possuíamos.</p>
            <p>A graduação em <strong>Relações internacionais</strong> me ensinou como as relações internacionais moldaram o mundo da maneira que ele é hoje, além de expandir minha compreensão da importância da <strong>cooperação e integração</strong> entre pessoas e as organizações internacionais.</p>
            <p>Após alguns anos trabalhando no setor administrativo da <strong>Educação Pública</strong> Estadual e dado meu interesse pela tecnologia tomei a decisão de me tornar <strong>Desenvolvedor de Software</strong>.</p>
            <p>O que mais me motiva é a possibilidade de <strong>criar soluções</strong>, por meio da tecnologia, que tenham impacto real sobre a vida das pessoas.</p>
            <p>Atualmente, estou cursando <strong>Desenvolvimento de Software Multiplataforma na FATEC</strong>, um curso superior inovador com o objetivo de criar um profissional multidisciplinar na área do desenvolvimento de software.</p>
            <p>Já tive a oportunidade desenvolver diversos softwares por meio dos <strong>projetos interdisciplinares da FATEC</strong>, onde pude aplicar diferentes tecnologias <strong>front e backend</strong>.</p>
            <p>Um outro pilar importante da minha educação em <strong>desenvolvimento de software</strong> é a plataforma <strong>Alura</strong>. Na qual complemento meus estudos através de seus cursos e formações.</p>
        </>,
    skills_title: 'Habilidades',
    skills: skills_pt,
    projects_title: 'Projetos',
    know_more: 'Saiba mais',
    projects: projects_pt,
    filter_by: 'Filtrar por: ',
    techs: 'Tecnologias',
    relevant: 'Mais relevantes',
    all: 'Todos',
    select_all: 'Todas as tecnologias',
    no_options: 'Desculpa, nenhuma escolha restante.',
    no_results: 'Desculpa, nenhum projeto foi encontrado nas opções selecionadas :(',
    and: 'e',
    more_info: 'Mais informações',
    test: 'Testar',
    other_involved: 'Outras pessoas envolvidas no projeto:',
    contact_title: 'Fale comigo!',
    contact_subtitle: 'Se tiver alguma pergunta ou algo a me dizer, não hesite em falar comigo! Prometo responder assim que possível 💜',
    contact_success: 'Mensagem enviada com sucesso! Em breve te retorno 💜',
    contact_error: 'Eita, algo deu errado 😕. Por favor, me envie um email',
    name_label: 'Nome',
    name_placeholder: 'Qual seu nome?',
    email_placeholder: 'Qual seu principal email?',
    message_label: 'Sua mensagem',
    message_placeholder: 'O que você tem a dizer?',
    send: 'Enviar',
    resume: {
        contact_title: 'Contato',
        location: 'Zona Leste de São Paulo - SP',
        experience_title: 'Experiências',
        education_title: 'Formação',
        featured_project: 'Projeto Destacado',
        programming_languages: 'Linguagens de Programação',
        libs_frameworks: 'Libraries & Frameworks',
        tools_platf_others: 'Ferramentas, Plataformas & outras tecnologias',
        soft_skills: [
            'Determinação',
            'Proatividade',
            'Colaboração em grupo',
            'Aprendizado ativo',
            'Resolução de problemas',
            'Gestão do tempo'
        ],
        languages_title: 'Idiomas',
        languages: [
            {
                name: 'Inglês',
                level: 'Avançado'
            }
        ],
        download_portuguese: 'Download (português)',
        or: 'ou',
        download_english: 'Download (inglês)'
    }

};

export const en = {
    navbar: {
        about: 'About me',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        resume: 'Resumé'
    },
    title: "Frontend Developer",
    subtitle:
        <>
            <span>Passionate about creation and technology.</span> <br />
            <span>Wide experience developing <strong>acessible and responsive web and mobile applications.</strong></span>
        </>,
    experience_title: 'Work Experience and Education',
    experiences: experiences_en,
    journey_title: 'My Journey so far',
    journey:
        <>
            <p>I have always been very passionate about technology and innovation, and it all began when I took a basic computer course at the age of 10. There, I learned the fundamentals of <strong>Software, Hardware, and the programs in the Office Suite</strong>.</p>
            <p>However, my true immersion into the world of programming occurred when I pursued the technical course in <strong>Systems Development at ETEC de Guainazes</strong>. There I fell in love with frontend development and realized that this would be my chosen profession.</p>
            <p>Currently, I am pursuing a degree in <strong>Analysis and Systems Development at FIAP</strong>, considered the top technology college in Brazil.</p>
            <p>In addition, I have been working as a <strong>Jr. Web Developer at Agência Choveu for over a year</strong>, where I continue to learn and enhance my skills in the world of frontend development.</p>
        </>,
    skills_title: 'Skills',
    skills: skills_en,
    projects_title: 'Projects',
    know_more: 'Know more',
    projects: projects_en,
    filter_by: 'Filter by:',
    techs: 'Skills',
    relevant: 'Most relevant',
    all: 'All',
    select_all: 'All the skills',
    no_options: 'Sorry, no options left.',
    no_results: 'Sorry, no project was found in the selected options :(',
    and: 'and',
    more_info: 'More info',
    test: 'Test',
    other_involved: 'Other people involved in this project:',
    contact_title: 'Contact me',
    contact_subtitle: 'If you have any questions or something to say, feel free to reach out! I promise to get back at you as soon as possible 💜',
    contact_success: `Message sent succesfully! I'll get back at you soon 💜`,
    contact_error: 'Oops, something went wrong 😕. Please, send me an email',
    name_label: 'Name',
    name_placeholder: 'What is your name?',
    email_placeholder: 'What is your main email?',
    message_label: 'Your message',
    message_placeholder: 'What do you have to say?',
    send: 'Send',
    resume: {
        contact_title: 'Contact',
        location: 'São Paulo, SP - Brazil',
        experience_title: 'Experiences',
        education_title: 'Education',
        featured_project: 'Featured Project',
        programming_languages: 'Programming Languages',
        libs_frameworks: 'Libraries & Frameworks',
        tools_platf_others: 'Tools, Platforms & Others',
        soft_skills: [
            'Determination',
            'Proactivity',
            'Collaboration',
            'Active Learning',
            'Problem Solving',
            'Time Management'
        ],
        languages_title: 'Languages',
        languages: [
            {
                name: 'English',
                level: 'Advanced'
            }
        ],
        download_portuguese: 'Download (portuguese)',
        or: 'or',
        download_english: 'Download (english)'
    }
}