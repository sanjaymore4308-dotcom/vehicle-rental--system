const packages = [
{ name: "Goa Trip", price: "₹12,999", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
{ name: "Shimla Manali", price: "₹15,499", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98" },
{ name: "Kashmir Tour", price: "₹18,999", img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad" }
];
let bookingCount = 0;


window.onload = () => {
const packDiv = document.getElementById("packages");
packages.forEach(p => {
packDiv.innerHTML += `
<div class='card'>
<img src='${p.img}' />
<h3>${p.name}</h3>
<p>Price: ${p.price}</p>
<button onclick="book('${p.name}')">Book Now</button>
</div>`;
});
};
function openLogin() { document.getElementById('loginBox').style.display = 'block'; }
function closeLogin() { document.getElementById('loginBox').style.display = 'none'; }


function openAdmin() { document.getElementById('adminBox').style.display = 'block'; }
function closeAdmin() { document.getElementById('adminBox').style.display = 'none'; }


function loginUser() { alert("User Logged In Successfully!"); closeLogin(); }
function adminLogin() {
alert("Admin Logged In! Dashboard Unlocked");
document.getElementById('adminPanel').style.display = 'block';
closeAdmin();
}
function book(pkg) {
bookingCount++;
document.getElementById('bookingCount').innerText = bookingCount;
alert(`Booking Successful for ${pkg}`);
}