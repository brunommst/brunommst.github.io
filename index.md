---
layout: home
---

<h1 id="nome">Bru-no Santos Digital Designer</h1>

<section title="sobre" id="sobre">
    <header>
        <h2 class="titulo-bloco hidden">About me</h2>
    </header>
    <p>HI! I'M A COMMUNICATION DESIGNER FROM LISBON, PORTUGAL WHO LOVES TO DEVELOP DIGITAL INTERFACES AND HOPES TO BECOME A WEBMASTER ONE DAY. I’M ALSO A TECHNOLOGY ENTHUSIAST sometimes a little too much even WHO ADVOCATES EXPERIMENTATION AND MULTIDISCIPLINARY SYSTEMS AS A WAY TO BETTER ACHIEVE PROGRESS AND DO MY JOB.</p>
    <a class="button">
        <span class="arrow arrow-back">1</span>
        <h5>Back to the beginning</h5>
    </a>
</section>

<section title="Some of what I've done" id="work">
    <header>
        <h2 class="titulo-bloco">Some of<br>what I've<br>done</h2>
        <aside class="filter">
            <h3>filter</h3>
            <h3>x</h3>
            <ul class="filter-options">
                <li>Everything</li>
                <li>Product Design</li>
                <li>Websites</li>
                <li>General Design Stuff</li>
            </ul>
        </aside>
    </header>
    <div id="bloco-work">
        {% for project in site.projects %}
        <a href="{{ site.baseurl }}/projects/{{ project.slug }}" class="{{ project.slug}}">
            <article>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <ul>
                    {% for image in project.images %}
                    <li><img data-src="{{ image.url }}" alt="{{ image.alt }}"></li>
                    {% endfor %}
                </ul>
            </article>
        </a>
        {% endfor %}
    </div>
    <footer>
        <p>A lot more coming<br>be sure to check back soon!</p>
    </footer>
</section>

<section title="Countdown" id="timer">
    <div>02h24m50s</div>
    <h3>You probably should come back later</h3>
</section>
