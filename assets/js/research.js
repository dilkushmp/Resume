/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Offshore wind energy and suction bucket system",
        authors : "S Sharma, S Ghose, S Datta, C Malathy, M Gayathri, M Prabhakaran",
        conferences : "tional Conference on Emerging Trends in Mechanical Engineering, 75-79",
        researchYr : 2019,
        citebox : "popup1",
        image : "assets/images/research-page/IEI.jpeg",
        citation: {
            vancouver: "S Sharma, S Ghose, S Datta, C Malathy, M Gayathri, M Prabhakaran. To understant the advantage Suction bucket system windmill."
        },
        abstract: "The future depends on sustainable work we do today. The prime aim is to meet sustainable energy resources without depleting the current natural resources. The demand for electrical energy experiences a significant increase due to the rapid developments of the economy and urbanization all around the world. Among all renewable energy resources, wind energy is believed to be one of the promising types, which is being utilized extensively. Thus wind energy has attracted a huge amount of interest and experienced rapid developments. Offshore wind energy shows better resource potential compared to other alternatives",
        absbox: "absPopup1"
    },

    {
        title : "SMART NETWORK BUSINESS MODELS USING ELECTRIC AUTONOMOUS VEHICLES (EAVs)",
        authors : "Mohammed Dilkush M P, Dr. Sudheep U",
        conferences : "Final year seminar",
        researchYr : 2020,
        citebox : "popup2",
        image : "assets/images/research-page/Seminar.jpeg",
        citation: {
            vancouver: "Mohammed Dilkush M P, Dr. Sudheep U. Analysis the benefits of Autonomous electric Freight transport. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "The full adoption of Autonomous electric autonomous vehicles (EAVs) will revolutionise global road freight transport. Non-ownership of road freight transport will emerge and an evolution from product to service. The traditional model of business manufactures sells the truck to operators will eventually disappear. The non-ownership business model emerges and also expected that a new network operator will emerge to run this service. For the automation of electric vehicle, the software will become the core other than truck technology.",
        absbox: "absPopup2"
    },


    }
];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left">
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a>
                    <div> ${authors} </div> <div class="rConferences"> ${conferences}
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);
