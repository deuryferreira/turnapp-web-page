import { $ as $$Layout } from './Layout_B93zRWJA.mjs';
import { c as createComponent } from './_astro_assets_DaUhVFNS.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_BsgZHvvR.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Página No Encontrada - TurnApp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 md:py-32 flex items-center min-h-[60vh]"> <div class="container-custom text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6">404</h1> <h2 class="text-2xl md:text-3xl font-bold mb-6">Página No Encontrada</h2> <p class="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
La página que está buscando no existe o ha sido movida.
</p> <a href="/" class="btn btn-primary"> Volver a la Página Principal </a> </div> </section> ` })}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/404.astro", void 0);

const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
