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
		<p>A multidisciplinary designer <b>working across design and technology</b>, combining curiosity and ingenuity to create digital products and experiences. <i>Firm believer</i> that design should be equal parts form and function.</p>
	</main>
</section>

<section title="Some of what I've done" id="projects" class="inner_width">
	<header>
		<h2 class="titulo-bloco">Some of<br>what I've<br>done</h2>
		<p>My work has always been driven by an experimental approach to design, blending creativity with technology to build innovative and functional experiences.</p>
	</header>
	<main>
		<ul class="projects">
			{% for project in site.projects %}
			<li class="single_project">
				<a href="{{ site.baseurl }}/{{ project.slug }}">
					<h4>{{ project.title }}</h4>


{% if project.category %}
<ul class="categories">
	{% for single_category in project.category %}
	<li class="single_category">
		<h6>{{ single_category }}</h6>
	</li>
	{% endfor %}
</ul>
{% endif %}

					<div class="cover-image_container">
						<!-- <img class="lazy" data-src="https://images.weserv.nl?url=https://bru-no.com{{ project.cover-image }}&w=400&q=80" src="https://images.weserv.nl?url=https://bru-no.com{{ project.cover-image }}&h=2&q=10" -->
						<img class="lazy" data-src="project.cover-image }}" src="{{ project.cover-image }}" alt="{{ project.title }}'s Cover Image'">
					</div>

				</a>
			</li>
			{% endfor %}
		</ul>
	</main>
</section>

<!--<section title="Countdown" id="timer">
	<div class="wrapper">
		<div class="countdown">
			<h3 class="hours"></h3>
			<h3 class="minutes"></h3>
			<h3 class="seconds"></h3>
		</div>
		<h4>Come back tonight!</h4>
	</div>
</section>-->

<script language="javascript" type="text/javascript" src="{{ "/assets/js/home.js" | relative_url }}"></script>
<script language="javascript" type="text/javascript" src="{{ "/assets/js/filter.js" | relative_url }}"></script>


<style>
	body {
		background:#f2f2f2 !important;
	}
	#projects > main ul a {
		text-decoration: none;
	}
	#projects > main ul a:hover h4 {
		text-decoration: underline;
	}
	ul.categories li.single_category {
		margin: 6px 4px 6px;
		padding:12px 10px;
		line-height: 1px;
	}
	ul.categories li.single_category h6 {
		margin: 0 0 -4px;
		line-height: 4px;
	}
	
	.home section#projects main ul.projects li.single_project {
        padding: 15px 0;
    }

	h1, h2, h3, h4, h5 {
		line-height:120% !important;
	}

	@media (max-width:767px) {
		.home section#projects main ul.projects li.single_project a {
			flex-direction: column;
			align-items: flex-start;
		}
		.home section#projects header p, .home section#projects main ul.projects {
			padding-left: 0;
		}
		#projects h4 {
			padding-left: 8px;
			line-height:120%;
		}
		.wrapper>header nav ul li.sub {
			margin:0;
			font-size:25px;
		}
	}
	@media (min-width:768px) {
		.wrapper>header nav ul {
			width:350px;
		}
		.home section#sobre {
			margin: 0;
			width:50%;
			margin-left:50%;
		}
		.home section#sobre:hover {
			background: unset !important;
		}
		.home section#projects {
			margin-top:40vh;
		}
	}

	.home section#contact {
		margin-top:200px;
	}

	.home section#projects main ul.projects li.single_project:hover .cover-image_container {
		opacity: 1;
	}

	#name h1 {
		transform-origin: bottom left;
	}

	

<style>