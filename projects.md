---
layout: about
---

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
        <article>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul>
                {% for image in project.images %}
                <li><img data-src="{{ image.url }}" alt="{{ image.alt }}"></li>
                {% endfor %}
            </ul>
        </article>
        {% endfor %}
    </div>
    <footer>
        <p>A lot more coming<br>be sure to check back soon!</p>
    </footer>
</section>