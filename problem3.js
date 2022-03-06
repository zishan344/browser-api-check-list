/* ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও  */
function seeTheLocation() {
  const confermValues = confirm("are you redy go to the other website?");
  if (confermValues == true) {
    console.log((href = "https://www.programming-hero.com/"));
  }
  return confermValues;
}
seeTheLocation();
