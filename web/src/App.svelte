<script lang="ts">
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import VisibilityProvider from "./providers/VisibilityProvider.svelte";
    import Tailwind from "./Tailwind.svelte";
    import Navigation from './components/Navigation.svelte';
</script>

<main>
    <Tailwind />
    <VisibilityProvider>
        <Navigation />
    </VisibilityProvider>
</main>