import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

const translations: Record<string, string> = {
  'Inicio': 'Home',
  'Proyectos': 'Selected work',
  'Trayectoria': 'My journey',
  'Habilidades': 'Tech abilities',
  'Más allá del código': 'Beyond code',
  'Contacto': 'Contact me',
  'MENÚ / 00': 'MENU / 00',
  'DESARROLLADOR FULL STACK': 'FULL STACK DEVELOPER',
  'VALENCIA, ES': 'VALENCIA, ES',
  'Cambiar a inglés': 'Switch to Spanish',
  'TRABAJO SELECCIONADO': 'SELECTED WORK',
  'MI TRAYECTORIA': 'MY JOURNEY',
  'MÁS ALLÁ DEL CÓDIGO': 'BEYOND CODE',
  'HABLEMOS': 'LET’S TALK',
  'CAPACIDADES': 'CAPABILITIES',
  'Explorar trayectoria': 'Explore my journey',
  'Hablemos': 'Let’s talk',
  'Desplázate para descubrir': 'SCROLL TO DISCOVER',
  'PERSONAL / 2025—AHORA': 'PERSONAL PORTFOLIO / 2025—NOW',
  'Ver proyecto': 'View project',
  'INTERFAZ EMPRESARIAL': 'BUSINESS INTERFACE',
  'EXPERIMENTOS Y APRENDIZAJE': 'EXPERIMENTS AND LEARNING',
  'Ver GitHub': 'View GitHub',
  'MIS INICIOS EN LA INFORMÁTICA': 'MY BEGINNINGS IN COMPUTING',
  'Primera etapa': 'First stage',
  'Segunda etapa': 'Second stage',
  'Formación': 'Training',
  'Lectura': 'Reading',
  'Naturaleza y mapas': 'Nature and maps',
  'Intereses financieros': 'Financial interests'
  , 'Construyo experiencias digitales útiles, desde la interfaz hasta el backend.': 'I build useful digital experiences, from interface to backend.'
  , 'Diseño y desarrollo': 'Design and development'
  , 'de productos web.': 'of web products.'
  , 'Una selección de trabajo profesional y proyectos propios construidos para aprender, resolver problemas y mejorar con cada iteración.': 'A selection of professional work and personal projects built to learn, solve problems and improve with every iteration.'
  , 'Una evolución marcada por la práctica, el aprendizaje continuo y las ganas de entender cómo funcionan las cosas.': 'An evolution shaped by practice, continuous learning and the desire to understand how things work.'
  , 'Lo que puedo': 'What I can'
  , 'construir.': 'build.'
  , 'Una combinación de desarrollo, pensamiento estructurado y trabajo colaborativo.': 'A combination of development, structured thinking and collaborative work.'
  , '¿Tienes algo': 'Do you have something'
  , 'en mente?': 'in mind?'
  , 'Estoy abierto a nuevas oportunidades, colaboraciones o simplemente una conversación sobre tecnología e ideas.': 'I am open to new opportunities, collaborations or simply a conversation about technology and ideas.'
  , 'Enviar un email': 'Send an email'
  , 'Mi LinkedIn': 'My LinkedIn'
  , 'PORTFOLIO PERSONAL / 2025—AHORA': 'PERSONAL PORTFOLIO / 2025—NOW'
  , 'TRABAJO ABIERTO / GITHUB': 'OPEN WORK / GITHUB'
  , 'Interfaz adaptable': 'Responsive UI'
  , 'Trabajo en equipo': 'Teamwork'
  , 'Aprendizaje': 'Learning'
  , 'Portfolio Carlos Gutiérrez': 'Carlos Gutiérrez Portfolio'
  , 'Una presentación personal centrada en trayectoria, aprendizaje y desarrollo web, con una interfaz en evolución constante.': 'A personal presentation focused on my journey, learning and web development, with an interface that keeps evolving.'
  , 'Business interface': 'Business interface'
  , 'Desarrollo frontend para un proyecto empresarial, colaborando con los requisitos reales de un producto y sus usuarios.': 'Frontend development for a business project, working with the real requirements of a product and its users.'
  , 'Experimentos y aprendizaje': 'Experiments and learning'
  , 'Proyectos propios para probar herramientas, consolidar conceptos y convertir la curiosidad técnica en soluciones concretas.': 'Personal projects to test tools, consolidate concepts and turn technical curiosity into concrete solutions.'
  , 'Mis inicios en la informática': 'My beginnings in computing'
  , 'Mi primer ordenador con Ubuntu despertó mi curiosidad. Explorar el terminal de Linux y los comandos básicos fue el comienzo de mi camino en la tecnología.': 'My first computer with Ubuntu sparked my curiosity. Exploring the Linux terminal and basic commands was the beginning of my journey into technology.'
  , 'Durante mi formación en desarrollo de aplicaciones multiplataforma, hice prácticas en Capgemini y trabajé en un equipo profesional en un proyecto para Carrefour, aplicando frontend, backend y Scrum.': 'During my multiplatform app development training, I completed an internship at Capgemini and worked in a professional team on a Carrefour project, applying frontend, backend and Scrum.'
  , 'Sigo creciendo mediante trabajos freelance de frontend, proyectos personales y formación técnica continua.': 'I keep growing through freelance frontend work, personal projects and continuous technical training.'
  , 'Desarrollo full stack': 'Full-stack development'
  , 'Bases de datos': 'Databases'
  , 'DevOps y automatización': 'DevOps & automation'
  , 'Trabajo ágil': 'Agile teamwork'
  , 'Entrenamiento': 'Training'
  , 'Me interesa entender la economía y la inversión, investigar y aplicar estos conocimientos de forma disciplinada.': 'I am interested in understanding economics and investing, researching and applying this knowledge in a disciplined way.'
  , 'Leer me ayuda a ganar perspectiva, aprender cómo funcionan las cosas y conectar ideas con mis proyectos.': 'Reading helps me gain perspective, learn how things work and connect ideas with my projects.'
  , 'Entiendo la mejora como un trabajo físico y mental constante, con objetivos y dedicación.': 'I see improvement as constant physical and mental work, with goals and dedication.'
  , 'La naturaleza, los mapas y los sistemas GIS son una fuente personal de ideas y exploración.': 'Nature, maps and GIS systems are a personal source of ideas and exploration.'
  , 'Construcción de aplicaciones web de extremo a extremo con Angular, Node.js y Python.': 'End-to-end web application development with Angular, Node.js and Python.'
  , 'Trabajo con bases de datos SQL y NoSQL, especialmente PostgreSQL y MongoDB.': 'Working with SQL and NoSQL databases, especially PostgreSQL and MongoDB.'
  , 'Automatización de entregas con CI/CD, GitHub Actions, Docker y Kubernetes.': 'Automating delivery with CI/CD, GitHub Actions, Docker and Kubernetes.'
  , 'Colaboración en equipos y organización del trabajo con metodologías ágiles como Scrum.': 'Team collaboration and work organization using agile methodologies such as Scrum.'
  , 'Proyectos que': 'Projects that'
  , 'siguen creciendo.': 'keep growing.'
  , 'De la curiosidad': 'From curiosity'
  , 'a construir.': 'to building.'
  , 'La persona': 'The person'
  , ' detrás del código.': ' behind the code.'
  , 'La curiosidad no termina cuando cierro el editor.': 'Curiosity does not end when I close the editor.'
};

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform {
  private language: 'es' | 'en' = 'es';

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((language) => {
      this.language = language;
    });
  }

  transform(value: string): string {
    return this.language === 'es' ? value : translations[value] ?? value;
  }
}
