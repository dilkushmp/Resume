AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "SOLIDWORKS 2017-21 :Become a Certified Associate Today-CSWA",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-319AH8EC/",
  },
  {
    title: "SOLIDWORKS: Become a Certified Professional Today (CSWP)",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-26799299-6e7d-4ab8-8f27-fc7cfda4bf32/",
  },
  {
    title: "SOLIDWORKS: Simulation for Finite Element Analysis",
    cardImage: "assets/images/education-page/linkedin.png",
    moocLink: "https://www.linkedin.com/learning/solidworks-simulation-for-finite-element-analysis/",
  },
  {
    title: "SOLIDWORKS: SimulationXpress",
    cardImage: "assets/images/education-page/linkedin.png",
    moocLink: "https://www.linkedin.com/learning/solidworks-simulationxpress/",
  },

];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/
const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "CSWE- Certified SOLIDWORKS Expert",
    image: "assets/images/education-page/Expert - Mechanical Design.png",
    description: "Earned April 22, 2021",
  },
  {
    title: "CSWP- Certified SOLIDWORKS Professional",
    image: "assets/images/education-page/Professional - Mechanical Design.png",
    description: "Earned November 21, 2020",
  },
  {
    title: "CSWA- Certified SOLIDWORKS Associate",
    image: "assets/images/education-page/Associate - Mechanical Design.png",
    description: "Earned December 06, 2020",
  },
  {
    title: "CSWAP- Mold Making",
    image: "assets/images/education-page/Professional - Mold Making.png",
    description: "Earned April 22, 2021",
  },
  {
    title: "CSWAP- Drawing Tools",
    image: "assets/images/education-page/Professional - Drawing Tools.png",
    description: "Earned November 21, 2020",
  },
  {
    title: "CSWAP- Sheet Metal",
    image: "assets/images/education-page/Professional - Sheet Metal.png",
    description: "Earned December 06, 2020",
  },
  {
    title: "CSWAP- Surfacing",
    image: "assets/images/education-page/Professional - Surfacing.png",
    description: "Earned April 22, 2021",
  },
  {
    title: "CSWAP- Weldments",
    image: "assets/images/education-page/Professional - Weldments.png",
    description: "Earned November 21, 2020",
  },
  {
    title: "CSWA- Additive Manufacturing",
    image: "assets/images/education-page/Associate - Additive Manufacturing.png",
    description: "Earned December 06, 2020",
  },
  {
    title: "CSWA- Sustainability",
    image: "assets/images/education-page/Associate - Sustainability.png",
    description: "Earned April 22, 2021",
  },
  {
    title: "3DEXPERIENCE 3DCreator",
    image: "assets/images/education-page/3DEXPERIENCE3DCreator.png",
    description: "Earned November 21, 2020",
  },
  {
    title: "3DEXPERIENCE Collaborative Business Innovator",
    image: "assets/images/education-page/3DEXPERIENCECollaborativeBusinessInnovator.png",
    description: "Earned December 06, 2020",
  },
];
const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "NSS College of Engineering",
    image: "./assets/images/education-page/nsscelogo.png",
    subheading: "Bachelors of Technology, Mechanical Engineering, (2017-2021)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "MIC Higher Secondary School",
    image: "./assets/images/education-page/mic.png",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "PPMHSS Kottukkara",
    image: "./assets/images/education-page/ppmhss.png",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
