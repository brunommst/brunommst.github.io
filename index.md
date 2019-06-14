---
layout: home
title: home
---
<section title="name" id="name">
    <h1>Bru-no Santos Digital Designer</h1>
</section>
<section title="sobre" id="sobre">
    <header>
        <h2 class="titulo-bloco hidden">About me</h2>
    </header>
    <p>Hi! Welcome to my website/portfolio</p>
    <p>I’m a Digital Experience Designer from Lisbon and if you’re looking for a guy for your next website and/or digital solution, you’ve come to the right place!</p>
    <a href="about" class="button button-forward center">
            <div class="arrow">
                <span>1</span>
            </div>
            <h5>find out more</h5>
        </a>
</section>

<section title="Some of what I've done" id="projects">
    <header>
        <h2 class="titulo-bloco">Some of<br>what I've<br>done</h2>
    </header>
    <aside class="filter">
        <h3 class="filter-open">filter</h3>
        <h3 class="filter-close">x</h3>
        <ul class="filter-options">
            <li id="everything" class="filter-selected">Everything</li>
            <li id="product">Product Design</li>
            <li id="websites">Websites</li>
            <li id="general">General Design Stuff</li>
        </ul>
    </aside>
    <div id="bloco-work">
        {% for project in site.projects %}
        <a href="{{ site.baseurl }}/projects/{{ project.slug }}" class=" project {{ project.slug }} filter-{{ project.category }}">
            <article>
                <h3>{{ project.title }}</h3>
                {% for cover in project.covers %}
                    <img class="lazy" data-src="{{ cover.url }}" alt="{{ cover.alt }}">
                {% endfor %}
            </article>
        </a>
        {% endfor %}
    </div>
    <footer>
        <p>A lot more coming<br>be sure to check back soon!</p>
    </footer>
</section>

<section title="Countdown" id="timer">
    <div class="wrapper">
        <div class="countdown">
            <h3 class="hours"></h3>
            <h3 class="minutes"></h3>
            <h3 class="seconds"></h3>
        </div>
        <h4>You probably should come back later</h4>
    </div>
</section>

<script language="javascript" type="text/javascript" src="{{ "/assets/js/home.js" | relative_url }}"></script>
<script language="javascript" type="text/javascript" src="{{ "/assets/js/filter.js" | relative_url }}"></script>
