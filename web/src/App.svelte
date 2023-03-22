<script lang="ts">
    import VisibilityProvider from "./providers/VisibilityProvider.svelte";
    import HelloWorld from "./components/HelloWorld.svelte";
    import Tailwind from "./Tailwind.svelte";
</script>

<main>
    <Tailwind />
    <VisibilityProvider>
        <HelloWorld />
    </VisibilityProvider>
</main>