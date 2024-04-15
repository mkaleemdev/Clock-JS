const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

setInterval(setClock, 1000);

function setClock() {
   //getting time
   const currentDate = new Date();
   const hours = currentDate.getHours();
   const minutes = currentDate.getMinutes();
   const seconds = currentDate.getSeconds();

   //convert time into degree
   const h_rotation = 30 * hours + minutes / 2;
   const m_rotation = 6 * minutes;
   const s_rotation = 6 * seconds;

   //apply degree on clock hands
   secondHand.style.transform = `rotate(${s_rotation}deg)`;
   hourHand.style.transform = `rotate(${h_rotation}deg)`;
   minuteHand.style.transform = `rotate(${m_rotation}deg)`;
}

setClock()