<script>
    let count = 0;
    let countMultiplier = 1;
    let doublePrice = 10;

    function increment() {
        count += countMultiplier;
    }

    function doubleMultiplier() {
        if (count >= doublePrice) {
            count -= doublePrice;
            countMultiplier *= 2;
            doublePrice *= 2;
        }
    }
</script>

<svelte:head>
  <title>Contact me</title>
</svelte:head>

<div class="top-name">
    <h1>João Gabriel Machado</h1>
</div>

<!-- Contêiner do Vídeo -->
<div class="video-container">
    <video autoplay muted loop>
        <source src="images/lindo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

<!-- Camada de sobreposição escura -->
<div class="overlay"></div>

<div class="container">
    <h2>Contacts</h2>

    <form action="" method="POST">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required>

        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Your subject" required>

        <label for="message">Message:</label>
        <input type="text" id="message" name="message" placeholder="Your cute message" required>

        <button type="submit">Send</button>
    </form>

    <h2>Contact 📫</h2>
    <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-machado-23b376218/">LinkedIn</a>
    <a href="https://www.instagram.com/joaogabrielmachado967/">Instagram</a>
    <p>Email: jogabriel433@gmail.com</p>
    <p>Feel free to explore my projects and contact me. I am open to new projects and activities that can improve my skills as a programmer 🚀</p>

    <!-- Botão que aumenta o número ao clicar -->
    <h2>Click Counter</h2>
    <div class="clickButtons">
        <button on:click={increment}>{count} (+{countMultiplier})</button>
        <button on:click={doubleMultiplier}>Dobrar (Custa {doublePrice})</button>
    </div>
</div>
