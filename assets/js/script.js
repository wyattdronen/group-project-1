  function checkAge() {
    // Check if the user's birthdate is already stored in local storage
    const storedBirthdate = localStorage.getItem('userBirthdate');

    if (storedBirthdate) {
      // User's birthdate is already stored, use it for age verification
      verifyAge(storedBirthdate);
    } else {
      // Ask the user to enter their birthdate using a window prompt
      const userBirthdate = prompt('Please enter your birthdate (YYYY-MM-DD):');

      if (userBirthdate === null || userBirthdate === '') {
        alert('Age verification failed. You must enter a valid birthdate.');
        return;
      }

      // Save the user's birthdate in local storage
      localStorage.setItem('userBirthdate', userBirthdate);

      // Verify the user's age using the entered birthdate
      verifyAge(userBirthdate);
    }
  }

  function verifyAge(birthdate) {
    const today = dayjs();
    const twentyOneYearsAgo = today.subtract(21, 'year');
    const userBirthdate = dayjs(birthdate);

    if (userBirthdate.isBefore(twentyOneYearsAgo)) {
      // User is 21 or older, allow access to the site
      alert('Welcome! You are old enough to enter the site.');
      // Here you can redirect the user to the main page or load the content of the site.
    } else {
      // User is younger than 21, deny access to the site
      alert('Sorry, you must be at least 21 years old to enter the site.');
      // Optionally, you can redirect the user to a different page or show an access denied message.
    }
  }

  // Trigger the age verification when the page finishes loading
  window.onload = checkAge;
