// create a javascript file that estimates how many applications it will take to land a job
// create variables for percentage of applications that result in a job offer,
// and the chance of getting a getting a job in general
// use the function 1 - (1 - (job offer percentage))^(number of applications) to estimate the chance of getting a job
// the variable for the job offer percentage should be a sliding scale from 0% to 100%
// the variable for the chance of getting a job in general should be a sliding scale from 0% to 100%
// the function should output the number of applications to get a job

// now write the code below
window.onload = function () {
  let jobOfferPercentage = 0.1;
  let chanceOfGettingJob = 0.1;

  let sliderJobOfferPercentage = document.getElementById("jobOfferPercentage");
  jobOfferPercentage = parseFloat(sliderJobOfferPercentage.value); // Parse the slider value as a float
  let sliderJobOfferPercentageValue = document.getElementById(
    "sliderJobOfferPercentage"
  );

  let sliderJobSuccessPercentage = document.getElementById(
    "jobSuccessPercentage"
  );
  chanceOfGettingJob = parseFloat(sliderJobSuccessPercentage.value); // Parse the slider value as a float
  let sliderJobSuccessPercentageValue = document.getElementById(
    "sliderJobSuccessPercentage"
  );

  let jobApplicationsDiv = document.getElementById("jobApplications");


  sliderJobOfferPercentage.oninput = function () {
    jobOfferPercentage = parseFloat(this.value); // Parse the slider value as a float
    let percentage = Math.round(jobOfferPercentage * 1000) / 10;
    console.log("job offer %:", percentage + "%");
    estimateApplicationsNeeded(jobOfferPercentage, chanceOfGettingJob)
    sliderJobOfferPercentageValue.textContent = percentage + "%"; // Update the display
  };


  sliderJobSuccessPercentage.oninput = function () {
    chanceOfGettingJob = parseFloat(this.value); // Parse the slider value as a float
    let percentage = Math.round(chanceOfGettingJob * 1000) / 10;
    console.log("job success %:", percentage + "%");
    estimateApplicationsNeeded(jobOfferPercentage, chanceOfGettingJob)
    sliderJobSuccessPercentageValue.textContent = percentage + "%"; // Update the display
  };


  function estimateApplicationsNeeded(offerRate, desiredSuccessRate) {
    let applications = Math.ceil(
      Math.log(1 - desiredSuccessRate) / Math.log(1 - offerRate)
    );
    jobApplicationsDiv.textContent = applications;
    
    return applications;
  }

//   console.log(estimateApplicationsNeeded(jobOfferPercentage, chanceOfGettingJob));

  // lets test the functions by calling them
  console.log(estimateApplicationsNeeded(0.01, 0.5)); // 69
  console.log(estimateApplicationsNeeded(0.01, 0.8)); // 161
};
