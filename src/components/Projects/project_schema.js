import z from "zod";

export const ProjectSchema=z.object({
    title:z.string().trim().min(3,{message:"Title must be at least 3 character long"}).max(100,{message:"Title must be at most 100 character long"}),
    description:z.string().trim().min(3,{message:"Description must be at least 3 character long"}).max(1000,{message:"Description must be at most 1000 character long"}),
    live:z.string().url({message:"Invalid project live url"}).min(0).nullable().optional(),
    github:z.string().url({message:"Invalid url"}).min(0).nullable().optional(),
    open_source:z.boolean(),
    tags:z.array(z.string()).min(1).max(10),
    priority:z.number().min(1).nullable().optional(),
    project_images:z.array(z.string()).min(1),
    video_url:z.string().url().min(0).nullable().optional(),
    organization:z.object({title:z.string().trim().min(3,{message:"Title must be at least 3 character long"}).max(100,{message:"Title must be at most 100 character long"}),
    url:z.string().url().optional().nullable(),
    logo:z.string().url().optional()}).nullable().optional(),
    created_at:z.string().datetime().nullable().optional(),
    updated_at:z.string().datetime().nullable().optional(),
})
export const ProjectListSchema=z.array(ProjectSchema).min(1);

