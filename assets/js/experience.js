AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [

  {
    title: "Mechanical Design Engineer",
    cardImage: "assets/images/experience-page/EVOURA.png",
    place: "EVOURA TECHNOLOGIES PRIVATE LIMITED ",
    time: "November, 2020 - Present)",
    desp: "<li>Designing the product box</li> <li>Product Design.</li>",
  },
  {
    title: "Head of Internet of Things Lab",
    cardImage: "assets/images/experience-page/EDC 1.png",
    place: "EDC NSSCE",
    time: "December, 2020 - Jan, 2021)",
    desp: "<li>College Internet of Things Lab in charge</li> <li>Worked as 3D printing machines</li>",
  },
  {
    title: "Mechanical Design Engineer Intern",
    cardImage: "assets/images/experience-page/Sky.png",
    place: "Skyy Rider Institutions",
    time: "December, 2020 - Jan, 2021)",
    desp: "<li>worked in social community projects, Recruting and as a interviewer.</li> <li>Managed lots of intern, Also guided them.</li>",
  },
  {
    title: "Team Lead Intern",
    cardImage: "assets/images/experience-page/YOLO1.jpeg",
    place: "YOUTH ONLINE LEARNING ORGANISATION",
    time: "(May, 2020 - Jan, 2021)",
    desp: "<li>worked in social community projects, Recruting and as a interviewer.</li> <li>Managed lots of intern, Also guided them.</li>",
  },
  {
    title: "Reasearch and Development Intern",
    cardImage: "assets/images/experience-page/Hound.png",
    place: "HOUND ELECTRIC PVT. LTD",
    time: "(April 2020- 15 days)",
    desp: "<li>Reasearched Autonomous Electric Vehicle</li><li>Static requirement their Possiblity in Roads</li><li>Costs and Marketing.</li>",
  },
  {
    title: "Robotics and Embedded system Intern",
    cardImage: "assets/images/experience-page/Infox.png",
    place: "INFOX TECHNOLOGIES, Kochi",
    time: "(July, 2019 - 15 Days)",
    desp:"<li>Worked on for Image Encryption and Image Forgery Detection.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Institution of Engineers (India)",
    cardImage: "assets/images/experience-page/ie.png",
    description:
      "Acted as Chairman, Student Convener, General Secretary & Student Representative",
  },
  {
    title: "Society of Automotive Engineers India",
    cardImage: "assets/images/experience-page/sae.png",
    description:
      "Aero NSS Team Captain of SAE ADC 2020",
  },
  {
    title: "iEDC NSSCE",
    cardImage: "assets/images/experience-page/edc.png",
    description:
      "Panel Member and charge of IOT lab",
  },
  {
    title: "Aeromodelling and Arial Robotics Club",
    cardImage: "assets/images/experience-page/aarc.jpg",
    description:
      "Co- founder of college club and Mentor",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" style="height: 600px;width:400px">

      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `
      <div class="column mentorshipCard">
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
