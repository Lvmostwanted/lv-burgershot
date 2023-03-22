<script lang="ts">
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import VisibilityProvider from "./providers/VisibilityProvider.svelte";
    import HelloWorld from "./components/HelloWorld.svelte";
    import Tailwind from "./Tailwind.svelte";
</script>

<main>
    <Tailwind />
    <VisibilityProvider>
        <HelloWorld />
        <Router {routes} />
    </VisibilityProvider>
</main>