function changeToEn() {
    $('#fullName').html('Christian Granado');
    $('#JobTitle').html('Fullstack Developer');
    $('#location').html('<a><i class="far fa-compass fa-fw mr-2"data-fa-transform="grow-3"></i>Las Palmas de Gran Canaria, Spain</a>');
    //No need to translate email but just in case the id is "contact-email"
    $('#about_me').html('About me');
    $('#about_me_text').html('I am a fullstack developer with a preference for web development that can be adapted to work environments in team or alone with a desire to learn.');
    $('#useful_information').html('Useful information');
    $('#useful_information_list').html(' <ul> <li>Available to travel punctually or move around permanently for work.</li>  <li>Enrolled in the Youth Guarantee program.</li></ul>');
    //Job Timeline
    //General use
    //If you gonna use the same html to various tags, use classes instead of ID
    $('#work_experience').html('Work experience');
    $('.job_title_fullstack').html('Fullstack Developer');
    $('.job_title_itsupport').html('IT Support and Networking');
    $('.technologies_used').html('Technologies used:');
    //Specific use
    $('#sirokko_experience_2').html(' <li> Realization of multiple projects for external clients </li>');

    $('#elcreal_list').html(' <li>  Creation of development and production environments with Hyper-V Server on local servers.</li>' +
        '<li>Creation of a business management tool with a team of developers (PHP)</li>' +
        "<li>Development and design of the company's web pages. (PHP y Boostrap).</li > ");
    $('#list_resume_sirokko').html(
        '<li>Develop docker files that allow you to encapsulate a Rails application inside a Docker container with a database and Nginx server</li>' +
        '<li>Migration of an application from Angular 6 to Angular 7</li>' +
        '<li>Ruby on Rails learning</li>' +
        '<li>In a free way, develop an application in Angular and a virtual machine with a Wordpress used as a Backend.</li>' +
        '<p> Everything done during the training period of the Superior Degree in Multiplatform Applications Development. </p>'
    );
    $('#list_resume_aalborg').html(
        '<li>Hardware maintenance</li>' +
        '<li>Local network management</li>' +
        '<li>Installation budgets for companies</li>' +
        '<li>Arduino course with welding and basic Arduino programming</li>' +
        '<p>Everything done during the training period of intermediate degree of Microcomputer Systems and Networks where I had the opportunity to go to Denmark for a part of a Erasmus project</p>'
    );
    $("#others").html("Others");
    //Right side
    $("#personal_skills_title").html("Personal Skills");
    $("#personal_skills_list").html('<li class="mb-1">Teamwork </li>' +
        '<li class="mb-1">Communicative</li>' +
        '<li class="mb-1">Proactive</li>' +
        '<li class="mb-1">Facility to adapt to new environments</li>');
    $('#education_title').html('Education');
    $('#education_development').html('Development of multiplatform applications');
    $('#education_microsystem').html('Microcomputer Systems and Networks');
    $('#language_title').html('Languages');
    $('#language_list').html(
        '<li><span class="resume-lang-name font-weight-bold">Spanish</span>' +
        '<small class="text-muted font-weight-normal">(Native)</small></li>' +
        '<li class="mb-2"><span class="resume-lang-name font-weight-bold">English</span>' +
        '<small class="text-muted font-weight-normal">(Medium)</small></li>');
    $('#hobbies-title').html("Hobbies");
    $('#hobbies-list').html(
        '<li class="mb-1">Videogames</li>' +
        '<li class="mb-1">Technology</li>' +
        '<li class="mb-1">Cook</li>' +
        '<li class="mb-1">Read</li>');
}