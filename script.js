document.getElementById("submit-btn").addEventListener("click", function() {
    let score = 0;
  
    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "HyperText Markup Language") {
      score++;
    }
  
    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "CSS") {
      score++;
    }
  
    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "<a>") {
      score++;
    }
  
    // Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "background-color") {
      score++;
    }
  
    // Question 5
    let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "/* This is a comment */") {
      score++;
    }
  
    // Show score in alert
    alert(`Your score: ${score}/5`);
  });