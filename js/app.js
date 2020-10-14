//// State of Element

let stateOfMobileMenu = false;
let stateOfUploader = false;

//// handel overlay

function handel__overlay() {
 
  if (stateOfMobileMenu) {
    handel__mobile__menu(event,true);
  }
  else if (stateOfUploader) {
    handel__upload__file(event,false);
  }

 
}
document
  .querySelector(".menu__overlay")
  .addEventListener("click", handel__overlay);

////handel menu in mobile size

function handel__mobile__menu(event,state = false) {
 
  if (state) {
    stateOfMobileMenu = false;

  } else {
    stateOfMobileMenu = true;
  
 
  }
  document
  .querySelector(".menu__overlay")
  .classList.toggle("menu__overlay__active");
  document
  .querySelector("main .content .right")
  .classList.toggle("active__menu");
}

document
  .querySelector(".mobile__menu")
  .addEventListener("click", handel__mobile__menu);

/////Configure Uppy File Upload

const uppy = Uppy.Core({
  locale: Uppy.locales.fa_IR,
});
uppy.use(Uppy.Dashboard, {
  target: ".uppy__uploader",
  inline: true,
  height: 450,
});
uppy.use(Uppy.Webcam, { target: Uppy.Dashboard });

uppy.use(Uppy.Tus, { endpoint: "https://master.tus.io/files/" });

uppy.on("complete", (result) => {
  console.log(
    "Upload complete! We’ve uploaded these files:",
    result.successful
  );
});

//// Trigger Open Fileupload

function handel__upload__file(event,state=false) {
  if(window.innerWidth >=992){
    stateOfUploader=true;
          document
      .querySelector(".menu__overlay")
      .classList.toggle("menu__overlay__active");
       
    document
    .querySelector(".upload__area")
    .classList.toggle("upload__area__active");


    document
    .querySelector("main .content .right")
    .classList.toggle("active__large__size__menu");

  }
  else{
    if (stateOfMobileMenu) {
      stateOfMobileMenu=false;
      document
      .querySelector("main .content .right")
      .classList.toggle("active__menu");
  
    }
  
  
    if (stateOfUploader) {
      stateOfUploader = false;
      document
      .querySelector(".menu__overlay")
      .classList.toggle("menu__overlay__active");
  
    } else {
      stateOfUploader = true;
    }
   
  
    document
      .querySelector(".upload__area")
      .classList.toggle("upload__area__active");
  }
}

function handel__full__width() {
  document
    .querySelector(".upload__area")
    .classList.toggle("uploader__full__width");
}

document
  .querySelector("main .content .right aside .btns button")
  .addEventListener("click", handel__upload__file);

document
  .querySelector(".close__uploader")
  .addEventListener("click", handel__upload__file);

document
  .querySelector(".full__width")
  .addEventListener("click", handel__full__width);


  //// Just for test

  setTimeout(() => {
    document.querySelector('main .content .left .files__and__folders .preloader').classList.add('d-none');
    document.querySelector('main .content .left .files__and__folders > ul').classList.remove('d-none');
  }, 3000);