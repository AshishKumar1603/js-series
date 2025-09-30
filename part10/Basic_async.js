/* -->JavaScript Default Behavior → Synchronous

By default, JavaScript single-threaded hoti hai aur line-by-line code execute karti hai.
Matlab, ek line complete execute hone ke baad hi agla code chalega.
Isko blocking behavior kehte hain.

 */

/* -->By default: JavaScript synchronous hoti hai.

Async tasks ke liye: JavaScript asynchronous behavior dikhati hai with help of Event Loop and Web APIs.

Asynchronous programming ke liye:
.Callbacks
.Promises 
.Async/Await use hote hain. */

/* ==>Asynchronous Behavior in JavaScript

JavaScript mein kuch tasks aise hote hain jo time-consuming hote hain (e.g., API call, file reading, timers).
Agar inhe synchronous tarike se chalaye, to poora program block ho jayega.

Is problem ko solve karne ke liye JavaScript asynchronous model use karti hai, jisme wo heavy task ko background mein Web APIs ko de deti hai aur baaki code execute hota rehta hai.
Jab task complete hota hai, to callback queue se result Event Loop ke through execute hota hai. */