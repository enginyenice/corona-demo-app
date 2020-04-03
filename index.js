let data;
const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");
async function getData() {
    let toplamHasta = 0;
    let toplamIyilesen = 0;
    let toplamOlen = 0;
    try {
        let date = new Date();
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://corona.cbddo.gov.tr/Home/GetTotalData2?_=" + date.getTime()).then(res => res);
        const res = await response.json()
        data = res.data;
        localStorage.setItem("globalData", JSON.stringify(data))
        localStorage.setItem("time", date.getTime());
        data.forEach(element => {
            toplamHasta += element.countryStats.confirmedCount;
            toplamIyilesen += element.countryStats.recovryCount;
            toplamOlen += element.countryStats.deathCount;
        });
        localStorage.setItem("toplamHasta", toplamHasta);
        localStorage.setItem("toplamIyilesen", toplamIyilesen);
        localStorage.setItem("toplamOlen", toplamOlen);
        app.innerHTML = defaultRes();
    } catch (error) {
        console.error(error);
    }
}

searchInput.addEventListener("change", search, false);
function search(e) {
    data = localStorage.getItem("globalData")
        let searchData = e.target.value;
        let FullData = JSON.parse(data);
        FullData.forEach(element => {
            let ulkeBilgileri = element.countryStats;
            let sehirBilgileri = element.cityStats
            if ((ulkeBilgileri.name).toLowerCase() == searchData.toLowerCase()) {
                app.innerHTML = responseFunc(ulkeBilgileri, sehirBilgileri);
            }
        });
        if ((e.target.value).toLowerCase() == "dünya") {
            app.innerHTML = defaultRes()
        }
}

function defaultRes() {
    if(localStorage.getItem("globalData"))
        loadText();
    return (`
    <div class="card mt-3">
            <div class="card-header">
                <h5 id="ulkeAdi" class="text-center">Dünya</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <span class="font-weight-light">Hasta Sayisi: </span>
                            <span id="hastaSayisi" class="font-weight-bold text-info">${(localStorage.getItem("toplamHasta")) ? localStorage.getItem("toplamHasta") : "Yükleniyor"}</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <span class="font-weight-light">İyileşen Sayisi: </span>
                            <span id="iyilesenSayisi" class="font-weight-bold text-success">${(localStorage.getItem("toplamIyilesen")) ? localStorage.getItem("toplamIyilesen") : "Yükleniyor"}</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <span class="font-weight-light">Ölen Sayisi: </span>
                            <span id="olenSayisi" class="font-weight-bold text-danger">${(localStorage.getItem("toplamOlen")) ? localStorage.getItem("toplamOlen") : "Yükleniyor"}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="card-footer">            
            </div>
        </div>`
    );
}
function responseFunc(ulkeBilgileri, sehirBilgileri) {
    loadText()
    app.innerHTML = "";
    let sehirler = "";
    if (sehirBilgileri.length > 0) {


        sehirler = `
    <table class="table table-hover">
    <thead>
    <tr>
        <th>Şehir Adi</th>
        <th>Hasta</th>
        <th>İyileşen</th>
        <th>Ölen </th>
    </tr>
    </thead>
    <tbody>
`;
        sehirBilgileri.forEach(element => {
            sehirler += `<tr class="font-weight-bold">
            <td class="text-primary">${element.name}</td>
            <td class="text-info">${element.confirmedCount}</td>
            <td class="text-success">${element.recovryCount}</td>
            <td class="text-danger">${element.deathCount}</td>
        
        </tr>`
        });
        sehirler += `   
        
    </tbody>
    </table>`
    } else {
        sehirler = `<h4 class="text-center">Şehir Bilgisi Yok</h4>`
    }
    return (`
    <div class="card mt-3">
            <div class="card-header">
                <h5 id="ulkeAdi"  class="text-center">${ulkeBilgileri.name}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <span class="font-weight-light">Hasta Sayisi: </span>
                            <span id="hastaSayisi" class="font-weight-bold text-info">${ulkeBilgileri.confirmedCount}</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <span class="font-weight-light">İyileşen Sayisi: </span>
                            <span id="iyilesenSayisi" class="font-weight-bold text-success">${ulkeBilgileri.recovryCount}</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <span class="font-weight-light">Ölen Sayisi: </span>
                            <span id="olenSayisi" class="font-weight-bold text-danger">${ulkeBilgileri.deathCount}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="card-footer table-responsive">
            ${sehirler}
           
            
            </div>
        </div>`
    );

}

function loadText() {
    let text = `
    <input type="text" id="loadText" name="countryName" placeholder="Aramak İstediğiniz Ülkeyi Yaziniz" class="form-control" list="countryName">
    <datalist id="countryName">
    <option value="Dünya">
    `
    let data = JSON.parse(localStorage.getItem("globalData"));
    data.forEach(element => {
        text += `<option value="${element.countryStats.name}">`
    });
    text += ` </datalist>`;
    searchInput.innerHTML = text;


    
      

}
let date = new Date();
let localDate = (localStorage.getItem("time")) ? localStorage.getItem("time") : 0;
if (!localStorage.getItem("globalData") || ((date.getTime() - localDate) / 1000) > 600) {
    getData();
    app.innerHTML = defaultRes();
}
else {
    data = localStorage.getItem("globalData")
    app.innerHTML = defaultRes();
}