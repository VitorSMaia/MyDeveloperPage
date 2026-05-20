import projectsData from "@/data/projects.json";

export type Project = {
  id: string;
  title: string;
  description_en: string;
  description_pt: string;
  image_url: string;
  technologies: string;
  demo_url: string | null;
  github_url: string | null;
  created_at: string;
};

export type ProjectWithTech = Project & {
  techList: string[];
};

export function getProjects(): ProjectWithTech[] {
  return (projectsData as Project[]).map((project) => ({
    ...project,
    techList: parseTechnologies(project.technologies),
  }));
}

function parseTechnologies(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}
