


// function closeWelcome() {
//     document.getElementById('welcomePage').style.display ='none';
//     document.getElementById('trackingPage').style.display = 'block';
//     document.getElementById ('trackingInfo').style.display = 'none';
// }

// function trackingPage() {
//     document.getElementById('welcomePage').style.display ='none';
//     document.getElementById('trackingPage').style.display = 'block';
//     document.getElementById ('trackingInfo').style.display = 'none';
// }

var trackingInfo = `
<section id="trackingPage">
        <div class="trackingHeader">
            <h1>Welcome to our secure tracking platform</h1>
        </div>
     <div class="trackingInput">
        <input type="text" id="trackingCode" placeholder="Enter Your Consigment No">
        <button onclick="trackPage()">Track Your Consigment</button>
     </div>  
    

   </section>
`

var trackingPage = `
<section id="trackingInfo">
        <div class="shippingBar">

            <div class="steps">
                <p class="step-text">Recieved</p>
                <div class="bullet completed"><i class="fas fa-cubes"></i></div>
            </div>

            <div class="steps">
                <p class="step-text">Shipped</p>
                <div class="bullet completed"><i class="fas fa-plane-departure"></i></div>
            </div>

            <div class="steps">
                <p class="step-text">Arrived</p>
                <div class="bullet"><i class="fas fa-plane-arrival"></i></div>
            </div>

            <div class="steps">
                <p class="step-text">Delivered</p>
                <div class="bullet"><i class="fas fa-truck"></i></div>
            </div>
           
        </div>
       
       <div id="shipperinfo">
           <h3 id="orderNo"> Order Number:#1043526 </h3>
            <p id="ownerDetails"> Full name:Richard Brown <br> Address:803 NW Park Lane <br>Apartment 11 <br>Lee’s Summit, Missouri 64063 </p>
            <button>Contact Us</button>
       </div>
   </section> -
`

function closeWelcome() {
    document.getElementById('container').innerHTML = trackingInfo;
}

function trackPage() {
    var trackingCode = document.getElementById('trackingCode')
    if(trackingCode.value === '1043526') {
        document.getElementById('container').innerHTML = trackingPage;
    }
}

