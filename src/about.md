---
title: About
page_setup:
  seo_description: This is the About page
hero:
  - _block: hero-simple
    heading: This is the About Page
    subheading: You thought you'd learn what this site is all about!? Think again!!!
blocks:
  - _block: text-editor
    content: >-
      ## About


      Here's some sample content just to get things started. Here's a [link.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut
      eveniet quaerat perferendis omnis, ipsum vel sapiente quam, ratione,
      magnam ab mollitia! Deleniti cum ducimus culpa id ab placeat officia illo
      doloremque itaque quo veritatis a quia ullam in esse corporis molestias
      eaque obcaecati explicabo, consectetur unde, quod omnis
      fugit?](https://pagescms.org)


      Here's a list:


      *   Item 1
          
      *   Item 2
          
      *   Item 3
          

      Here's a code block:


      ```

      <p>Paragraph tags!</p>

      ```


      Here's a block quote:


      > Let them eat cake!
  - _block: accordion
    intro: "## This is the intro for the whole Accordion section."
    schema: true
    accordion_groups:
      - intro: "### This is an intro for an accordion group"
        items:
          - question: "Will it rain today? "
            answer: It might rain, but you can never tell, and to be honest, no one really
              knows. You could carry an umbrella just to be safe.
          - question: Do you like pizza?
            answer: What kind of a question is that!? Who doesn't like pizza!? I'm
              personally insulted that you would even ask such a question!
      - intro: "### Second Accordion Group"
        items:
          - question: Are we having fun yet?
            answer: Yes, you betcha!
          - question: Where will I be in 5 years?
            answer: Live your best life and you'll find out.
  - _block: alt-content
    orientation: copy-left
    sections:
      - copy: |-
          ## Alternating Content Here!

          This is fantastic. It truly is
        circular: false
        image: images/placeholder-550x550.svg
        alt_text: 150 x 150 image
      - copy: "## Now we switched sides!"
        circular: false
        image: images/placeholder-550x550.svg
        alt_text: 150 x 150 image
  - _block: cards
    intro: |-
      ## Cards Section

      These cards are really great!
    cards:
      - image: images/card-1.jpg
        alt_text: Feels like home
        heading: Card 1 heading
        content: Here's some text for the first card. You could add a lot more if you
          wanted to.
        url: /
        link_text: Go home
        new_tab: false
      - image: images/card-2.jpg
        alt_text: Describe your image here
        heading: Card 2 heading
        content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem,
          accusamus voluptatibus laborum itaque sunt officia adipisci hic animi
          reprehenderit ipsum dolorem quos possimus exercitationem. Excepturi
          magni delectus doloremque, dignissimos ducimus itaque quidem quibusdam
          consequuntur ratione, id sit impedit molestiae nulla assumenda tempore
          quae fuga dolore dolorum ipsa ex nemo.
        url: /portfolio/
        link_text: Check out my Portfolio
        new_tab: false
      - image: images/card-3.jpg
        alt_text: Another image
        heading: Card 3 Heading
        content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem,
          accusamus voluptatibus laborum itaque sunt officia adipisci hic animi
          reprehenderit ipsum dolorem quos possimus exercitationem. Excepturi
          magni delectus doloremque, dignissimos ducimus itaque quidem quibusdam
          consequuntur ratione, id sit impedit molestiae nulla assumenda tempore
          quae fuga dolore dolorum ipsa ex nemo.
        url: /blog/
        link_text: Blog
        new_tab: false
---
