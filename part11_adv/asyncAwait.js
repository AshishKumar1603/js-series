function fetchUserData(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve({user: "Ashish", url: "https://boxwood.com"})
        },1000);
    });
}

async function getUserData(){
    try {
        console.log("fetching user data");
         const response = await fetchUserData()
         console.log("userdata fetched successfully");
         
        console.log("user Data:", response);
        
    } catch (error) {
       console.log("Error :", error);   
    }
}
getUserData();



// ----------------------------------XXXXXXXX-------------------------------------

function fetchPostData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Post Data fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Cooment Data fetched")
        }, 3000);
    });   
}

async function getBlogData(){
    try {
        console.log("fetching blog data");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

         const [postData, commentData]= await Promise.all([fetchPostData(), fetchCommentData(),]);
        console.log(postData);
        console.log(commentData)
    } catch (error) {
       console.log("Error fetching blog data", error);
        
    }
}getBlogData();