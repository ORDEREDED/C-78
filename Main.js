var names_array=[];
function submit(){
var name1=document.getElementById("name_1").value;
var name2=document.getElementById("name_2").value;
var name3=document.getElementById("name_3").value;
var name4=document.getElementById("name_4").value;
names_array.push(name1);
names_array.push(name2);
names_array.push(name3);
names_array.push(name4);
document.getElementById("names_are_weird").innerHTML=names_array;
document.getElementById("GIVE_MEH").style.display="none";
document.getElementById("MIX_MEH").style.display="inline-block";
}
function sorting(){
names_array.sort();
console.log(names_array);
document.getElementById("names_are_weird").innerHTML=names_array;
}