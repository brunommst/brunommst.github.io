---
layout: home
title: home
---
<!--
<div id="outdated">
<h2>This website is outdated<br>This website is outdated</h2>
<h4><a href="#contact">Contact me</a> for updated news!</h4>
</div> -->

<section title="name" id="name">
    <h1>Bru-no Santos Digital Designer</h1>
</section>

<section title="sobre" id="sobre">
    <header>
        <h2 class="titulo-bloco hidden">About me</h2>
    </header>
		<main>
	    <p>Hey! Welcome to my website / portfolio / online place where I put my stuff that I'm never satisfied with.</p>
	    <p>I’m a Digital Experience Designer from Lisbon who loves to explore, experiment and have fun with the web. Feel free to explore around or just <a href="#contact">talk to me!</a></p>
	    <a href="about" class="button button-forward center">
	        <div class="arrow">
	            <span>1</span>
	        </div>
	        <h5>find out more</h5>
	    </a>
		</main>
</section>

<!-- <section title="Some of what I've done" id="projects">
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
                <img class="lazy" data-src="https://images.weserv.nl?url=https://brunommst.github.io{{ cover.url }}&h=500&q=60" src="https://images.weserv.nl?url=https://brunommst.github.io{{ cover.url }}&h=2&q=10" alt="{{ cover.alt }}">
                {% endfor %}
            </article>
        </a>
        {% endfor %}
    </div>
    <footer>
        <a href="projects" class="button button-forward center">
            <div class="arrow">
                <span>1</span>
            </div>
            <h5>see all projects</h5>
        </a>
        <p>A lot more coming<br>be sure to check back soon!</p>
    </footer>
</section> -->

<section title="Countdown" id="timer">
    <div class="wrapper">
        <div class="countdown">
            <h3 class="hours"></h3>
            <h3 class="minutes"></h3>
            <h3 class="seconds"></h3>
        </div>
        <h4>Come back later tonight!</h4>
    </div>
</section>

<script language="javascript" type="text/javascript" src="{{ "/assets/js/home.js" | relative_url }}"></script>
<script language="javascript" type="text/javascript" src="{{ "/assets/js/filter.js" | relative_url }}"></script>
