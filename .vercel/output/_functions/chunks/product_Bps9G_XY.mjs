import { $ as $$Layout, a as $$Icon } from './Layout_B93zRWJA.mjs';
import { c as createComponent, $ as $$Image } from './_astro_assets_DaUhVFNS.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_BsgZHvvR.mjs';
import { $ as $$CTASection } from './CTASection_BRnBTlFI.mjs';
import { f as featureImage1, a as featureImage2, b as featureImage3, c as featureImage4, d as featureImage5, e as featureImage6 } from './ft6_BuhZCuJ7.mjs';

const productImage = new Proxy({"src":"/_astro/present_sin_slogan.DNOz9wRE.png","width":1400,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/assets/present_sin_slogan.png";
							}
							
							return target[name];
						}
					});

const $$Product = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Monitoreo en Tiempo Real",
      description: "Dashboard centralizado para visualizar al instante el estado de todas las filas y módulos.",
      icon: "ph:monitor-duotone",
      image: featureImage1,
      spanClasses: "md:col-span-2 md:row-span-2",
      imageStyle: "object-cover object-left-top"
    },
    {
      title: "Gestión Inteligente",
      description: "Múltiples áreas de servicio con reglas de prioridad avanzadas.",
      icon: "ph:brain-duotone",
      image: featureImage2,
      spanClasses: "md:col-span-1 md:row-span-1",
      imageStyle: "object-contain object-bottom scale-110 translate-y-4"
    },
    {
      title: "Emisión Multicanal",
      description: "Emisión mediante Kiosko e interfaz web.",
      icon: "ph:ticket-duotone",
      image: featureImage3,
      spanClasses: "md:col-span-1 md:row-span-1",
      imageStyle: "object-contain object-center scale-110"
    },
    {
      title: "Estación del Agente",
      description: "Interfaz intuitiva para gestionar llamadas con máxima eficiencia.",
      icon: "ph:desktop-duotone",
      image: featureImage4,
      spanClasses: "md:col-span-2 md:row-span-1",
      imageStyle: "object-cover object-top"
    },
    {
      title: "Análisis y Reportes",
      description: "Métricas detalladas de tiempos de espera para la mejora continua.",
      icon: "ph:presentation-chart-duotone",
      image: featureImage5,
      spanClasses: "md:col-span-2 md:row-span-1",
      imageStyle: "object-cover object-center"
    },
    {
      title: "Escalabilidad Total",
      description: "Preparada para crecer, desde una sucursal hasta redes nacionales.",
      icon: "ph:trend-up-duotone",
      image: featureImage6,
      spanClasses: "md:col-span-2 md:row-span-1",
      imageStyle: "object-cover object-center"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TurnApp - Producto", "description": "La plataforma de TurnApp digitaliza y optimiza la gestión de filas y la atención al cliente, impulsando la eficiencia operativa.", "data-astro-cid-7wxsvid2": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-20 pb-10 md:pt-28 md:pb-16 flex flex-col items-center text-center overflow-hidden relative" data-astro-cid-7wxsvid2> <!-- Decorative Radial Gradients --> <div class="absolute inset-0 overflow-hidden pointer-events-none z-0" data-astro-cid-7wxsvid2> <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-payflo-blue/20 blur-[120px]" data-astro-cid-7wxsvid2></div> <div class="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-400/10 blur-[130px]" data-astro-cid-7wxsvid2></div> <div class="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-300/15 blur-[150px]" data-astro-cid-7wxsvid2></div> </div> <div class="absolute inset-0 opacity-5 parallax z-0" data-speed="0.1" data-astro-cid-7wxsvid2> <div class="absolute inset-0 bg-repeat" style="background-image: url('/grid-pattern.svg');" data-astro-cid-7wxsvid2></div> </div> <div class="container-custom relative z-10 flex flex-col items-center" data-astro-cid-7wxsvid2> <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-payflo-purple/10 text-payflo-purple font-medium text-sm mb-8 animate-on-scroll delay-0 border border-payflo-purple/20" data-astro-cid-7wxsvid2> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:star-duotone", "class": "w-4 h-4", "data-astro-cid-7wxsvid2": true })} <span data-astro-cid-7wxsvid2>El futuro del servicio al cliente</span> </div> <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight max-w-[1000px] leading-[1.05] text-payflo-dark flex flex-wrap justify-center gap-x-2 sm:gap-x-3" data-astro-cid-7wxsvid2> <span class="animate-on-scroll delay-1 inline-block" data-astro-cid-7wxsvid2>Una Visión</span> <span class="animate-on-scroll delay-2 inline-block gradient-text" data-astro-cid-7wxsvid2>Moderna</span> <span class="animate-on-scroll delay-3 inline-block" data-astro-cid-7wxsvid2>para la Gestión de</span> <span class="animate-on-scroll delay-4 inline-block gradient-text" data-astro-cid-7wxsvid2>Turnos</span> </h1> <p class="mt-8 text-xl md:text-2xl text-gray-500 max-w-2xl animate-on-scroll delay-4 leading-relaxed font-light" data-astro-cid-7wxsvid2>
El sistema fácil de usar y rápido de implementar. Ofrezca infraestructura
        de calidad y características que encantarán a sus usuarios.
</p> <div class="mt-12 flex flex-col sm:flex-row gap-4 animate-on-scroll delay-5" data-astro-cid-7wxsvid2> <a href="https://calendar.app.google/66gajcn26cj5iZVB7" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-magnetic px-8 py-4 text-lg" data-astro-cid-7wxsvid2>Agendar una demo</a> <a href="/documentation" class="btn btn-secondary btn-magnetic px-8 py-4 text-lg border border-gray-300" data-astro-cid-7wxsvid2>Documentación</a> <a href="/contact" class="btn btn-secondary btn-magnetic px-8 py-4 text-lg border border-gray-300 opacity-80 hover:opacity-100" data-astro-cid-7wxsvid2>Contacto</a> </div> </div> <!-- PRODUCT SHOWCASE (GLASSMORPHISM) --> <div class="mt-20 w-full max-w-6xl mx-auto px-4 md:px-8 animate-on-scroll delay-6 relative z-10" data-astro-cid-7wxsvid2> <div class="relative rounded-2xl md:rounded-[2rem] bg-gradient-to-b from-gray-50 to-gray-200/50 p-2 md:p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-xl" data-astro-cid-7wxsvid2> <div class="absolute inset-0 bg-gradient-to-tr from-payflo-purple/20 to-payflo-blue/20 blur-3xl opacity-30 -z-10 rounded-full scale-90" data-astro-cid-7wxsvid2></div> <div class="rounded-xl md:rounded-[1.5rem] overflow-hidden border border-gray-100/50 shadow-inner bg-white" data-astro-cid-7wxsvid2> ${renderComponent($$result2, "Image", $$Image, { "src": productImage, "alt": "Panel de Control del Producto TurnApp", "class": "w-full h-auto hover:scale-[1.02] transition-transform duration-1000 ease-out", "data-astro-cid-7wxsvid2": true })} </div> </div> </div> </section>  <section class="py-24 bg-[#0a0a0a] text-white relative overflow-hidden" data-astro-cid-7wxsvid2> <!-- Glow effects for dark mode --> <div class="absolute top-0 left-1/4 w-96 h-96 bg-payflo-purple rounded-full mix-blend-screen filter blur-[128px] opacity-20" data-astro-cid-7wxsvid2></div> <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-payflo-blue rounded-full mix-blend-screen filter blur-[128px] opacity-20" data-astro-cid-7wxsvid2></div> <div class="container-custom relative z-10" data-astro-cid-7wxsvid2> <div class="max-w-3xl animate-on-scroll delay-0" data-astro-cid-7wxsvid2> <h2 class="text-4xl md:text-5xl font-bold tracking-tight" data-astro-cid-7wxsvid2>Características <span class="text-transparent bg-clip-text bg-gradient-to-r from-payflo-purple to-payflo-blue" data-astro-cid-7wxsvid2>Clave</span></h2> <p class="mt-6 text-xl text-gray-400 font-light max-w-2xl leading-relaxed" data-astro-cid-7wxsvid2>
Todo lo que necesita para ofrecer una solución completa, robusta y eficiente. Diseñado para escalar sin fricción.
</p> </div> <!-- BENTO GRID LAYOUT --> <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]" data-astro-cid-7wxsvid2> ${features.map((feature, index) => renderTemplate`<div${addAttribute(`relative group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-500 flex flex-col animate-on-scroll ${feature.spanClasses}`, "class")}${addAttribute(`animation-delay: ${index * 0.1 + 0.2}s`, "style")} data-astro-cid-7wxsvid2> <!-- Content --> <div class="p-8 relative z-20 flex-grow flex flex-col justify-between" data-astro-cid-7wxsvid2> <div data-astro-cid-7wxsvid2> <div class="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md border border-white/10 group-hover:bg-payflo-purple/50 transition-colors duration-500" data-astro-cid-7wxsvid2> ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.icon, "class": "h-6 w-6", "data-astro-cid-7wxsvid2": true })} </div> <h3 class="text-2xl font-medium tracking-tight mb-3 text-white/90 group-hover:text-white transition-colors" data-astro-cid-7wxsvid2>${feature.title}</h3> <p class="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors" data-astro-cid-7wxsvid2> ${feature.description} </p> </div> </div> <!-- Bento Image Mask --> <div class="absolute inset-0 z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none mt-auto h-full flex items-end justify-center" data-astro-cid-7wxsvid2> <div class="w-full h-1/2 md:h-2/3 relative mask-image-bento overflow-hidden" data-astro-cid-7wxsvid2> ${renderComponent($$result2, "Image", $$Image, { "src": feature.image, "alt": feature.title, "class": `w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out ${feature.imageStyle}`, "data-astro-cid-7wxsvid2": true })} </div> </div> <!-- Glow effect on hover --> <div class="absolute inset-0 bg-gradient-to-br from-payflo-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" data-astro-cid-7wxsvid2></div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, { "data-astro-cid-7wxsvid2": true })} ` })}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/product.astro", void 0);

const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/product.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Product,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
