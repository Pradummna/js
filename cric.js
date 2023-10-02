
const imageInput = document.getElementById('imageInput');
const uploadedImage = document.getElementById('uploadedImage');

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        // Clear the image source if no file is selected
        uploadedImage.src = "";
    }
});

const button = document.getElementById('sub-btn');

button.addEventListener('click', () => {

    let name = document.getElementById('text').value;

    let mInput = document.getElementById('match').value;
    let mInteger = parseInt(mInput, 10);

    let iInput = document.getElementById('inn').value;
    let iInteger = parseInt(iInput, 10);

    let runInput = document.getElementById('runs').value;
    let runInteger = parseInt(runInput, 10);

    let bInput = document.getElementById('balls').value;
    let bInteger = parseInt(bInput, 10);

    let fInput = document.getElementById('fifty').value;
    let hInput = document.getElementById('hundred').value;
    let bestInput = document.getElementById('best').value;
    let sixInput = document.getElementById('six').value;
    let foInput = document.getElementById('fours').value;

    let noInput = document.getElementById('no').value;
    let noInteger = parseInt(noInput, 10);

    let momInput = document.getElementById('mom').value;


    // display code
    const displayPara = document.querySelectorAll('.data');
    const tableShow = document.querySelector('table');

    tableShow.style.display = 'block';

    displayPara[0].innerHTML = name;
    displayPara[1].innerHTML = mInteger;
    displayPara[2].innerHTML = iInteger;
    displayPara[3].innerHTML = runInteger;
    displayPara[4].innerHTML = bInteger;

    let sr = (runInteger / bInteger) * 100;
    displayPara[5].innerHTML = Math.round(sr);

    let subvalue = mInteger - noInteger;
    let avg = runInteger / subvalue;
    displayPara[6].innerHTML = Math.round(avg);

    displayPara[7].innerHTML = fInput;
    displayPara[8].innerHTML = hInput;
    displayPara[9].innerHTML = bestInput;
    displayPara[10].innerHTML = sixInput;
    displayPara[11].innerHTML = foInput;
    displayPara[12].innerHTML = noInteger;
    displayPara[13].innerHTML = momInput;

});