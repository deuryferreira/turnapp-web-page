import { $ as $$Layout, r as renderScript, a as $$Icon } from './Layout_Dh9wb1E-.mjs';
import { c as createComponent } from './_astro_assets_CTTKv510.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_L3AIX5NG.mjs';

const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contact;
  let successMessage = "";
  let errorMessage = "";
  let formData = {
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      formData.name = data.get("name")?.toString() || "";
      formData.email = data.get("email")?.toString() || "";
      formData.company = data.get("company")?.toString() || "";
      formData.subject = data.get("subject")?.toString() || "";
      formData.message = data.get("message")?.toString() || "";
      const apiKey = "re_WLSAjgSt_MKZbM27fmMLPuHFrP5j8oJQG";
      if (!apiKey) ; else {
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);
        const emailResponse = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "deury.fr@gmail.com",
          subject: `Nuevo Mensaje de Contacto: ${formData.subject || "Sin Asunto"}`,
          html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo Contacto - TurnApp</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
            
            <!-- Encabezado -->
            <tr>
              <td style="background-color: #0055c4; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">TurnApp</h1>
                <p style="color: #e0e7ff; margin: 5px 0 0 0; font-size: 15px;">Nueva solicitud de contacto</p>
              </td>
            </tr>

            <!-- Contenido Principal -->
            <tr>
              <td style="padding: 30px;">
                <h2 style="font-size: 18px; color: #1e293b; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Detalles del remitente</h2>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 120px;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Nombre</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${formData.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Email</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${formData.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Empresa</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${formData.company || "<em>No especificada</em>"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Asunto</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                      <span style="background-color: #eff6ff; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${formData.subject}</span>
                    </td>
                  </tr>
                </table>

                <h2 style="font-size: 18px; color: #1e293b; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Mensaje</h2>
                
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; color: #334155; font-size: 15px; white-space: pre-wrap;">${formData.message.replace(/\n/g, "<br/>")}</div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="color: #94a3b8; font-size: 13px; margin: 0;">Este mensaje fue enviado automáticamente desde el formulario de contacto de la web de TurnApp.</p>
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `
        });
        if (emailResponse.error) {
          console.error(emailResponse.error);
          errorMessage = "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.";
        } else {
          successMessage = "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto.";
          formData = { name: "", email: "", company: "", subject: "", message: "" };
        }
      }
    } catch (error) {
      console.error(error);
      errorMessage = "Ocurrió un error inesperado. Por favor intenta más tarde.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contáctanos - Ferreira TIC", "description": "Ponte en contacto con nuestro equipo para consultas generales, soporte técnico o oportunidades de colaboración.", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden" data-astro-cid-uw5kdbxl> <!-- Decorative Radial Gradients --> <div class="absolute inset-0 overflow-hidden pointer-events-none z-0" data-astro-cid-uw5kdbxl> <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-payflo-blue/20 blur-[120px]" data-astro-cid-uw5kdbxl></div> <div class="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-400/10 blur-[130px]" data-astro-cid-uw5kdbxl></div> <div class="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-300/15 blur-[150px]" data-astro-cid-uw5kdbxl></div> </div> <!-- Subtle grid pattern (optional for consistency) --> <div class="absolute inset-0 opacity-5 z-0 pointer-events-none" data-astro-cid-uw5kdbxl> <div class="absolute inset-0 bg-repeat" style="background-image: url('/grid-pattern.svg');" data-astro-cid-uw5kdbxl></div> </div> <div class="container-custom relative z-10" data-astro-cid-uw5kdbxl> <div class="text-center max-w-3xl mx-auto animate-on-scroll mb-16" data-astro-cid-uw5kdbxl> <h1 class="text-4xl md:text-5xl font-bold leading-tight" data-astro-cid-uw5kdbxl>
Ponte en <span class="gradient-text" data-astro-cid-uw5kdbxl>Contacto</span> </h1> <p class="mt-6 text-xl text-gray-600" data-astro-cid-uw5kdbxl>
Nos encantaría saber de ti. Contáctanos para cualquier consulta o
          solicitud.
</p> </div> <!-- Layout de dos columnas para desktop --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" data-astro-cid-uw5kdbxl> <!-- Columna izquierda: Información de contacto --> <div class="animate-on-scroll" data-astro-cid-uw5kdbxl> <div class="feature-card p-8" data-astro-cid-uw5kdbxl> <div class="text-center mb-8" data-astro-cid-uw5kdbxl> <div class="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-payflo-purple/10 text-payflo-purple mb-4" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:envelope-duotone", "class": "h-8 w-8", "data-astro-cid-uw5kdbxl": true })} </div> <h2 class="text-2xl font-bold text-payflo-dark mb-2" data-astro-cid-uw5kdbxl>
Información de Contacto
</h2> <p class="text-gray-600" data-astro-cid-uw5kdbxl>
Contáctanos para consultas generales, soporte técnico o
                oportunidades de colaboración.
</p> </div> <div class="space-y-6" data-astro-cid-uw5kdbxl> <div class="text-center" data-astro-cid-uw5kdbxl> <h3 class="font-semibold text-payflo-dark mb-3" data-astro-cid-uw5kdbxl>
Medios de Contacto
</h3> <div class="space-y-3" data-astro-cid-uw5kdbxl> <a href="mailto:info@ferreiratic.com" class="block text-payflo-purple font-medium hover:underline text-lg transition-colors duration-200" data-astro-cid-uw5kdbxl>
info@ferreiratic.com
</a> <a href="tel:+18293270889" class="block text-payflo-purple font-medium hover:underline text-lg transition-colors duration-200" data-astro-cid-uw5kdbxl>
+1 829 327 0889
</a> </div> </div> <div class="text-center" data-astro-cid-uw5kdbxl> <h3 class="font-semibold text-payflo-dark mb-3" data-astro-cid-uw5kdbxl>
Acciones Rápidas
</h3> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-uw5kdbxl> <a href="mailto:info@ferreiratic.com" class="contact-btn contact-btn-primary" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:envelope-simple", "class": "btn-icon", "data-astro-cid-uw5kdbxl": true })} <span class="btn-text" data-astro-cid-uw5kdbxl>Enviar Email</span> </a> <a href="tel:+18293270889" class="contact-btn contact-btn-secondary" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:phone", "class": "btn-icon", "data-astro-cid-uw5kdbxl": true })} <span class="btn-text" data-astro-cid-uw5kdbxl>Llamar</span> </a> </div> </div> <!-- Información adicional --> <div class="grid grid-cols-1 gap-4 mt-8" data-astro-cid-uw5kdbxl> <div class="text-center p-4 bg-gray-50 rounded-lg" data-astro-cid-uw5kdbxl> <div class="flex items-center justify-center gap-2 text-payflo-purple mb-2" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:clock", "class": "h-5 w-5", "data-astro-cid-uw5kdbxl": true })} <span class="font-semibold" data-astro-cid-uw5kdbxl>Horario de Atención</span> </div> <p class="text-sm text-gray-600" data-astro-cid-uw5kdbxl>
Lun - Vie: 9:00 AM - 6:00 PM
</p> <p class="text-sm text-gray-600" data-astro-cid-uw5kdbxl>Sáb: 9:00 AM - 1:00 PM</p> </div> <div class="text-center p-4 bg-gray-50 rounded-lg" data-astro-cid-uw5kdbxl> <div class="flex items-center justify-center gap-2 text-payflo-purple mb-2" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:chat-centered-text", "class": "h-5 w-5", "data-astro-cid-uw5kdbxl": true })} <span class="font-semibold" data-astro-cid-uw5kdbxl>Respuesta Rápida</span> </div> <p class="text-sm text-gray-600" data-astro-cid-uw5kdbxl>
Respondemos en menos de 24 horas
</p> </div> </div> </div> </div> </div> <!-- Columna derecha: Formulario --> <div class="animate-on-scroll delay-1" data-astro-cid-uw5kdbxl> <div class="bg-white rounded-xl shadow-lg overflow-hidden feature-card h-full" data-astro-cid-uw5kdbxl> <div class="p-8 md:p-10" data-astro-cid-uw5kdbxl> <h2 class="text-2xl md:text-3xl font-bold mb-2 text-payflo-dark" data-astro-cid-uw5kdbxl>
Envíanos un Mensaje
</h2> <p class="text-gray-600 mb-8" data-astro-cid-uw5kdbxl>
Completa el formulario y nos pondremos en contacto contigo
                pronto.
</p> ${successMessage && renderTemplate`<div class="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 flex items-start" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-6 w-6 mr-3 flex-shrink-0", "data-astro-cid-uw5kdbxl": true })} <p data-astro-cid-uw5kdbxl>${successMessage}</p> </div>`} ${errorMessage && renderTemplate`<div class="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-start" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:x-circle-duotone", "class": "h-6 w-6 mr-3 flex-shrink-0", "data-astro-cid-uw5kdbxl": true })} <p data-astro-cid-uw5kdbxl>${errorMessage}</p> </div>`} <form class="space-y-6" method="POST" data-astro-cid-uw5kdbxl> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl> <label for="name" class="block text-gray-700 font-medium mb-2" data-astro-cid-uw5kdbxl>Nombre</label> <input type="text" id="name" name="name"${addAttribute(formData.name, "value")} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple transition-all duration-200" required autocomplete="name" data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> <label for="email" class="block text-gray-700 font-medium mb-2" data-astro-cid-uw5kdbxl>Email</label> <input type="email" id="email" name="email"${addAttribute(formData.email, "value")} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple transition-all duration-200" required autocomplete="email" data-astro-cid-uw5kdbxl> </div> </div> <div data-astro-cid-uw5kdbxl> <label for="company" class="block text-gray-700 font-medium mb-2" data-astro-cid-uw5kdbxl>Empresa (Opcional)</label> <input type="text" id="company" name="company"${addAttribute(formData.company, "value")} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple transition-all duration-200" data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> <label for="subject" class="block text-gray-700 font-medium mb-2" data-astro-cid-uw5kdbxl>Asunto</label> <select id="subject" name="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple transition-all duration-200" required data-astro-cid-uw5kdbxl> <option value="" disabled${addAttribute(!formData.subject, "selected")} data-astro-cid-uw5kdbxl>Selecciona una opción</option> <option value="Consulta General"${addAttribute(formData.subject === "Consulta General", "selected")} data-astro-cid-uw5kdbxl>Consulta General</option> <option value="Soporte Técnico"${addAttribute(formData.subject === "Soporte Técnico", "selected")} data-astro-cid-uw5kdbxl>Soporte Técnico</option> <option value="Colaboración"${addAttribute(formData.subject === "Colaboración", "selected")} data-astro-cid-uw5kdbxl>Colaboración</option> <option value="Cotización"${addAttribute(formData.subject === "Cotización", "selected")} data-astro-cid-uw5kdbxl>Cotización</option> <option value="Otro"${addAttribute(formData.subject === "Otro", "selected")} data-astro-cid-uw5kdbxl>Otro</option> </select> </div> <div data-astro-cid-uw5kdbxl> <label for="message" class="block text-gray-700 font-medium mb-2" data-astro-cid-uw5kdbxl>Mensaje</label> <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple transition-all duration-200" placeholder="Describe tu consulta o solicitud..." required data-astro-cid-uw5kdbxl>${formData.message}</textarea> </div> <div data-astro-cid-uw5kdbxl> <button type="submit" id="submit-btn" class="contact-btn contact-btn-primary w-full justify-center relative transition-all duration-300" data-astro-cid-uw5kdbxl> <div id="btn-content" class="flex items-center justify-center" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:paper-plane-tilt", "class": "btn-icon", "data-astro-cid-uw5kdbxl": true })} <span class="btn-text" data-astro-cid-uw5kdbxl>Enviar Mensaje</span> </div> <div id="btn-spinner" class="absolute inset-0 flex items-center justify-center opacity-0" data-astro-cid-uw5kdbxl> <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-uw5kdbxl></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-uw5kdbxl></path> </svg> <span class="ml-2 font-medium" data-astro-cid-uw5kdbxl>Enviando...</span> </div> </button> </div> </form> </div> </div> </div> </div> </div> </section>  <section class="py-20 bg-white" data-astro-cid-uw5kdbxl> <div class="container-custom" data-astro-cid-uw5kdbxl> <div class="text-center max-w-3xl mx-auto animate-on-scroll" data-astro-cid-uw5kdbxl> <h2 class="text-3xl md:text-4xl font-bold text-payflo-dark" data-astro-cid-uw5kdbxl>
Nuestra Ubicación
</h2> <p class="mt-4 text-xl text-gray-600" data-astro-cid-uw5kdbxl>
Estamos aquí para ayudarte en lo que necesites.
</p> <div class="mt-6 space-y-2 text-gray-600" data-astro-cid-uw5kdbxl> <p class="flex items-center justify-center gap-2" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:envelope", "class": "h-5 w-5 text-payflo-purple flex-shrink-0", "data-astro-cid-uw5kdbxl": true })} <strong data-astro-cid-uw5kdbxl>Email:</strong> info@ferreiratic.com
</p> <p class="flex items-center justify-center gap-2" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:phone", "class": "h-5 w-5 text-payflo-purple flex-shrink-0", "data-astro-cid-uw5kdbxl": true })} <strong data-astro-cid-uw5kdbxl>Teléfono:</strong> +1 829 327 0889
</p> </div> </div> <div class="mt-12 h-96 rounded-xl overflow-hidden animate-on-scroll delay-1" data-astro-cid-uw5kdbxl> <div class="w-full h-full bg-payflo-gray flex items-center justify-center rounded-xl border border-gray-200 hover-zoom" data-astro-cid-uw5kdbxl> <div class="text-center p-8" data-astro-cid-uw5kdbxl> <div class="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-payflo-purple/10 text-payflo-purple mb-4" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:map-pin-duotone", "class": "h-8 w-8", "data-astro-cid-uw5kdbxl": true })} </div> <h3 class="text-xl font-semibold text-payflo-dark mb-2" data-astro-cid-uw5kdbxl>
Disponibles Globalmente
</h3> <p class="text-gray-600 max-w-md" data-astro-cid-uw5kdbxl>
Ofrecemos nuestros servicios de tecnología y consultoría a
              clientes en toda Latinoamérica y el Caribe.
</p> </div> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/contact.astro", void 0);
const $$file = "C:/Users/Ferreira_x2/Desktop/dev/turnapp-web-page/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
