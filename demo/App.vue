<template>
    <main class="class">
        <vue-marquee :groups="10">
            <p>
                <code>VueMarquee</code> gives you a reliable, accessible,
                bare-bones marquee. You provide the content and the styling,
                this component provides the rest.
            </p>
        </vue-marquee>
    </main>
</template>

<script>
import VueMarquee from '../src/VueMarquee'

export default {
    components: {
        'vue-marquee': VueMarquee
    }
}
</script>
