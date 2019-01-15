/*
  author: Abhinaya
*/
 function getYourSaying(perName,perBirthday) {
   var num_saying = {}
   num_saying[1] = "Be so positive for the coming new year that the negative things stay away from you";
   num_saying[2] = "Past is history and a new year is approaching so, make new declaration with morale high and bang at it.";
   num_saying[3] = "Life is all about facing challenges. Do mistakes. Learn from them. And then never repeat those again. Make this a new year’s resolution and always stick to your goal."; 
   num_saying[4] = "New Year is a time to overlook the bygone, esteem good memories, experience the bliss of forthcoming year, and do new things in the future.";
   num_saying[5] = "This coming year will bring a smile on your face and a glow on your cheeks and a very wonderful words on your lips.";
   num_saying[6] = "Years come and pass. The thing which remains with you is the people around you. Value them.";
   num_saying[7] = "Beyond the darkness, there is a silver lining. Hang on to the hope till the end to see brightness."; 
   num_saying[8] = "Hold the year with an open heart to appeal more beautiful things.";
   num_saying[9] = "May the old year take away all the sorrows and miseries as it goes by and fill up your upcoming days with sunshine and happiness now and always.";
   num_saying[0] = "The New Year gives you fresh 365 days to play with – fill them up with whatever your heart desires so that you have no regrets at the end of the annual cycle.";
   num_saying[-1] = "Some say new year is just another year. I say it’s another chance to improve, approve and disapprove in our life.";
   num_saying[-2] = "Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.";
   num_saying[-3] = "Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.";
   num_saying[-4] = "The new year stands before us, like a chapter in a book, waiting to be written. We can help write that story by setting goals.";
   num_saying[-5] = "Nights will be dark but days will be light, wish your life to be always bright.";
   num_saying[-6] = "No one can go back in time to change what has happened, so work on your present to make yourself a wonderful future.";
   num_saying[-7] = "End each year with a few good lessons and start the new one by showing that you have learnt the lessons of the past well.";
   num_saying[-8] = "Failure doesn’t influence your inner resilience, and failing simply means that you’ve discovered another false way to move your life forward. Profit from it.";
   num_saying[-9] = "On the road to success, the rule is always to look ahead. May you reach your destination and may your journey be wonderful.";
   perName = perName.replace(/\s/g,'').toUpperCase();
   perBirthday = perBirthday.split("-")
   var sum = 0,pos,sign;
   for(pos = 0; pos < perName.length; pos++) {
     sum += perName.charCodeAt(pos) - 64
   }
   for(pos = 0; pos < perBirthday.length;pos++) {
     sum += parseInt(perBirthday[pos]);
   }
   sign = (sum % 2 == 0) ? 1 : -1;
   while((sum % 10) != sum) {
     var temp = 0;
     while(sum > 0) {
       temp += sum % 10;
       sum = Math.floor(sum / 10);
     }
     sum = temp;
   }
   return num_saying[sum*sign];
}

exports.saying = getYourSaying;