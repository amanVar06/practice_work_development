/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function searchFunction() {
  document.getElementById("search_content").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchable_dropdown_input");
  filter = input.value.toUpperCase();
  div = document.getElementById("search_content");
  a = div.getElementsByTagName("option");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
