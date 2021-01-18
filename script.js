function visibility(visible, invisible) {
        document.getElementById(visible).style.display = "block";
        document.getElementById(invisible).style.display = "none";
}
	
function insertEntry(tnameId, subjectId, clusterId) {
var tname = document.getElementById(tnameId);
var subject = document.getElementById(subjectId);
var cluster = document.getElementById(clusterId);
var table = document.getElementById("teachers");
var newRow = document.createElement("TR");
addData(newRow, tname.value);
addData(newRow, subject.value);
addData(newRow, cluster.value);
table.appendChild(newRow);
tname.value = "";
subject.value = "";
cluster.value = "select";
}
                                                  
												   
function insertData(sports_typeId, team_nameId) {
var sports_type = document.getElementById(sports_typeId);
var team_name = document.getElementById(team_nameId);
var table = document.getElementById('sports');
var newRow = document.createElement("TR");
addData(newRow, sports_type.value);
addData(newRow, team_name.value);
table.appendChild(newRow);
team_name.value = "";
sports_type.value = "select"
}

function addData(inputsNode, value) {
var td = document.createElement("TD");
td.textContent = value;
inputsNode.appendChild(td);
      }
	  