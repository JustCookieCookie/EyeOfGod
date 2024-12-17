function check() {
    let inputUserData = document.getElementById("selectData").value;
    switch (inputUserData) {
        case "phoneNumber":
            dataPhoneNumber();
            break;
        case "email":
            dataEmail();
            break;
        case "ip-address":
            ipAddress();
            break;
        case "metadata":
            metadata();
            break;
        default:
            defaultFunction();
            break;
    }
    
}

function dataPhoneNumber() {
    let phoneNumber = document.getElementById("inputUserData").value.trim();

    if (phoneNumber != "") {
        const options = {method: 'GET'};

        fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=your_api_key&phone=${phoneNumber}`, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('output').textContent = JSON.stringify(response, null, 2);
            deleteAll();
        })
        .catch(err => console.error(err));
    }
}

function dataEmail() {
    let email = document.getElementById("inputUserData").value.trim();

    if (email != "") {
        const options = {method: 'GET'};

        fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=your_api_key&email=${email}`, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('output').textContent = JSON.stringify(response, null, 2);
            deleteAll();
        })
        .catch(err => console.error(err));
    }
}

function ipAddress() {
    let ipAddress = document.getElementById("inputUserData").value.trim();

    if (ipAddress != "") {
        const options = {method: 'GET'};

        fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=your_api_key&ip_address=${ipAddress}`, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('output').textContent = JSON.stringify(response, null, 2);
            deleteAll();
        })
        .catch(err => console.error(err));
    }
}

async function metadata() {
    let metadata = document.getElementById("inputUserPhoto");
    let file = metadata.files[0];

    if (file != null) {
        try {
            const arrayBuffer = await file.arrayBuffer();
            const tags = ExifReader.load(arrayBuffer);

            if (Object.keys(tags).length === 0) {
                document.getElementById('output').textContent = "EXIF-данные отсутствуют.";
                deleteAll();
            } else {
                document.getElementById('output').textContent = JSON.stringify(tags, null, 2);
                deleteAll();
            }
        } catch (error) {
            console.error("Ошибка при извлечении метаданных:", error);
        }
    }
}

function deleteAll() {
    const elements = document.getElementsByClassName("noSee");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}


function defaultFunction() {
    console.error("Error");
}