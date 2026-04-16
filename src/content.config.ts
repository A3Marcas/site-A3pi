import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    // Carrega arquivos Markdown e MDX na pasta `src/content/blog/`
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    
    // Validação dos campos do topo do seu arquivo .md
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Garante que a data seja tratada como um objeto de data real
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            // Adicionamos a categoria aqui para resolver o erro no blog.astro
            category: z.string(),
            // Deixamos a imagem como opcional para não dar erro de "Image NotFound"
            heroImage: z.optional(image()),
        }),
});

export const collections = { blog };