import { $ as $$Layout, r as renderScript, a as $$Icon } from './Layout_Dh9wb1E-.mjs';
import { c as createComponent } from './_astro_assets_CTTKv510.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_L3AIX5NG.mjs';

const $$BookDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Solicitar Demo - TurnApp Sistema de Gestión de Turnos", "description": "Agenda una demostración para ver cómo TurnApp puede optimizar la gestión de turnos en tu institución.", "data-astro-cid-n3d6z47p": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-payflo-gray/50 to-white py-16 px-4 sm:px-6 lg:px-8" data-astro-cid-n3d6z47p> <div class="max-w-3xl mx-auto" data-astro-cid-n3d6z47p> <!-- Header --> <div class="text-center mb-12" data-astro-cid-n3d6z47p> <h1 class="text-4xl font-bold mb-4" data-astro-cid-n3d6z47p>Solicitar Una Demostración</h1> <p class="text-xl text-gray-600" data-astro-cid-n3d6z47p>
Descubre cómo TurnApp puede optimizar la gestión de turnos en tu
          institución
</p> </div> <!-- Multi-step Form --> <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-astro-cid-n3d6z47p> <!-- Progress Steps --> <div class="flex border-b border-gray-100" id="progress-steps" data-astro-cid-n3d6z47p> <div class="flex-1 p-4 text-center bg-payflo-purple/5 border-r border-gray-100 current-step" data-step="1" data-astro-cid-n3d6z47p> <div class="flex items-center justify-center mb-2" data-astro-cid-n3d6z47p> <div class="step-circle w-8 h-8 min-w-[2rem] min-h-[2rem] rounded-full bg-payflo-purple text-white flex items-center justify-center text-sm font-medium leading-none" data-astro-cid-n3d6z47p> <span class="block leading-none align-middle" data-astro-cid-n3d6z47p>1</span> </div> </div> <span class="text-sm font-medium" data-astro-cid-n3d6z47p>Información de la Institución</span> </div> <div class="flex-1 p-4 text-center" data-step="2" data-astro-cid-n3d6z47p> <div class="flex items-center justify-center mb-2" data-astro-cid-n3d6z47p> <div class="step-circle w-8 h-8 min-w-[2rem] min-h-[2rem] rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-medium leading-none" data-astro-cid-n3d6z47p> <span class="block leading-none align-middle" data-astro-cid-n3d6z47p>2</span> </div> </div> <span class="text-sm font-medium" data-astro-cid-n3d6z47p>Datos de Contacto</span> </div> </div> <!-- Form Steps --> <form id="demo-form" class="p-8" data-astro-cid-n3d6z47p> <!-- Step 1: Información de la Institución --> <div class="step-content" id="step-1" data-astro-cid-n3d6z47p> <div class="space-y-6" data-astro-cid-n3d6z47p> <div data-astro-cid-n3d6z47p> <label for="company" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Nombre de la Institución *
</label> <input type="text" id="company" name="company" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="Nombre de su institución" data-astro-cid-n3d6z47p> </div> <div data-astro-cid-n3d6z47p> <label for="website" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Sitio Web de la Institución
</label> <input type="url" id="website" name="website" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="https://" data-astro-cid-n3d6z47p> </div> <div data-astro-cid-n3d6z47p> <label for="company-size" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Tamaño de la Institución *
</label> <select id="company-size" name="company-size" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" data-astro-cid-n3d6z47p> <option value="" data-astro-cid-n3d6z47p>Seleccione el tamaño</option> <option value="1-10" data-astro-cid-n3d6z47p>1-10 empleados</option> <option value="11-50" data-astro-cid-n3d6z47p>11-50 empleados</option> <option value="51-200" data-astro-cid-n3d6z47p>51-200 empleados</option> <option value="201-500" data-astro-cid-n3d6z47p>201-500 empleados</option> <option value="501+" data-astro-cid-n3d6z47p>501+ empleados</option> </select> </div> <div data-astro-cid-n3d6z47p> <label for="industry" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Tipo de Institución *
</label> <select id="industry" name="industry" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" data-astro-cid-n3d6z47p> <option value="" data-astro-cid-n3d6z47p>Seleccione el tipo</option> <option value="healthcare" data-astro-cid-n3d6z47p>Centro de Salud/Hospital</option> <option value="government" data-astro-cid-n3d6z47p>Institución Gubernamental</option> <option value="education" data-astro-cid-n3d6z47p>Institución Educativa</option> <option value="financial" data-astro-cid-n3d6z47p>Institución Financiera</option> <option value="retail" data-astro-cid-n3d6z47p>Comercio/Minorista</option> <option value="other" data-astro-cid-n3d6z47p>Otro</option> </select> </div> </div> </div> <!-- Step 2: Datos de Contacto --> <div class="step-content hidden" id="step-2" data-astro-cid-n3d6z47p> <div class="space-y-6" data-astro-cid-n3d6z47p> <div class="grid grid-cols-2 gap-6" data-astro-cid-n3d6z47p> <div data-astro-cid-n3d6z47p> <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Nombre *
</label> <input type="text" id="first-name" name="first-name" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="Tu nombre" data-astro-cid-n3d6z47p> </div> <div data-astro-cid-n3d6z47p> <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Apellido *
</label> <input type="text" id="last-name" name="last-name" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="Tu apellido" data-astro-cid-n3d6z47p> </div> </div> <div data-astro-cid-n3d6z47p> <label for="work-email" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Correo Electrónico Laboral *
</label> <input type="email" id="work-email" name="work-email" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="usted@institucion.com" data-astro-cid-n3d6z47p> </div> <div data-astro-cid-n3d6z47p> <label for="job-title" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Cargo *
</label> <input type="text" id="job-title" name="job-title" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="Tu cargo en la institución" data-astro-cid-n3d6z47p> </div> <div data-astro-cid-n3d6z47p> <label for="phone" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Número de Teléfono
</label> <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="Opcional" data-astro-cid-n3d6z47p> </div> <div data-astro-cid-n3d6z47p> <label for="message" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-n3d6z47p>
Información Adicional
</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="Cuéntanos sobre tus necesidades específicas o cualquier pregunta que tengas..." data-astro-cid-n3d6z47p></textarea> </div> </div> </div> <!-- Form Navigation --> <div class="mt-8 flex justify-between" data-astro-cid-n3d6z47p> <button type="button" id="prev-step" class="hidden px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-payflo-purple/20" data-astro-cid-n3d6z47p>
Anterior
</button> <button type="button" id="next-step" class="ml-auto px-6 py-3 bg-payflo-purple text-white rounded-lg hover:bg-payflo-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-payflo-purple/20" data-astro-cid-n3d6z47p>
Siguiente
</button> <button type="submit" id="submit-form" class="hidden ml-auto px-6 py-3 bg-payflo-purple text-white rounded-lg hover:bg-payflo-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-payflo-purple/20" data-astro-cid-n3d6z47p>
Solicitar Demo
</button> </div> </form> </div> <!-- Trust Badges --> <div class="mt-12 text-center" data-astro-cid-n3d6z47p> <p class="text-sm text-gray-600 mb-4" data-astro-cid-n3d6z47p>
Confiado por instituciones líderes
</p> <div class="flex justify-center space-x-8" data-astro-cid-n3d6z47p> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:shield-check-duotone", "class": "h-6 w-6 text-gray-400", "data-astro-cid-n3d6z47p": true })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:lock-key-duotone", "class": "h-6 w-6 text-gray-400", "data-astro-cid-n3d6z47p": true })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:certificate-duotone", "class": "h-6 w-6 text-gray-400", "data-astro-cid-n3d6z47p": true })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/book-demo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/book-demo.astro", void 0);

const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/book-demo.astro";
const $$url = "/book-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
