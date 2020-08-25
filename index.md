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
	<h1>Bruno Santos Digital Designer</h1>
</section>

<section title="sobre" id="sobre">
	<header>
		<h2 class="titulo-bloco hidden">About me</h2>
	</header>
	<main>
		<p>A Digital Experience Designer from Lisbon who loves to explore, experiment and have fun with the web.</p>
	</main>
</section>

<section title="Some of what I've done" id="projects" class="inner_width">
	<header>
		<h2 class="titulo-bloco">Some of<br>what I've<br>done</h2>
		<p>This is a collection of my favourite projects from the last couple of years. From Graphic Design to Digital Product Design, websites and apps, a lot of case studies and even some fully shipped projects.</p>
	</header>
	<main>
		<ul class="projects">
			{% for project in site.projects %}
			<li class="single_project">
				<a href="{{ site.baseurl }}/projects/{{ project.slug }}">
					<h4>{{ project.title }}</h4>

					<!-- {% if project.category %}
<ul class="categories">
	{% for single_category in project.category %}
	<li class="single_category">
		<h6>{{ single_category }}</h6>
	</li>
	{% endfor %}
</ul>
{% endif %} -->

					<div class="cover-image_container">
						<!-- <img class="lazy" data-src="https://images.weserv.nl?url=https://brunommst.github.io{{ project.cover-image }}&w=400&q=80" src="https://images.weserv.nl?url=https://brunommst.github.io{{ project.cover-image }}&h=2&q=10" -->
						<img class="lazy" data-src="project.cover-image }}" src="{{ project.cover-image }}" alt="{{ project.title }}'s Cover Image'">
					</div>

				</a>
			</li>
			{% endfor %}
		</ul>
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
		<h4>Come back tonight!</h4>
	</div>
</section>

<script language="javascript" type="text/javascript" src="{{ "/assets/js/home.js" | relative_url }}"></script>
<script language="javascript" type="text/javascript" src="{{ "/assets/js/filter.js" | relative_url }}"></script>