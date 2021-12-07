function validate(data){
    if (data == ""){
        alert("Search Field Cannot be empty");
        return false;
    }
}
function search_google(){
    let text = document.getElementById("search_field");

    if(validate(text.value) == false)
        return;

    let text1 = "https://www.google.com/search?q=";
    let q = text1.concat(text.value);
    window.open(q);
  
}
function search_google_scholor(){
    let text = document.getElementById("search_field");

    if(validate(text.value)  == false)
        return;

    let text1 = "https://scholar.google.com/scholar?q=";
    let q = text1.concat(text.value);
    window.open(q);
  
}
function search_youtube(){
    let text = document.getElementById("search_field");

    if(validate(text.value)  == false)
        return;

    let text1 = "https://www.youtube.com/results?search_query=";
    let q = text1.concat(text.value);
    window.open(q);
  
}