---
layout: page
permalink: /research/
title: Research
description: Publications and selected research experience in market design, industrial organization, and computational social choice.
nav: true
nav_order: 2
---

<div class="research-page">
  <header class="research-introduction">
    <p>
      My research interests are in industrial organization and empirical market design. My experience spans digital assets,
      transportation, electricity, shipping, and generative AI. My published work studies collective decision-making and voting rules.
    </p>
  </header>

  <section class="publications research-publications" aria-labelledby="publication-heading">
    <p class="research-eyebrow">Conference publication</p>
    <h2 id="publication-heading" class="research-section-title">Published work</h2>
    {% bibliography %}
  </section>

  <section class="research-experience" aria-labelledby="research-experience-heading">
    <p class="research-eyebrow">Stanford Graduate School of Business · 2024–2026</p>
    <h2 id="research-experience-heading" class="research-section-title">Selected research experience</h2>
    <p class="research-experience-intro">Projects I contributed to as a Predoctoral Research Fellow.</p>
    {% for role in site.data.resume.work %}
      {% for project in role.researchProjects %}
        <article class="research-project" aria-labelledby="research-{{ project.name | slugify }}">
          <h3 id="research-{{ project.name | slugify }}">{{ project.name }}</h3>
          <p class="research-project-dates">{{ project.dates }}</p>
          <p><strong>Research focus:</strong> {{ project.researchFocus }}</p>
          <p class="research-contribution-label"><strong>My contribution</strong></p>
          <ul>
            {% for highlight in project.highlights %}
              <li>{{ highlight }}</li>
            {% endfor %}
          </ul>
          <p class="research-supervisors">
            <strong>Supervisor{% if project.supervisors.size > 1 %}s{% endif %}:</strong>
            {% for supervisor in project.supervisors %}
              <a href="{{ supervisor.url }}">{{ supervisor.name }}</a>{% unless forloop.last %}; {% endunless %}
            {% endfor %}
          </p>
          {% if project.url %}<a class="research-paper-link" href="{{ project.url }}">Read the paper →</a>{% endif %}
        </article>
      {% endfor %}
    {% endfor %}
  </section>
</div>
