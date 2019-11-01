/*jshint browser: true */

   //slided show 1
var myelement=document.getElementById("pmg1"),  
    myimages=[
        "images/p01.jpeg",
        "images/p02.jpeg",
        "images/p03.jpeg",
        "images/p04.jpeg",
        "images/p04.jpeg"
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){ 
         var  myrandomnum=Math.floor(Math.random()* 5);  
        myelement.src= myimages[myrandomnum]; 
        },5000);
}
changeimages(myelement,myimages); 



//product slide show 2
var myelement=document.getElementById("pmg2"),
    myimages=[   
        "images/p11.jpeg",
        "images/p12.jpeg",
        "images/p13.jpeg",
        "images/p14.jpeg"
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){
         var  myrandomnum=Math.floor(Math.random()* 4); 
        myelement.src= myimages[myrandomnum];
        },4000);
}
changeimages(myelement,myimages); 



//product slide show 3
var myelement=document.getElementById("pmg3"),  
    myimages=[
        "images/p21.jpeg",
        "images/p22.jpg",
        "images/p23.jpeg",
        "images/p24.jpeg"
       
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){ 
         var  myrandomnum=Math.floor(Math.random()* 4);  
        myelement.src= myimages[myrandomnum]; 
        },4000);
}
changeimages(myelement,myimages);

// product slide show 4
var myelement=document.getElementById("pmg4"),
    myimages=[    
        "images/p31.jpeg",
        "images/p32.jpeg",
        "images/p33.jpeg",
        "images/p34.jpeg"
    ];
function changeimages(myelement,myimages){ 
        
    setInterval(function(){   
         var  myrandomnum=Math.floor(Math.random()* 4);  
        myelement.src= myimages[myrandomnum];
        },4000);
}
changeimages(myelement,myimages); 



// product slid show 5
var myelement=document.getElementById("pmg5"),
    myimages=[
        "images/p41.jpeg",
        "images/p42.jpeg",
        "images/p43.jpeg",
        "images/p44.jpg"
        
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){   
         var  myrandomnum=Math.floor(Math.random()* 4);   
        myelement.src= myimages[myrandomnum]; 
        },5000);
}
changeimages(myelement,myimages); 



// product slid show 6

var myelement=document.getElementById("pmg6"),
    myimages=[
        "images/p51.jpeg",
        "images/p52.jpeg",
        "images/p53.jpeg",
        "images/p54.jpeg"
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){
         var  myrandomnum=Math.floor(Math.random()* 4); 
        myelement.src= myimages[myrandomnum];
        },4000);
}
changeimages(myelement,myimages);



//slid show 7
var myelement=document.getElementById("pmg7"),
    myimages=[
        "images/p61.jpg",
        "images/p62.jpg",
        "images/p63.jpg",
        "images/p64.jpg"
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){
         var  myrandomnum=Math.floor(Math.random()* 4); 
        myelement.src= myimages[myrandomnum];
        },4000);
}
changeimages(myelement,myimages);




//slid show 8
var myelement=document.getElementById("pmg8"),
    myimages=[
        "images/p71.jpg",
        "images/p72.jpg",
        "images/p73.jpg",
        "images/p74.jpg"
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){
         var  myrandomnum=Math.floor(Math.random()* 4); 
        myelement.src= myimages[myrandomnum];
        },4000);
}
changeimages(myelement,myimages);



//slid show 9
var myelement=document.getElementById("pmg9"),
    myimages=[
        "images/p81.jpg",
        "images/p82.jpg",
        "images/p83.jpg",
        "images/p84.jpg"
    ];
function changeimages(myelement,myimages){
        
    setInterval(function(){
         var  myrandomnum=Math.floor(Math.random()* 4); 
        myelement.src= myimages[myrandomnum];
        },4000);
}
changeimages(myelement,myimages);
