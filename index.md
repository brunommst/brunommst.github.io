---
layout: home
title: home
---


<section title="name" id="name">
	<h1>Bruno Santos Digital Designer</h1>
</section>

<section title="sobre" id="sobre">
	<header>
		<h2 class="titulo-bloco hidden">About me</h2>
	</header>
	<main>
		<p>A Digital Experience Designer from Lisbon who loves to use design, technology and creativity to explore, experiment and have fun with the web.</p>
	</main>
</section>

<section title="Some of what I've done" id="projects" class="inner_width">
	<header>
		<h2 class="titulo-bloco">Some of<br>what I've<br>done</h2>
		<p>Hasn't been long, but I've done a lot on the past few years. These are some of the projects I feel represent me the best. From <i>hard-core</i> web design and development to editorial design and experimental stuff.</p>
	</header>
	<main>
		<ul class="projects">
			{% for project in site.projects %}
			<li class="single_project">
				<a href="{{ site.baseurl }}/{{ project.slug }}">
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