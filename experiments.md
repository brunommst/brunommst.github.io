---
layout: experiments
title: experiments
---

<section title="name" id="name">
    <h1>Bru-no Santos Digital Designer</h1>
</section>

<section title="sobre" id="sobre">
    <header>
        <h2 class="titulo-bloco hidden">Experiments</h2>
    </header>
    <p>Hi! Welcome to my website/portfolio</p>
    <p>I’m a Digital Experience Designer from Lisbon and if you’re looking for a guy for your next website and/or digital solution, you’ve come to the right place!</p>
</section>

<section title="Countdown" id="timer">
    <div class="wrapper">
        <div class="countdown">
            <h3 class="hours"></h3>
            <h3 class="minutes"></h3>
            <h3 class="seconds"></h3>
        </div>
        <h4>Come back during the day for the real stuff.</h4>
    </div>
</section>

<section title="Experiments" id="experiments">
    <header>
        <h2 class="titulo-bloco">ExPerimEnts</h2>
    </header>
    <div id="bloco-work">
        {% for post in site.posts %}
        <article>
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <ul>
                {% for image in post.images %}
                <li><img data-src="{{ image.url }}" alt="{{ image.alt }}"></li>
                {% endfor %}
            </ul>
        </article>
        {% endfor %}
    </div>
    <footer>
        <p>LET ME KNOW IF ANY OF THIS SPARKED SOME IDEA ON YOUR HEAD.</p>
        <p>ALWAYS LOOKING TO COLLAB OR JUST HANG OUT!</p>
    </footer>
</section>
