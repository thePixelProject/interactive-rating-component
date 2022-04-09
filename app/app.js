const submitBtn = document.querySelector('.submit-btn');
const ratingBtn = document.querySelectorAll('.rating-btn');
const feedback = document.querySelector('.feedback');
const confirmation = document.querySelector('.confirmation');
const submitCheck = document.querySelector('.submit-check');
const rating = document.querySelector('.rating');
let rating_score = 0 // default value

submitBtn.addEventListener('click', onSubmit);

function onSubmit(){
    if (rating_score >= 1 && rating_score <= 5) {
      feedback.classList.add('hidden');
      rating.textContent = rating_score;
      confirmation.classList.remove('hidden');
    }else{
      submitCheck.classList.remove('hidden');
    }
}

ratingBtn.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function handleRatingBtnClick(event){
  ratingBtn.forEach( btn =>{
    btn.classList.remove('active');
  });

    if (event.target.classList.contains('rating-btn')){
      event.target.classList.add('active');
  } else {
      event.target.parentElement.classList.add('active');
  }

  rating_score = event.target.textContent;

}
