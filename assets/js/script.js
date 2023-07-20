//age verification (21+ only!)
  function checkAge() {
    const userBirthdate = prompt('Please enter your birthdate (DD-MM-YYYY):');

    if (userBirthdate === null || userBirthdate === '') {
      // User canceled or didn't enter anything
      redirectToAccessDeniedPage();
      return;
    }

    const today = dayjs();
    const twentyOneYearsAgo = today.subtract(21, 'year');
    const birthdate = dayjs(userBirthdate);

    if (birthdate.isBefore(twentyOneYearsAgo)) {
      // User is 21 or older, allow access to the site
      alert('Welcome! You are old enough to enter the site.');
      // Here you can redirect the user to the main page or load the content of the site.
    } else {
      // User is younger than 21, deny access to the site
      redirectToAccessDeniedPage();
    }
  }

  function redirectToAccessDeniedPage() {
    // Redirect the user to an "access denied" page or show an appropriate message
    window.location.href = 'access-denied.html';
  }

  // Trigger the age verification prompt when the page finishes loading
  window.onload = checkAge;


