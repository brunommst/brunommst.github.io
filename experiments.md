---
layout: about
---

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