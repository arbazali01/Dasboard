function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let selectrow = null;
function onformSubmit(){

    var formData1=readFormData();
    if(selectrow==null)
    {
        insertNewRecord(formData1);
    }
    else
    {
        updateRecord(formData1);
    }
    resetForm();
    modal.style.display="none";

}

function readFormData(){

    var formData={};
    formData['fullname'] = document.getElementById('project').value;
    formData['date'] = document.getElementById('date').value;
    formData['status'] = document.getElementById('status').value;
    formData['teammembers'] = document.getElementById('team').value;
    formData['progess'] = document.getElementById('progress').value;

    return formData;
}
function insertNewRecord(data){
  

}
