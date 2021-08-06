const inputForm = document.querySelector('form');
const input = document.querySelector('input');
const stateGrid = document.querySelector('.stateGrid');
const stateInfo = document.querySelector('.stateInfo');
const flagImg = document.querySelector('img');

const getUserCountry = async () => {

  const {country} = await getCurrLoc();
  const countryData = await getCountryInfo(null , country);

  return countryData;

}

const getSearchedCountry = async (name) => {

  const countryData = await getCountryInfo(name,null);
  return countryData;
}




const updateUI = (countryObj) => {

  if(countryObj){
    const {name,nativeName,languages,region,currencies,population,topLevelDomain,flag} = countryObj;
  
      const HTMLTemplate = `<div class="shadow-lg p-2 name">${name} <strong>${nativeName === name ? "" : nativeName}</strong></div>
                          <div class="shadow-lg p-2 d-flex">
                              <span class="material-icons material-icons-outlined mx-2">people</span>
                              <span>${population.toLocaleString()}</span>
                          </div>
                          <div class="shadow-lg p-2 d-flex">
                              <span class="material-icons material-icons-outlined mx-2">public</span>
                              <span>${region}</span>
                          </div>
                          <div class="shadow-lg p-2 d-flex">
                            <span class="material-icons material-icons-outlined mx-2">record_voice_over</span>
                            <span>${languages[0].name} ${languages[1] ? languages[1].name : ""} </span>
                          </div>
                          <div class="shadow-lg p-2 d-flex">
                              <span class="material-icons material-icons-outlined mx-2">payments</span>
                              <span>${currencies[0].code} <strong>${currencies[0].symbol ? currencies[0].symbol : ""}</strong></span>
                          </div>
                          <div class="shadow-lg p-2 d-flex">
                              <span class="material-icons material-icons-outlined mx-2">language</span>
                              <span>${topLevelDomain}</span>
                          </div>`

    stateInfo.innerHTML = HTMLTemplate;
    flagImg.src = flag;
    stateGrid.classList.remove('d-none');
  }
}

inputForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  getSearchedCountry(input.value)
    .then(data => updateUI(data[0]))  

    e.target.reset();
})

window.addEventListener("load" , () => {
    getUserCountry()
      .then(data => updateUI(data))
})