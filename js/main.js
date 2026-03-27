onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('CONGRATULATIONS!').split('');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 120);
      } else {
        showMessage();
      }
    }

    function showMessage() {
      messageElement.innerHTML = `
      Congratulations on your graduation! Seeing you reach this point honestly makes me so happy because I know it wasn’t easy. You went through so many challenges, moments of doubt, and times when you probably felt tired or unmotivated—but you still kept going.

      <br><br>

      That kind of determination is something not everyone has, and it’s one of the reasons you deserve this success.

      <br><br>

      Thank you for being an amazing friend. I’m grateful to have witnessed part of your journey, and I’m excited to see all the great things you’ll accomplish in the future.

      <br><br>

      You did it—and this is only the beginning! Congratulations!!!
      `;

      messageElement.style.opacity = 1;
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};