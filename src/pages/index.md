---
title: Home
white_header: true
sections:
  - type: hero_section
    section_id: hero_section
    background_image: images/header.jpg
    background_image_opacity: 65
    content: |
      # The most fresh, healthy, organic foods at your doorstep.
    actions:
      - url: /store
        arrow: true
        style: primary
        title: Our Products
  - type: featured_products_section
    section_id: best_sellers_section
    title: Best sellers
    icon: true
    light_title: true
    featured_products:
      - src/pages/products/plant1.md
      - src/pages/products/plant3.md
      - src/pages/products/plant5.md
      - src/pages/products/plant2.md
  - type: featured_categories_section
    section_id: featured_categories_section
    featured_categories:
      - src/pages/category/staples.md
      - src/pages/category/fruits_vegetables.md
  - type: testimonials_section
    section_id: testimonials_section
    title: Testimonials
    testimonials:
      - author:
          name: John Dope
          location: 'BLR, IND'
        text: I didn't know the ekayu guys were into herbs as well!
      - author:
          name: Major Payne
          location: 'BLR, IND'
        text: >-
          Well I'll be damned. These plants really ARE greener than any of my
          recruits.
  - type: promotion_section
    section_id: promotion_section
    title: A new home interior for summer
    subtitle: from ₹149.99
    image: images/promo.jpg
    background_image: images/leaf.svg
    cta:
      title: Discover
      url: /store
      style: secondary
      arrow: true
template: home
---
