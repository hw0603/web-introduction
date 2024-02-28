var arr = new Array();

function calc() {
    addCheckbox();
    var name = document.getElementById("visitorName").value;
    alert(name + "님, 저와 " + countCheckBox() + "개의 취향이 같으시네요!");
}

function addCheckbox() {
    arr.push(document.getElementById("checkbox1").checked);
    arr.push(document.getElementById("checkbox2").checked);
    arr.push(document.getElementById("checkbox3").checked);
    arr.push(document.getElementById("checkbox4").checked);
    arr.push(document.getElementById("checkbox5").checked);
}

function countCheckBox() {
    var num = 0;
    arr.forEach(isChecked => {
        if (isChecked) {
            num++;
        }
    });

    return num;
}

function clear() {
    console.log("clear");
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
    document.getElementById("checkbox5").checked = false;
    document.getElementById("visitorName").value = "";
}