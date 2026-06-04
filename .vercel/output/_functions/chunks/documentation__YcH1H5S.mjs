import { $ as $$Layout, a as $$Icon } from './Layout_Dh9wb1E-.mjs';
import { c as createComponent } from './_astro_assets_CTTKv510.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_L3AIX5NG.mjs';
import { $ as $$CTASection } from './CTASection_DCDI87C-.mjs';

const $$Documentation = createComponent(($$result, $$props, $$slots) => {
  const docs = [
    {
      title: "Guía de Inicio Rápido",
      description: "Aprende los conceptos básicos y cómo configurar tu primera sucursal en menos de 10 minutos.",
      icon: "ph:lightbulb-duotone",
      link: "#"
    },
    {
      title: "Manual del Administrador",
      description: "Gestión avanzada de filas, configuración de módulos, reportes y métricas detalladas.",
      icon: "ph:wrench-duotone",
      link: "#"
    },
    {
      title: "Estación del Agente",
      description: "Todo lo que tu equipo necesita saber para atender a los clientes usando la interfaz de TurnApp.",
      icon: "ph:desktop-duotone",
      link: "#"
    },
    {
      title: "Integraciones y API",
      description: "Conecta TurnApp con tus sistemas internos y automatiza el flujo de información.",
      icon: "ph:code-duotone",
      link: "#"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TurnApp - Documentación", "description": "Encuentra guías, manuales y recursos para sacar el máximo provecho a la plataforma TurnApp." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-24 pb-16 md:pt-32 md:pb-24 bg-payflo-gray overflow-hidden relative"> <div class="absolute inset-0 opacity-5 parallax" data-speed="0.1"> <div class="absolute inset-0 bg-repeat" style="background-image: url('/grid-pattern.svg');"></div> </div> <div class="container-custom relative z-10"> <div class="max-w-3xl animate-on-scroll delay-0"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-payflo-dark">
Documentación
</h1> <p class="mt-6 text-xl text-gray-500 max-w-2xl leading-relaxed">
Todo lo que necesitas saber para implementar, configurar y sacar el máximo provecho de TurnApp.
</p> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"> ${docs.map((doc, index) => renderTemplate`<a${addAttribute(doc.link, "href")}${addAttribute(`block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-payflo-purple/30 transition-all duration-300 animate-on-scroll delay-${index + 1} group`, "class")}> <div class="h-12 w-12 rounded-xl bg-payflo-purple/10 text-payflo-purple flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-payflo-purple group-hover:text-white transition-all duration-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": doc.icon, "class": "h-6 w-6" })} </div> <h3 class="text-xl font-semibold text-payflo-dark group-hover:text-payflo-purple transition-colors">${doc.title}</h3> <p class="mt-3 text-gray-500 font-light leading-relaxed">${doc.description}</p> <div class="mt-6 flex items-center text-payflo-purple font-medium text-sm group-hover:translate-x-1 transition-transform">
Leer artículo ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:arrow-right", "class": "ml-2 w-4 h-4" })} </div> </a>`)} </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/documentation.astro", void 0);

const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/documentation.astro";
const $$url = "/documentation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Documentation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
