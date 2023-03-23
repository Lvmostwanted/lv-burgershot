<script lang="ts">
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "fontawesome-svelte";

    library.add(faChartSimple);
</script>

<aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
       <ul class="space-y-2">
          <li>
             <a href="#" class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
                <FontAwesomeIcon icon={faChartSimple} />                
                <span class="ml-3">Dashboard</span>
             </a>
          </li>
       </ul>
    </div>
 </aside>

 