Pagenation = document.getElementById('prev');
videocontainer = document.getElementById('videosId');
const searchform = document.getElementById('searchformid');
searchform.addEventListener("submit", SearchVideo);
async function SearchVideo(e) {
    //console.log("searching..") //test
    e.preventDefault()
    var searchval = document.searchformbox.searchbox.value.trim();
    var deleteDiv = document.getElementById("videosId");
    while (deleteDiv.firstChild) {
        deleteDiv.removeChild(deleteDiv.firstChild);
    }
    while (Pagenation.firstChild) {
        Pagenation.removeChild(Pagenation.firstChild);
    }
    if (searchval == "") {
        alert("please search....")
        return false;
    }
    else {
        console.log("hii");
        fetchingFromAPI("", searchval);
    }
}
