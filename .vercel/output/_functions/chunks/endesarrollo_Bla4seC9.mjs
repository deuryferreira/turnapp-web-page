import { $ as $$Layout } from './Layout_B93zRWJA.mjs';
import { c as createComponent } from './_astro_assets_DaUhVFNS.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_BsgZHvvR.mjs';

const $$Endesarrollo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sección en Desarrollo", "data-astro-cid-hdm4jjqk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="construction-section" data-astro-cid-hdm4jjqk> <div class="construction-content" data-astro-cid-hdm4jjqk> <div class="construction-icon" data-astro-cid-hdm4jjqk> <span data-astro-cid-hdm4jjqk>🚧</span> </div> <h1 class="construction-title" data-astro-cid-hdm4jjqk>Sección en Desarrollo</h1> <p class="construction-message" data-astro-cid-hdm4jjqk>
Esta área del sitio está actualmente en construcción. Estamos trabajando
        para traerte nuevas funcionalidades muy pronto.
</p> <!-- <div class="construction-progress">
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <span class="progress-text">65% completado</span>
      </div> --> <div class="construction-actions" data-astro-cid-hdm4jjqk> <a href="/" class="btn-primary" data-astro-cid-hdm4jjqk> ← Volver al Inicio </a> <a href="/contact" class="btn-secondary" data-astro-cid-hdm4jjqk> Contactar </a> </div> </div> </section> ` })}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/endesarrollo.astro", void 0);

const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/endesarrollo.astro";
const $$url = "/endesarrollo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Endesarrollo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
