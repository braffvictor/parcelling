import { onMounted, ref } from "vue";

export function text() {
  const x = ref(100);
  const y = ref("");

  function mouseMove(event) {
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mouseover", mouseMove));

  return { x, y };
}
