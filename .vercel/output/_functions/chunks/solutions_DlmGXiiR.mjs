import { $ as $$Layout, a as $$Icon } from './Layout_Dh9wb1E-.mjs';
import { c as createComponent } from './_astro_assets_CTTKv510.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_L3AIX5NG.mjs';
import { $ as $$CTASection } from './CTASection_DCDI87C-.mjs';

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const solutions = [
    {
      title: "Centros de Salud",
      description: "Optimice la experiencia del paciente desde su llegada. Gestione prioridades médicas y reduzca drásticamente las aglomeraciones en salas de espera.",
      icon: "ph:first-aid-kit-duotone",
      features: [
        "Triaje y prioridades automáticas",
        "Llamado por voz en pantallas HUB",
        "Monitoreo de flujo de pacientes",
        "Reducción de tiempos de espera"
      ]
    },
    {
      title: "Banca y Finanzas",
      description: "Eleve el estándar de atención en sus sucursales. Ofrezca un flujo organizado y seguro que respete la privacidad y el tiempo de sus clientes.",
      icon: "ph:bank-duotone",
      features: [
        "Atención segmentada por perfil",
        "Citas y turnos vía código QR",
        "Dashboard de desempeño por sucursal",
        "Análisis de volumen de transacciones"
      ]
    },
    {
      title: "Gobierno y Servicios Públicos",
      description: "Digitalice la atención ciudadana. Organice trámites masivos con transparencia y eficiencia operativa desde una plataforma única.",
      icon: "ph:buildings-duotone",
      features: [
        "Gestión de trámites multi-área",
        "Reportes de gestión ciudadana",
        "Tickets virtuales y autogestión",
        "Configuración rápida de flujos"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TurnApp - Soluciones", "description": "Descubra cómo la infraestructura de TurnApp se adapta a las necesidades específicas de su industria, optimizando la atención al cliente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24"> <div class="container-custom"> <div class="text-center max-w-4xl mx-auto"> <h1 class="animate-on-scroll delay-0 text-4xl md:text-5xl font-bold leading-tight">
Soluciones <span class="gradient-text">Especializadas</span> para cada Sector
</h1> <p class="animate-on-scroll delay-1 mt-6 text-xl text-gray-600">
Ya sea que gestione un hospital, una red bancaria o una oficina de servicios gubernamentales, 
          la infraestructura de TurnApp se adapta a sus flujos operativos específicos.
</p> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> ${solutions.map((solution, index) => renderTemplate`<div${addAttribute(`bg-white rounded-xl p-8 shadow-lg animate-on-scroll delay-${index + 2}`, "class")}> <div class="h-12 w-12 rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue flex items-center justify-center text-white"> ${renderComponent($$result2, "Icon", $$Icon, { "name": solution.icon, "class": "h-6 w-6" })} </div> <h3 class="mt-6 text-2xl font-semibold">${solution.title}</h3> <p class="mt-4 text-gray-600">${solution.description}</p> <ul class="mt-6 space-y-3"> ${solution.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-payflo-purple mr-2" })} ${feature} </li>`)} </ul> </div>`)} </div> </div> </section> <section class="py-20"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Diseñado para el Éxito Institucional
</h2> <p class="mt-4 text-xl text-gray-600">
Nuestra infraestructura flexible le permite construir exactamente la experiencia que sus usuarios necesitan, 
          sin comprometer la eficiencia o la seguridad de los datos.
</p> </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/solutions.astro", void 0);

const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
