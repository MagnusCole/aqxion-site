## Plan maestro para construir **AQXION.com** con IA asistida  
*(guárdalo como `roadmap_aqxion.md` en tu proyecto)*  

---

### 0. Premisas

| Variable | Elección |
|----------|----------|
| Infraestructura | Next.js 14 + Tailwind CSS + Vercel |
| Documentación base | Carpeta `AQXION_Web_Docs/` (ya generada) |
| Equipo humano | Solo tú (CEO/PM) + ChatGPT/GPT‑4o + Copilot |
| Horizonte MVP | 10 días corridos (≈ 30 h efectivas) |

---

## 1. Tablero de control

| Herramienta | Uso |
|-------------|-----|
| **GitHub Project** | Kanban “Backlog → Doing → Review → Done” |
| **Notion** | Página “AQXION Web” con enlaces: docs, Figma, deploy URL |
| **ChatGPT** | Generación de código/componentes, revisión copy |
| **GitHub Copilot** | Autocompletado en VS Code |

---

## 2. Fases detalladas y prompts IA

| Día | Fase | Acción | Prompt / Comandos clave | Responsable |
|-----|------|--------|-------------------------|-------------|
| 1 | Kick‑off | Crear issue “Setup Repo” | — | Tú |
| 1 | | **Repo**: `aqxion-site` | `npx create-next-app@latest aqxion-site --ts --tailwind --app` | ChatGPT guía → tú ejecutas |
| 1 | | Empujar a GitHub + link a Vercel | `git remote add origin ...` | Tú |
| 2 | Wireframe | Pedir wireframe IA | “Diseña wireframe página única con hero, manifesto, loop, CTA, footer en estilo Blackstone. Devuélvelo como texto ASCII boxes.” | ChatGPT (luego lo copias a Figma) |
| 2 | | Migrar a Figma (auto‑layout) | Figma “Import Wireframe” | Tú |
| 3 | UI HD | Pedir estilos Tailwind | “Convierte este wireframe a diseño HD: fuentes Inter/Garamond, colores definidos.” | ChatGPT |
| 3 | | Export hero JPG y `loop.svg` | Figma → Export | Tú |
| 4 | Components | Generar `Hero.tsx` | “Escribe un componente React+TSX con Tailwind para HERO: fondo negro, texto dorado, CTA invisible.” | ChatGPT / Copilot |
| 4 | | Commit + PR → Review | GitHub | Tú |
| 5 | Resto bloques | Repetir para Manifesto, Loop, Credenciales, CTA, Footer | Prompts análogos | ChatGPT / Copilot |
| 6 | Content load | Crear carpeta `content` y MDX loader | “Añade soporte MDX a App Router, ejemplo de manifiesto MDX.” | ChatGPT |
| 6 | | Copiar textos de `copy_blocks.md` | — | Tú |
| 7 | QA | Correr Lighthouse | `pnpm dlx lighthouse http://localhost:3000` | Tú |
| 7 | | Arreglar a11y alto contraste | ChatGPT sugiere roles/aria | ChatGPT |
| 8 | SEO | Implementar Head util | “Agrega next-seo config usando seo.json; ejemplo de default metadata.” | ChatGPT |
| 8 | | Crear `public/og.png` (AI art) | DALL·E prompt: “Monochrome marble monolith with gold AQXION logo” | ChatGPT |
| 9 | Deploy | Vercel prod deploy | Vercel dashboard → `aqxion.com` | Tú |
| 10 | Handoff | Grabar Loom walkthrough de edición copy | — | Tú |
| 10 | | Crear `README.md` uso y actualización | “Genera README claro para no técnicos con secciones ‘Editar copy’, ‘Re‑deploy’.” | ChatGPT |

---

## 3. Check‑list de definición de hecho (“Definition of Done”)

- [ ] Score ≥ 90 Lighthouse (Perf/Acc/Best Pract/SEO)  
- [ ] Hero, Manifesto, Loop, CTA visibles sin scroll lateral  
- [ ] Dominio `https://aqxion.com` activo, SSL OK  
- [ ] `deal@aqxion.com` mailto link operativo  
- [ ] README + Loom en repo raíz  
- [ ] No texto Lorem / comentarios pendientes

---

## 4. Gestión de riesgos

| Riesgo | Mitigación |
|--------|------------|
| Bloqueo técnico (build error) | Preguntar a ChatGPT con log; usar `vercel —debug` |
| Se alarga diseño Figma | Mantener principio: “mezclar Blackstone minimal con Palantir dark”, sin exploración extra |
| Copilot genera Tailwind desordenado | Enforce Prettier + ESLint plugin Tailwind → orden de clases |

---

## 5. Cómo hablar con la IA (guía rápida)

1. **Contexto primero**  
   - “Estamos en Next.js 14, Tailwind, need TSX component.”
2. **Formato deseado**  
   - “Devuélveme solo el código dentro de ```tsx```.”
3. **Criterio de aceptación**  
   - “Debe pasar `npm run lint` y usar clases Tailwind existentes.”

---

## 6. Próxima acción inmediata

1. **Crea el repo** (`phase 1`)  
2. Pega el bloque **wireframe prompt** en ChatGPT.  
3. Avísame para revisar la respuesta de la IA antes de pasar a Figma.
