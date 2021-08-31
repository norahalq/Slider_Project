// Get slider items Array.form
// document.querySelectorAll('.slider-container img ') <----- يحضر  جميع عناصر المستند  التي تطابق  المحدد   
// **************************************************************************************************************
//  (.slider-container img) <-------- تم  اسناد العناصر الموجودة في 
// sliderImages <------ كمصفوفة  للمتغير 
// **************************************************************************************************************

var sliderImages =Array.from(document.querySelectorAll('.slider-container img '));
// Get Number of Slides 
// اخراج عدد عناصر المصفوفة
// sliderImages
// ثم  تخزينها في المتغير  
// slideCount
var slideCount=sliderImages.length;
console.log(slideCount);
// Set current slide
// انا اعطي المستخدم خيار يبدأمن أي صورة الأولى أو الثانية أو الثالثة ..الخ
//     لذلك لازم يكون عندنا متغير نبدأ منه currentSlide
// 

var currentSlide=1;

// 
// Slide Number String Element 
var slideNumberElement =document.getElementById('slide-number')
// Previous and Next Buttons
var nextButton=document.getElementById('next');
var prevButton=document.getElementById('prev');

// Handle Click on Previous and Next Buttons
// عند الضغط على الزر  استدعي الدالة 
    nextButton.onclick=  nextSlide;
    prevButton.onclick=  prevSlide; 

// Creat The Main UL Element
// ******************************************************************************************
//ومن ثم  تخزينة في المتغير<--- createElement <--- بواسطة المثيود <--- ul <---انشاء العنصر   
var paginationElement =document.createElement('ul')
// Set ID on Created Ul Element
// setAttribute <--- باستخدام المثيود <---ul <---للعنصر  id وضع 
paginationElement.setAttribute('id','pagination-ul')
// html  --يعني كأني  كتبت كذا في صفحة 
// <ul id="pagination-ul"> </ul>
//  Js <--ولكن تم انشاء العنصر في 
//  Js <--- ثم التحكم بهامن <-- html <--السؤال المهم هنا هل تستطيع التلاعب بالكود وانشاء العناصر في صفحة 



// ***********************************************************************************************
// Create List Items Based on  Slides count
//عدد عناصر li 
//  الخطوات يكررها على حسب عدد slide
for (var i=1 ; i<= slideCount ; i++){
    // Create the li
    var paginationItem =document.createElement('li');
    // Set Custom Attribut
    paginationItem.setAttribute('data-index',i)
    // يبدأ اللوب من الرقم واحد وكل مرة يزود واحد
    // **********************************************
    // Set Item content 
    // احط داخلة نص النص هذا هو اللي يجي من اللوب
    paginationItem.appendChild(document.createTextNode(i));
    
    // append Items to the  main ul list 
    paginationElement.appendChild(paginationItem);

}
// Add the  Created Ul Element  to the Page 
document.getElementById('indicators').appendChild(paginationElement)

// Get paginationItems Array.form
var paginationBullets =Array.from(document.querySelectorAll('#pagination-ul   li'));
// loop through all bullets items 
for (var i=0 ; i<paginationBullets.length ; i++){
    paginationBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker()
    }
}
// يشيل التحديد من على الصورة اللي انا حددتها و يحطها عللى صورة الرقم اللي انا حددته
//  يشيك لو ضغطت على رقم  5  
// هل هذا العنصر هو اخر عنصر لو أخر عنصر  الغي تفعيل الزر 
//  لذلك  نحتاج الى دالة 

//  Get the New created UL

var paginationCreatedUI=document.getElementById('pagination-ul')

// Trigger theChecker function


//  NextSlide function 
//  Slider  هذه الدالة تقوم بالانتقال الى العنصر التالي في هذا 
function nextSlide(){

    if (prevButton.classList.contains('disabled')){
        // Do nothing
        return false;
    }else {
    currentSlide++;
    theChecker()

    }
}
//  prevSlide function
// Slider  هذه الدالة تقوم بالانتقال الى العنصر السابق في هذا
function prevSlide(){
    if (nextButton.classList.contains('disabled')){
        // Do nothing
        return false;
    }else {
    currentSlide--;
    theChecker()

    }

}

// Create The Checker Function 
function theChecker(){
    //  Set the Slide Number
    slideNumberElement.textContent= 'Slide  # ' + (currentSlide) + ' of ' + (slideCount);
     // Remove All Active Classes
     removeAllActive();
    //  Set Active Class on Current Slide 
    sliderImages[currentSlide-1].classList.add('active')
    // Set Active Class on Current Pagination Item
    paginationCreatedUI.children[currentSlide-1].classList.add('active')
    // Check if Current Slide is the First
if (currentSlide==1){
    // Add Disabled Class on Previous 
    prevButton.classList.add('disabled')
    }else {
     // Add Disabled Class from Previous 
    prevButton.classList.remove('disabled')   
    }
     // Check if Current Slide is the Last
    if (currentSlide == slideCount ){
        // Add Disabled Class on Next Button
        nextButton.classList.add('disabled')
        }else {
        // remove Disabled Class from Next Button
    nextButton.classList.remove('disabled');
 }
        }
 
// Remove All Active Classes From Images and Pagination Bullets
 function  removeAllActive(){
    //  Loop Through Images
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });
    // Loop Through  paginationBullets 
    paginationBullets.forEach(function(Bullet){
    Bullet.classList.remove('active');

    })
 }
