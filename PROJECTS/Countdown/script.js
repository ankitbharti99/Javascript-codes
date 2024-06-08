const endDate = '23 July 2024 12:01 AM';

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input');

// const clock = ()
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  //   console.log(end, now);
  const diff = Math.trunc((end - now) / 1000);
  //   console.log(diff);

  //Convert into days
  inputs[0].value = Math.trunc(diff / 3600 / 24);
  //Convert into hours
  inputs[1].value = Math.trunc((diff / 3600) % 24);
  //Convert into minutes
  inputs[2].value = Math.trunc((diff / 60) % 60);
  //Convert into seconds
  inputs[3].value = Math.trunc(diff % 60);

  //Convert into Days
}

clock();

/*
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 mins = 3600 sec
 */

setInterval(() => {
  clock();
}, 1000);
