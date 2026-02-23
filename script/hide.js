function showOnly(id){
    const allJobs = document
    .getElementById("jobs-all");

    const interviewJobs = document
    .getElementById("jobs-interview");

    const rejectedJobs = document
    .getElementById("jobs-rejected");
    
    allJobs.classList.add("hidden");
    interviewJobs.classList.add("hidden");
    rejectedJobs.classList.add("hidden");
    
    const selected = document
    .getElementById(id);
    
    selected.classList.remove("hidden")
}