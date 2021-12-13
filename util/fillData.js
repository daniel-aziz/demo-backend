const AppData = require('../models/datas')

const gendersArray = [
    "Male",
    "Female"
]

const languagesArray = [
    "Hebrew",
    "English",
    "Spanish",
    "French",
    "Arabic",
    "Amharic",
    "Russian",
    "German",
]

const surgeriesArray = [
    "Appendectomy",
    "Breast biopsy",
    "Carotid endarterectomy",
    "Cataract surgery",
    "Cesarean section",
    "Cholecystectomy",
    "Coronary artery bypass",
    "Low back pain surgery",
    "Prostatectomy"
]

// fill data in DB if not exists 
function fillData() {
    const data = new AppData({
        genders: [...gendersArray],
        languages: [...languagesArray],
        surgeries: [...surgeriesArray],
    })
    AppData.exists({
        gendersArray,
        languagesArray,
        surgeriesArray,
    })
        .then((response) => {
            if (!response) {
                data.save()
                console.log('Saved demo Data to DB!')
            }
        })
        .catch((error) => {
            console.log("Error: " + error)
        })
}


fillData()