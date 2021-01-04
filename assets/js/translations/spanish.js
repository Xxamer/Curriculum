function changeToEs() {
    $('#fullName').html('Christian Granado');
    $('#JobTitle').html('Desarrollador Fullstack');
    $('#location').html('<a><i class="far fa-compass fa-fw mr-2"data-fa-transform="grow-3"></i>Las Palmas de Gran Canaria, España</a>');
    $('#about_me').html('Sobre mi');
    $('#about_me_text').html('Soy un desarrollador fullstack con preferencia por el desarrollo web que se puede adaptar a los entornos de trabajo tanto en equipo como en solitario y con muchas ganas de aprender.');
    $('#useful_information').html('Información extra');
    $('#useful_information_list').html(' <ul> <li>Disponible para viajar puntualmente o mudarme permanentemente por trabajo.</li>' +
        '<li>Inscrito en el programa de garantía juvenil.</li>' +
        '<li>Inscrito en el programa Dual Inserta de la FULP (University Foundation of Las Palmas).</li> </ul>');
    //Job Timeline
    //General use
    //If you gonna use the same html to various tags, use classes instead of ID
    $('#work_experience').html('Experiencia laboral');
    $('.job_title_fullstack').html('Desarrollador Fullstack');
    $('.job_title_itsupport').html('Soporte IT y mantenimiento de redes');
    $('.technologies_used').html('Tecnologías usadas:');
    //Specific use
    $('#elcreal_list').html(' <li> Creación de entornos de desarrollo y producción con Hyper-V Server en servidores locales.</li>' +
        '<li>Creación de herramienta de gestión empresarial con un equipo de desarrolladores (PHP)</li>' +
        '<li>Desarrollo y diseño de las páginas web de la empresa. (PHP y Boostrap).</li>');
    $('#list_resume_sirokko').html(
        '<li>Desarrollar ficheros con Docker que permitian encapsular una aplicación en Rails junto a una base de datos y un servidor Nginx</li>' +
        '<li>Migración de una aplicación de Angular 6 a Angular 7</li>' +
        '<li>Aprendizaje de Ruby on Rails</li>' +
        '<li>Desarrollar de manera libre una aplicación en Angular para el frontend y usar Wordpress instalado en una máquina virtual como Backend.</li>' +
        '<p> Todo realizado en el periodo de prácticas del grado superior de Desarrollo de Aplicaciones Multiplataforma. </p>');
    $('#list_resume_aalborg').html(
        '<li>Mantenimiento de Hardware Hardware maintenance</li>' +
        '<li>Administración de redes locales Local network management</li>' +
        '<li>Presupuestos de instalación para empresas</li>' +
        '<li>Curso de arduino con soldadura y programación básica del Arduino</li>' +
        '<p>Todo realizado en el periodo de prácticas del grado medio de Sistemas Microinformáticos y Redes en modalidad Erasmus donde tuve la oportunidad de ir a Dinamarca.</p>'
    );
    //Right side
    $("#others").html("Otros");
    $("#personal_skills_title").html("Habilidades personales");
    $("#personal_skills_list").html('<li class="mb-1">Trabajo en equipo </li>' +
        '<li class="mb-1">Comunicativo </li>' +
        '<li class="mb-1">Proactivo </li>' +
        '<li class="mb-1">Facilidad para adaptarse a nuevos ambientes</li>');
    $('#education_title').html('Educación');
    $('#education_development').html('Desarrollo de aplicaciones multiplataforma');
    $('#education_microsystem').html('Sistemas Microinformáticos y Redes');
    $('#language_title').html('Idiomas');
    $('#language_list').html(
        '<li><span class="resume-lang-name font-weight-bold">Español </span>' +
        '<small class="text-muted font-weight-normal">(Nativo)</small></li>' +
        '<li class="mb-2"><span class="resume-lang-name font-weight-bold">English </span>' +
        '<small class="text-muted font-weight-normal">(Intermedio)</small></li>');
    $('#hobbies-title').html("Aficiones");
    $('#hobbies-list').html(
        '<li class="mb-1">Videojuegos</li>' +
        '<li class="mb-1">Tecnología</li>' +
        '<li class="mb-1">Cocinar</li>' +
        '<li class="mb-1">Leer</li>');
}