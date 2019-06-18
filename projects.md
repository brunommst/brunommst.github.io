---
layout: about
title: projects
---

<section title="Some of what I've done" id="projects">
    <header>
        <h1 class="titulo-bloco">Some of<br>what I've<br>done</h1>
        <p></p>
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
                    <img class="lazy" data-src="https://images.weserv.nl?url=https://brunommst.github.io{{ cover.url }}&h=500&q=60" src="https://images.weserv.nl?url=https://brunommst.github.io{{ cover.url }}&h=1" alt="{{ cover.alt }}">
                {% endfor %}
            </article>
        </a>
        {% endfor %}
    </div>
    <footer>
        <p>Still working on adding more projects.<br>Have a lot more coming, be sure to check back soon!</p>
    </footer>
</section>
<script>
      $('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 500
    });
</script>
<script language="javascript" type="text/javascript" src="{{ "/assets/js/filter.js" | relative_url }}"></script>