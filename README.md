VueMarquee gives you a reliable, accessible, bare-bones marquee in Vue. You provide the content and the styling, this component provides the rest. [Demo](https://fuzzco.github.io/vue-marquee)

## Usage

`npm i @fuzzco/vue-marquee`

[Register component in Vue](https://vuejs.org/v2/guide/components-registration.html), then:

```html
<template>
    <main>
        <!-- standard options -->
        <vue-marquee>
            <p>
                <code>VueMarquee</code> gives you a reliable, accessible,
                bare-bones marquee. You provide the content and the styling,
                this component provides the rest.
            </p>
        </vue-marquee>

        <!-- custom props -->
        <vue-marquee :groups="10" :speed="150">
            <p>
                Your content will be repeated 10 times here and scroll at
                150px/second.
            </p>
        </vue-marquee>
    </main>
</template>
```

## Options

| Prop     | Type   | Default | Notes                                                                                                                                                                                 |
| -------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groups` | Number | 5       | How many times the text will be repeated. All repetitions after the first have `aria-hidden` set to true. Add more repetitions if your content isn't reaching the edge of the screen. |
| `speed`  | Number | 75      | Target scroll speed in pixels per second.                                                                                                                                             |
