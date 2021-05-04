menu_list_array = ["Veg Margherita Pizza",
                    "chicken Tandoori Pizza",
                     "Veg Supreme Pizza",
                     "Panner Tikka Pizza",
                     "Deluxe Veggie Pizza",
                     "Veg Extra Pizza",
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldat=html+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"<ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
+'<img src="image/pizzaImg.png"/>'
+menu_list_array[i] + '</div>'
}
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}

}

function add_top(){
var item=document.getElementById("added_item").value;
menu_list_array.push(item);
add_item();
}